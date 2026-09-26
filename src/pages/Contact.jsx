import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

import "../style/index.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Backend / e-poçt servisi qoşulanda burada göndəriləcək
    setSent(true);

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <div className="contact__copy">
          <div className="hero__eyebrow">Əlaqə</div>

          <h2 className="about__title">
            Sualın var? Yaz
          </h2>

          <p className="about__lead">
            Təklif, sual və ya əməkdaşlıq üçün bizimlə əlaqə
            saxla — adətən bir iş günü ərzində cavab veririk.
          </p>

          <div className="contact__info">
            <div className="contact__info-item">
              <Mail size={20} strokeWidth={1.8} />
              <span>info@ecoscan.az</span>
            </div>

            <div className="contact__info-item">
              <MapPin size={20} strokeWidth={1.8} />
              <span>Bakı, Azərbaycan</span>
            </div>
          </div>
        </div>

        <form
          className="contact__form"
          onSubmit={handleSubmit}
        >
          <label className="contact__field">
            <span>Ad</span>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Adın"
              required
            />
          </label>

          <label className="contact__field">
            <span>E-poçt</span>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="sen@nümunə.com"
              required
            />
          </label>

          <label className="contact__field">
            <span>Mesaj</span>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Mesajını yaz..."
              rows={5}
              required
            />
          </label>

          <button
            type="submit"
            className="btn btn--primary contact__submit"
          >
            <Send size={17} strokeWidth={2} />
            Göndər
          </button>

          {sent && (
            <p className="contact__success">
              Mesajın göndərildi, tezliklə cavab veriləcək.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
