import { useState } from "react";
import { Mail, Lock, User, ArrowRight, LoaderCircle } from "lucide-react";

import "../style/pages/register.css";

const API_URL = import.meta.env.VITE_API_URL;

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (!form.name || !form.email || !form.password) {
      setError("Bütün xanaları doldur.");
      return;
    }

    if (form.password.length < 6) {
      setError("Şifrə ən azı 6 simvoldan ibarət olmalıdır.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${API_URL}/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            password: form.password,
          }),
        }
      );

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          data?.message ||
            data?.error ||
            "Qeydiyyat zamanı xəta baş verdi."
        );
      }

      setSuccess(
        data?.message ||
          "Qeydiyyat uğurla tamamlandı."
      );

      setForm({
        name: "",
        email: "",
        password: "",
      });
    } catch (err) {
      setError(
        err.message ||
          "Serverə qoşulmaq mümkün olmadı."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="register">
      <div className="register__container">

        <div className="register__intro">
          <span className="register__eyebrow">
            ECOSCAN
          </span>

          <h1>
            Təbiəti daha yaxşı
            <br />
            tanımağa başla.
          </h1>

          <p>
            Hesab yarat və EcoScan ilə tullantılarını
            və bitkilərini analiz etməyə başla.
          </p>
        </div>

        <div className="register__card">

          <div className="register__card-header">
            <h2>Hesab yarat</h2>

            <p>
              EcoScan hesabını yaratmaq üçün
              məlumatlarını daxil et.
            </p>
          </div>

          <form
            className="register__form"
            onSubmit={handleSubmit}
          >

            {/* Name */}
            <div className="register__field">
              <label htmlFor="name">
                Ad
              </label>

              <div className="register__input">
                <User size={18} />

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Adınızı daxil edin"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                />
              </div>
            </div>

            {/* Email */}
            <div className="register__field">
              <label htmlFor="email">
                E-poçt
              </label>

              <div className="register__input">
                <Mail size={18} />

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@mail.com"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </div>
            </div>

            {/* Password */}
            <div className="register__field">
              <label htmlFor="password">
                Şifrə
              </label>

              <div className="register__input">
                <Lock size={18} />

                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Şifrənizi daxil edin"
                  value={form.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
              </div>
            </div>

            {error && (
              <div className="register__message register__message--error">
                {error}
              </div>
            )}

            {success && (
              <div className="register__message register__message--success">
                {success}
              </div>
            )}

            <button
              type="submit"
              className="register__submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <LoaderCircle
                    size={18}
                    className="register__spinner"
                  />
                  Qeydiyyatdan keçirilir...
                </>
              ) : (
                <>
                  Qeydiyyatdan keç
                  <ArrowRight size={18} />
                </>
              )}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}