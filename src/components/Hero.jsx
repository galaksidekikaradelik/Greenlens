import { Link } from "react-router-dom";
import {
  Recycle,
  Leaf,
  ArrowRight,
  ScanLine,
  Sparkles,
} from "lucide-react";

import "../style/index.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__inner">

        {/* LEFT */}
        <div className="hero__copy">
          <div className="hero__eyebrow">
            <Sparkles size={14} />
            AI İLƏ DAHA TƏMİZ VƏ YAŞIL GƏLƏCƏK
          </div>

          <h1 className="hero__title">
            Daha ağıllı seçimlər et,
            <br />
            <span>daha yaşıl gələcək qur.</span>
          </h1>

          <p className="hero__lead">
            EcoScan tullantıları və bitkiləri süni intellektlə
            analiz edir. Bir şəkil yüklə, saniyələr ərzində
            nəticə və faydalı tövsiyələr əldə et.
          </p>

          <div className="hero__ctas">
            <Link
              to="/features#waste"
              className="btn btn--primary"
            >
              <Recycle size={17} />
              Tullantını skan et
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/features#plant"
              className="btn btn--outline"
            >
              <Leaf size={17} />
              Bitkini skan et
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="hero__note">
            <ScanLine size={15} />
            Şəkil seç. EcoScan analiz etsin. Nəticəni öyrən.
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero__visual">
          <div className="hero__visual-glow" />

          <div className="hero__app">

            <div className="hero__app-top">
              <div className="hero__app-brand">
                <div className="hero__app-logo">
                  <Leaf size={16} />
                </div>

                <span>EcoScan</span>
              </div>

              <span className="hero__app-status">
                AI powered
              </span>
            </div>

            <div className="hero__app-content">
              <span className="hero__app-label">
                Nəyi analiz etmək istəyirsən?
              </span>

              <h3>
                Skan növünü seç
              </h3>

              <div className="hero__app-options">

                <Link
                  to="/features#waste"
                  className="hero__app-option"
                >
                  <div className="hero__app-option-icon">
                    <Recycle size={27} />
                  </div>

                  <strong>Tullantı</strong>

                  <span>
                    Materialı və düzgün qutunu müəyyən et
                  </span>

                  <div className="hero__app-option-arrow">
                    <ArrowRight size={15} />
                  </div>
                </Link>

                <Link
                  to="/features#plant"
                  className="hero__app-option"
                >
                  <div className="hero__app-option-icon">
                    <Leaf size={27} />
                  </div>

                  <strong>Bitki</strong>

                  <span>
                    Bitkinin sağlamlığını analiz et
                  </span>

                  <div className="hero__app-option-arrow">
                    <ArrowRight size={15} />
                  </div>
                </Link>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}