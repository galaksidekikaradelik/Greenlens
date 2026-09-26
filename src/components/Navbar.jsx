import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";

import "../style/index.css";

import logoLight from "../assets/logo.png";
import logoDark from "../assets/logo-dark.png";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Theme-i yadda saxla və əvvəlki theme-i oxu
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;

    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="navbar">
      <nav className="navbar__inner">

        {/* Logo */}
        <a href="#home" className="navbar__logo">
          <img
            src={isDark ? logoDark : logoLight}
            alt="YaşılSkan"
          />
        </a>

        {/* Desktop links */}
        <ul className="navbar__links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="navbar__actions">

          {/* Theme toggle */}
          <button
            type="button"
            className="navbar__theme-toggle"
            onClick={toggleTheme}
            aria-label={
              isDark
                ? "Açıq temaya keç"
                : "Tünd temaya keç"
            }
          >
            {isDark ? (
              <Sun size={19} strokeWidth={2} />
            ) : (
              <Moon size={19} strokeWidth={2} />
            )}
          </button>

          {/* CTA */}
          <a href="#get-started" className="navbar__cta">
            Başla <span>→</span>
          </a>

          {/* Mobile menu */}
          <button
            type="button"
            className="navbar__toggle"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={
              isOpen ? "Menyunu bağla" : "Menyunu aç"
            }
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`navbar__mobile-menu ${
          isOpen ? "is-open" : ""
        }`}
      >
        <ul className="navbar__mobile-links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__mobile-actions">

          <button
            type="button"
            className="navbar__theme-toggle"
            onClick={toggleTheme}
            aria-label={
              isDark
                ? "Açıq temaya keç"
                : "Tünd temaya keç"
            }
          >
            {isDark ? (
              <>
                <Sun size={19} />
                Açıq tema
              </>
            ) : (
              <>
                <Moon size={19} />
                Tünd tema
              </>
            )}
          </button>

          <a
            href="#get-started"
            onClick={() => setIsOpen(false)}
            className="navbar__cta navbar__cta--block"
          >
            Başla <span>→</span>
          </a>

        </div>
      </div>
    </header>
  );
}
