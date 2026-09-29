import { useEffect, useState } from "react";
import {
  Link,
  useLocation,
} from "react-router-dom";
import {
  Menu,
  X,
  Sun,
  Moon,
  User,
} from "lucide-react";

import "../style/components/navbar.css";

import logoLight from "../assets/logo.png";
import logoDark from "../assets/logo-dark.png";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [user, setUser] = useState(null);

  // Theme
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

  // Login vəziyyətini yoxlayırıq
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (!token || !storedUser) {
      setUser(null);
      return;
    }

    try {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    } catch {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setUser(null);
    }
  }, [location.pathname]);

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

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <nav className="navbar__inner">

        {/* Logo */}
        <Link
          to="/"
          className="navbar__logo"
          onClick={closeMenu}
        >
          <img
            src={isDark ? logoDark : logoLight}
            alt="EcoScan"
          />
        </Link>

        {/* Desktop navigation */}
        <ul className="navbar__links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="navbar__actions">

          {/* Theme */}
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
              <Sun
                size={19}
                strokeWidth={2}
              />
            ) : (
              <Moon
                size={19}
                strokeWidth={2}
              />
            )}
          </button>

          {/* Login olubsa profil, olmayıbsa Başla */}
          {user ? (
            <Link
              to="/profile"
              className="navbar__profile"
              onClick={closeMenu}
            >
              <span className="navbar__profile-icon">
                <User
                  size={17}
                  strokeWidth={2}
                />
              </span>

              <span className="navbar__profile-name">
                {user.name || "Profil"}
              </span>
            </Link>
          ) : (
            <Link
              to="/register"
              className="navbar__cta"
              onClick={closeMenu}
            >
              Başla <span>→</span>
            </Link>
          )}

          {/* Mobile menu button */}
          <button
            type="button"
            className="navbar__toggle"
            onClick={() =>
              setIsOpen((prev) => !prev)
            }
            aria-label={
              isOpen
                ? "Menyunu bağla"
                : "Menyunu aç"
            }
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
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
            <li key={link.href}>
              <Link
                to={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar__mobile-actions">

          {/* Mobile theme */}
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

          {/* Mobile profile / register */}
          {user ? (
            <Link
              to="/profile"
              onClick={closeMenu}
              className="navbar__profile navbar__profile--block"
            >
              <span className="navbar__profile-icon">
                <User
                  size={17}
                  strokeWidth={2}
                />
              </span>

              <span>
                {user.name || "Profil"}
              </span>
            </Link>
          ) : (
            <Link
              to="/register"
              onClick={closeMenu}
              className="navbar__cta navbar__cta--block"
            >
              Başla <span>→</span>
            </Link>
          )}

        </div>
      </div>
    </header>
  );
}