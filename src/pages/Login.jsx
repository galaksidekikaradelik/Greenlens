import { useState } from "react";
import {
  Mail,
  Lock,
  ArrowRight,
  LoaderCircle,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import "../style/pages/register.css";

const API_URL = import.meta.env.VITE_API_URL;

export default function Login() {
    const navigate = useNavigate();
  const [form, setForm] = useState({
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

    if (!form.email || !form.password) {
      setError("E-poçt və şifrəni daxil et.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
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
            "E-poçt və ya şifrə yanlışdır."
        );
      }

      // JWT token-i saxlayırıq
      if (data?.token) {
        localStorage.setItem("token", data.token);

        localStorage.setItem(
          "user",
          JSON.stringify({
            userId: data.userId,
            name: data.name,
            email: data.email,
            provider: data.provider,
          })
        );
      }

      setSuccess("Uğurla daxil oldunuz.");

        setForm({
            email: "",
            password: "",
        });

        navigate("/profile");
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
            Yenidən
            <br />
            xoş gəldin.
          </h1>

          <p>
            Hesabına daxil ol və EcoScan ilə
            analizlərinə davam et.
          </p>
        </div>

        <div className="register__card">

          <div className="register__card-header">
            <h2>Daxil ol</h2>

            <p>
              EcoScan hesabına daxil olmaq üçün
              məlumatlarını daxil et.
            </p>
          </div>

          <form
            className="register__form"
            onSubmit={handleSubmit}
          >

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
                  autoComplete="current-password"
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
                  Daxil olunur...
                </>
              ) : (
                <>
                  Daxil ol
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