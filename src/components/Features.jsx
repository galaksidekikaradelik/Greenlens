import { Recycle, Leaf, Check } from "lucide-react";
import "../style/components/features.css";

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
          <p>Kamerandan başqa heç nəyə ehtiyacın yoxdur.</p>
        </div>

        <div className="features__grid">
          <div className="feature-card">
            <div className="feature-card__icon">
              <Recycle size={22} strokeWidth={1.8} />
            </div>
            <h3>Tullantı Skaneri</h3>
            <p>Şəkil çək, material növünü öyrən, düzgün qutuya at.</p>
            <ul className="feature-card__list">
              {WASTE_POINTS.map((point) => (
                <li key={point}>
                  <Check size={14} strokeWidth={2} />
                  {point}
                </li>
              ))}
            </ul>
            <a href="#waste" className="feature-card__link">
              Tullantını sına →
            </a>
          </div>

          <div className="feature-card">
            <div className="feature-card__icon">
              <Leaf size={22} strokeWidth={1.8} />
            </div>
            <h3>Bitki Skaneri</h3>
            <p>Yarpağı çərçivəyə al, ani sağlamlıq hesabatı al.</p>
            <ul className="feature-card__list">
              {PLANT_POINTS.map((point) => (
                <li key={point}>
                  <Check size={14} strokeWidth={2} />
                  {point}
                </li>
              ))}
            </ul>
            <a href="#plant" className="feature-card__link">
              Bitkini sına →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}