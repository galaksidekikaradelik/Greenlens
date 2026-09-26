import { Recycle, Leaf, Check, Upload } from "lucide-react";
import { useRef, useState } from "react";
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

function ScannerBox({ type }) {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);

  const isWaste = type === "waste";

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  return (
    <div className="scanner-box">
      {!image ? (
        <button
          type="button"
          className="scanner-box__upload"
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload size={28} />

          <strong>Şəkil seç</strong>

          <span>
            {isWaste
              ? "Tullantı şəklini qalereyadan seç"
              : "Bitki şəklini qalereyadan seç"}
          </span>
        </button>
      ) : (
        <div className="scanner-box__preview">
          <img
            src={image}
            alt={isWaste ? "Seçilmiş tullantı" : "Seçilmiş bitki"}
          />

          <button
            type="button"
            className="scanner-box__change"
            onClick={() => fileInputRef.current?.click()}
          >
            Şəkli dəyiş
          </button>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        hidden
      />

      {image && (
        <button type="button" className="scanner-box__analyze">
          Analiz et →
        </button>
      )}
    </div>
  );
}

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="features__inner">
        <div className="features__head">
          <h2>İki skan, tək məqsəd</h2>
          <p>
            Kamerandan və ya qalereyandan şəkil seç, analizə başla.
          </p>
        </div>

        <div className="features__grid">
          {/* TULLANTI */}
          <div className="feature-card">
            <div className="feature-card__icon">
              <Recycle size={22} strokeWidth={1.8} />
            </div>

            <h3>Tullantı Skaneri</h3>

            <p>
              Şəkil seç, material növünü öyrən və düzgün qutuya at.
            </p>

            <ul className="feature-card__list">
              {WASTE_POINTS.map((point) => (
                <li key={point}>
                  <Check size={14} strokeWidth={2} />
                  {point}
                </li>
              ))}
            </ul>

            <ScannerBox type="waste" />
          </div>

          {/* BITKI */}
          <div className="feature-card">
            <div className="feature-card__icon">
              <Leaf size={22} strokeWidth={1.8} />
            </div>

            <h3>Bitki Skaneri</h3>

            <p>
              Bitkinin şəklini seç və sağlamlığı haqqında məlumat al.
            </p>

            <ul className="feature-card__list">
              {PLANT_POINTS.map((point) => (
                <li key={point}>
                  <Check size={14} strokeWidth={2} />
                  {point}
                </li>
              ))}
            </ul>

            <ScannerBox type="plant" />
          </div>
        </div>
      </div>
    </section>
  );
}