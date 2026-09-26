import { Camera, Sparkles, ClipboardCheck, ArrowRight } from "lucide-react";
import "../style/components/how-it-works.css";

const STEPS = [
  {
    icon: Camera,
    title: "01. Şəklini çəkin",
    text: "Tullantını ya da bitkini kadra al.",
  },
  {
    icon: Sparkles,
    title: "02. AI ilə analiz edin",
    text: "Süni intellekt şəkli qabaqcıl modellərlə analiz edir.",
  },
  {
    icon: ClipboardCheck,
    title: "03. Düzgün bilgi alın",
    text: "Aydın, tətbiq edilə bilən tövsiyə göstərilir.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how" id="how">
      <div className="how__inner">
        <div className="how__head">
          <h2>Necə işləyir</h2>
          <p>Üç sadə addım. Böyük təsir.</p>
        </div>

        <div className="how__steps">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div className="how__step-wrap" key={step.title}>
                <div className="how__step">
                  <div className="how__icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
                {index < STEPS.length - 1 && (
                  <ArrowRight className="how__arrow" size={20} strokeWidth={1.8} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}