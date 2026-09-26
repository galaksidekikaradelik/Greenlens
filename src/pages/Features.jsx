import { Recycle, Leaf, Check, Upload, LoaderCircle } from "lucide-react";
import { useRef, useState } from "react";
import "../style/index.css";

const API_URL = import.meta.env.VITE_API_URL;

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
  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const isWaste = type === "waste";

  const endpoint = isWaste
    ? `${API_URL}/api/waste/analyze`
    : `${API_URL}/api/plant/analyze`;

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) return;

    setFile(selectedFile);
    setImage(URL.createObjectURL(selectedFile));
    setResult(null);
    setError("");
  };

  const handleAnalyze = async () => {
    if (!file) return;

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const formData = new FormData();

      formData.append("image", file);

      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Analiz zamanı xəta baş verdi.");
      }

      const data = await response.json();

      console.log("Backend response:", data);

      setResult(data);
    } catch (err) {
      console.error(err);
      setError(
        "Şəkil analiz edilə bilmədi. Backend-in işlədiyinə əmin ol."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChangeImage = () => {
    fileInputRef.current?.click();
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
        <>
          <div className="scanner-box__preview">
            <img
              src={image}
              alt={isWaste ? "Seçilmiş tullantı" : "Seçilmiş bitki"}
            />

            <button
              type="button"
              className="scanner-box__change"
              onClick={handleChangeImage}
            >
              Şəkli dəyiş
            </button>
          </div>

          {!result && (
            <button
              type="button"
              className="scanner-box__analyze"
              onClick={handleAnalyze}
              disabled={loading}
            >
              {loading ? (
                <>
                  <LoaderCircle className="scanner-spinner" size={18} />
                  Analiz edilir...
                </>
              ) : (
                <>
                  Analiz et →
                </>
              )}
            </button>
          )}
        </>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        hidden
      />

      {error && <div className="scanner-box__error">{error}</div>}

      {result && (
        <div className="scanner-result">
          <div className="scanner-result__header">
            <span>
              {isWaste ? "Tullantı analizi" : "Bitki analizi"}
            </span>
          </div>

          <pre>{JSON.stringify(result, null, 2)}</pre>

          <button
            type="button"
            className="scanner-result__again"
            onClick={() => {
              setImage(null);
              setFile(null);
              setResult(null);
              setError("");

              if (fileInputRef.current) {
                fileInputRef.current.value = "";
              }
            }}
          >
            Yeni şəkil seç
          </button>
        </div>
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