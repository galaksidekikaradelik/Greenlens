import { Recycle, Leaf, Check } from "lucide-react";
import "../style/index.css";

const WASTE_POINTS = [
  "Material növünü tanıyır",
  "Doğru qutunu göstərir",
  "Təkrar emal məsləhəti verir",
];

const PLANT_POINTS = [
  "Xəstəlik əlamətlərini tapır",
  "Qulluq tövsiyəsi verir",
  "Bitkini sağlam saxlayır",
];

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="features__inner">
        <div className="features__head">
          <h2>İki skan, tək məqsəd</h2>
          <p>Kamerandan və ya qalereyandan şəkil seç, analizə başla.</p>
        </div>

        <div className="features__grid">
          {/* TULLANTI */}
          <div className="feature-card">
            <div className="feature-card__icon">
              <Recycle size={22} strokeWidth={1.8} />
            </div>

            <h3>Tullantı Skaneri</h3>

            <p>
              Tullantının şəklini seç, material növünü müəyyən et və düzgün
              qutu haqqında məlumat al.
            </p>

            <ul className="feature-card__list">
              {WASTE_POINTS.map((point) => (
                <li key={point}>
                  <Check size={14} strokeWidth={2} />
                  {point}
                </li>
              ))}
            </ul>

            <a href="#waste" className="feature-card__link">
              Tullantını skan et →
            </a>
          </div>

          {/* BITKI */}
          <div className="feature-card">
            <div className="feature-card__icon">
              <Leaf size={22} strokeWidth={1.8} />
            </div>

            <h3>Bitki Skaneri</h3>

            <p>
              Bitkinin şəklini qalereyadan seç və onun sağlamlığı haqqında
              süni intellekt əsaslı analiz al.
            </p>

            <ul className="feature-card__list">
              {PLANT_POINTS.map((point) => (
                <li key={point}>
                  <Check size={14} strokeWidth={2} />
                  {point}
                </li>
              ))}
            </ul>

            <a href="#plant" className="feature-card__link">
              Bitkini skan et →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}