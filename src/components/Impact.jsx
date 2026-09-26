import { Recycle, Leaf, Check } from "lucide-react";
import "../style/components/impact.css";

const WASTE_POINTS = ["Növü tanı", "Qutunu tap", "Ətraf mühit tövsiyəsi"];
const PLANT_POINTS = ["Xəstəliyi tap", "Qulluq tövsiyəsi", "Sağlamlıq tarixçəsi"];

export default function Impact() {
  return (
    <section className="impact" id="impact">
      <div className="impact__inner">
        <div className="impact__hero">
          <h2>İki skan. Bir yaşıl gələcək.</h2>
          <p>Ağıllı texnologiya ilə daha təmiz seçimlər edirik.</p>
        </div>

        <div className="impact__card">
          <div className="impact__icon">
            <Recycle size={20} strokeWidth={1.8} />
          </div>
          <h3>Tullantı Skan</h3>
          <ul className="impact__list">
            {WASTE_POINTS.map((point) => (
              <li key={point}>
                <Check size={14} strokeWidth={2} />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="impact__card">
          <div className="impact__icon">
            <Leaf size={20} strokeWidth={1.8} />
          </div>
          <h3>Bitki Skan</h3>
          <ul className="impact__list">
            {PLANT_POINTS.map((point) => (
              <li key={point}>
                <Check size={14} strokeWidth={2} />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}