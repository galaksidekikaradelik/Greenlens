import "../style/components/footer.css";

const PLATFORM_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Haqqımızda", href: "#about" },
  { label: "Əlaqə", href: "#contact" },
];

const CATEGORY_LINKS = [
  { label: "Tullantı Skan", href: "#waste" },
  { label: "Bitki Skan", href: "#plant" },
  { label: "Bələdçilər", href: "#guides" },
  { label: "Tədbirlər", href: "#events" },
];

const FAQ_LINKS = [
  { label: "YaşılSkan nədir?", href: "#faq-1" },
  { label: "Nəticələr nə qədər dəqiqdir?", href: "#faq-2" },
  { label: "Hansı şəhərlərdə mövcuddur?", href: "#faq-3" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__col footer__col--brand">
            <span className="footer__brand">EcoScan</span>

            <p>
              Gənclər üçün tullantını və bitki sağlamlığını bir platformada
              tanımağa imkan verən rəqəmsal alət.
            </p>
          </div>

          <div className="footer__col">
            <span className="footer__heading">PLATFORM</span>

            <ul>
              {PLATFORM_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <span className="footer__heading">KATEQORİYA</span>

            <ul>
              {CATEGORY_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <span className="footer__heading">FAQ</span>

            <ul>
              {FAQ_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__disclaimer">
            YaşılSkan nəticələri süni intellekt vasitəsilə göstərir, son qərar
            istifadəçiyə aiddir. <span>Daha təmiz planet üçün.</span>
          </p>

          <div className="footer__bottom-row">
            <span className="footer__copyright">
              © 2026 YaşılSkan. Bütün hüquqlar qorunur.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

