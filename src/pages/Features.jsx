import { Recycle, Leaf, Sparkles, Compass, Check } from "lucide-react";
import "../style/pages/features.css";

const FEATURES = [
  {
    icon: Recycle,
    title: "Tullantı Skan",
    points: [
      "Tullantının şəklini yükləyirsən.",
      "AI tullantının növünü müəyyən edir.",
      "Hansı kateqoriyaya aid olduğunu göstərir.",
      "Düzgün çeşidləmə barədə məlumat verir.",
    ],
  },
  {
    icon: Leaf,
    title: "Bitki Skan",
    points: [
      "Bitkinin şəklini yükləyirsən.",
      "AI bitkinin vəziyyətini analiz edir.",
      "Mümkün problemləri müəyyənləşdirir.",
      "Qulluq üçün tövsiyələr təqdim edir.",
    ],
  },
  {
    icon: Sparkles,
    title: "AI Analiz",
    points: [
      "Şəkil əsasında sürətli analiz.",
      "Nəticə sadə və başa düşülən formada.",
      "İstifadəçiyə ekoloji və praktiki məlumat verir.",
    ],
  },
  {
    icon: Compass,
    title: "Ekoloji Bələdçilər",
    points: [
      "Tullantıların çeşidlənməsi",
      "Təkrar emal",
      "Bitkiyə qulluq",
      "Gündəlik ekoloji vərdişlər",
    ],
  },
];

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="features__inner">
        <div className="features__head">
          <h2>Features</h2>
          <p>YaşılSkan-ın əsas funksiyaları.</p>
        </div>

        <div className="features__grid">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div className="feature-card" key={feature.title}>
                <div className="feature-card__icon">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <h3>{feature.title}</h3>
                <ul className="feature-card__list">
                  {feature.points.map((point) => (
                    <li key={point}>
                      <Check size={14} strokeWidth={2} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}