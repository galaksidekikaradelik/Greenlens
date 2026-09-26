import { Recycle, Leaf, Sparkles } from "lucide-react";
import "../style/index.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__inner">
        <div className="hero__copy">
          <div className="hero__eyebrow">
            <Sparkles size={16} />
            Süni intellekt əsaslı ekoloji köməkçi
          </div>

          <h1 className="hero__title">
            Bir şəkil yüklə,
            <br />
            təbiəti daha yaxşı qoru.
          </h1>

          <p className="hero__lead">
            EcoScan tullantıları və bitkiləri saniyələr ərzində analiz edir.
            Tullantının hansı kateqoriyaya aid olduğunu müəyyənləşdirir,
            bitkilərdə isə mümkün xəstəlik və problemləri aşkarlayaraq
            istifadəçiyə ağıllı tövsiyələr təqdim edir.
          </p>

          <div className="hero__ctas">
            <a href="#scan" className="btn btn--primary">
              İndi Skan Et
            </a>

            <a href="#features" className="btn btn--outline">
              Necə işləyir?
            </a>
          </div>
        </div>

        <div className="hero__card">
          <div className="hero__card-tag">
            AI ilə analiz edilən kateqoriyalar
          </div>

          <div className="hero__choices">
            <div className="hero__choice">
              <Recycle size={28} strokeWidth={1.8} />
              <b>Tullantı Analizi</b>
              <span>
                Plastik, kağız, metal və digər tullantıları tanı
              </span>
            </div>

            <div className="hero__choice">
              <Leaf size={28} strokeWidth={1.8} />
              <b>Bitki Analizi</b>
              <span>
                Bitkinin sağlamlığını və mümkün xəstəliklərini yoxla
              </span>
            </div>
          </div>

          <div className="hero__badge">
            🌱 Ekoloji qərarlar üçün AI dəstəyi
          </div>
        </div>
      </div>
    </section>
  );
}