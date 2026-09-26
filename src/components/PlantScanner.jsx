import { useRef, useState } from "react";
import { Leaf, Upload, X, Sparkles } from "lucide-react";
import "../style/components/scanner.css";

export default function PlantScanner() {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  const removeImage = () => {
    setImage(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <section className="scanner" id="plant">
      <div className="scanner__inner">
        <div className="scanner__header">
          <div className="scanner__icon">
            <Leaf size={26} />
          </div>

          <span>BİTKİ SKANERİ</span>

          <h2>Bitkini tanıyaq.</h2>

          <p>
            Bitkinin şəklini qalereyadan seç və onun sağlamlığı haqqında
            məlumat əldə et.
          </p>
        </div>

        <div className="scanner__box">
          {!image ? (
            <button
              className="scanner__upload"
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="scanner__upload-icon">
                <Upload size={28} />
              </div>

              <strong>Şəkil seç</strong>

              <span>Qalereyadan bitki şəklini seç</span>
            </button>
          ) : (
            <div className="scanner__preview">
              <img src={image} alt="Seçilmiş bitki" />

              <button
                className="scanner__remove"
                onClick={removeImage}
                aria-label="Şəkli sil"
              >
                <X size={18} />
              </button>
            </div>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            hidden
          />

          {image && (
            <button className="scanner__analyze">
              <Sparkles size={18} />
              Analiz et
            </button>
          )}
        </div>
      </div>
    </section>
  );
}