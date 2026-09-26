import { Camera, Cpu, CheckCircle2, Recycle, Leaf, Users } from "lucide-react";
import "../style/index.css";

export default function AboutUs() {
  return (
    <div className="aboutus">
      {/* ---- Page header ---- */}
      <section className="aboutus__header">
        <div className="hero__eyebrow">Haqqımızda</div>
        <h1 className="aboutus__title">
          Təbiəti qorumaq üçün sadə texnologiya
        </h1>
        <p className="aboutus__lead">
          EcoScan tullantı sortlaşdırmasını və bitki sağlamlığını süni
          intellektlə asanlaşdıran layihədir. Məqsədimiz mürəkkəb ekoloji
          qərarları hər kəs üçün bir kamera klikinə endirmək.
        </p>
      </section>

      {/* ---- Mission ---- */}
      <section className="aboutus__mission">
        <div className="aboutus__mission-visual">
          <div className="about__badge-lg">
            <Leaf size={40} strokeWidth={1.5} />
          </div>
        </div>
        <div>
          <h2 className="about__title">Niyə EcoScan?</h2>
          <p className="about__lead">
            Hər gün milyonlarla insan tullantını səhv qutuya atır, çünki
            hansı kateqoriyaya aid olduğunu bilmir. Eyni zamanda bağçalarda
            və tarlalarda bitki xəstəlikləri gec aşkarlandığı üçün böyük
            itkilərə səbəb olur. EcoScan bu iki problemi eyni alətlə — sadə
            bir telefon kamerası ilə — həll edir.
          </p>
        </div>
      </section>

      {/* ---- How it works: real sequence, so numbered ---- */}
      <section className="aboutus__steps">
        <h2 className="aboutus__section-title">Necə işləyir</h2>
        <div className="aboutus__steps-grid">
          <div className="aboutus__step">
            <span className="aboutus__step-num">1</span>
            <Camera size={26} strokeWidth={1.7} />
            <b>Şəkil çək</b>
            <p>Tullantının və ya bitkinin şəklini telefon kamerası ilə çək.</p>
          </div>
          <div className="aboutus__step">
            <span className="aboutus__step-num">2</span>
            <Cpu size={26} strokeWidth={1.7} />
            <b>AI analiz edir</b>
            <p>Model şəkli saniyələr ərzində emal edir və kateqoriyanı müəyyənləşdirir.</p>
          </div>
          <div className="aboutus__step">
            <span className="aboutus__step-num">3</span>
            <CheckCircle2 size={26} strokeWidth={1.7} />
            <b>Nəticəni al</b>
            <p>Hansı qutuya atmalı olduğunu, ya da bitkinin problemini öyrən.</p>
          </div>
        </div>
      </section>

      {/* ---- Values ---- */}
      <section className="aboutus__values">
        <div className="about__point">
          <Recycle size={22} strokeWidth={1.8} />
          <div>
            <b>Düzgün sortlaşdırma</b>
            <span>Az xəta, daha çox material geri qazanılır.</span>
          </div>
        </div>
        <div className="about__point">
          <Leaf size={22} strokeWidth={1.8} />
          <div>
            <b>Erkən müdaxilə</b>
            <span>Bitki xəstəlikləri yayılmadan aşkarlanır.</span>
          </div>
        </div>
        <div className="about__point">
          <Users size={22} strokeWidth={1.8} />
          <div>
            <b>Hər kəs üçün</b>
            <span>Xüsusi bilik və ya avadanlıq tələb olunmur.</span>
          </div>
        </div>
      </section>
    </div>
  );
}