import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";
import "../style/index.css";

import {logo_light} from "../assets/logo.png";
import {logo_dark} from "../assets/logo-dark.png";


const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <nav className="navbar__inner">
        {/* Logo */}
        <a href="#home" className="navbar__logo">
          <Leaf size={24} strokeWidth={2.2} />
          YaşılSkan
        </a>

        {/* Desktop links */}
        <ul className="navbar__links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <a href="#get-started" className="navbar__cta">
          Başla →
        </a>

        {/* Mobile menu toggle */}
        <button
          className="navbar__toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Menyunu bağla" : "Menyunu aç"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`navbar__mobile-menu ${isOpen ? "is-open" : ""}`}>
        <ul className="navbar__mobile-links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#get-started"
          onClick={() => setIsOpen(false)}
          className="navbar__cta navbar__cta--block"
        >
          Başla →
        </a>
      </div>
    </header>
  );
}