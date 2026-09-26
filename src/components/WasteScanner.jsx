import { useRef, useState } from "react";
import { Recycle, Upload, X, Sparkles } from "lucide-react";
import "../style/components/scanner.css";

export default function WasteScanner() {
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
    <section className="scanner" id="waste">
      <div className="scanner__inner">
        <div className="scanner__header">
          <div className="scanner__icon">
            <Recycle size={26} />
          </div>

          <span>TULLANTI SKANERİ</span>

          <h2>Tullantını tanıyaq.</h2>

          <p>
            Tullantının şəklini qalereyadan seç və onun hansı material
            olduğunu öyrən.
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

              <span>Qalereyadan tullantı şəklini seç</span>
            </button>
          ) : (
            <div className="scanner__preview">
              <img src={image} alt="Seçilmiş tullantı" />

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