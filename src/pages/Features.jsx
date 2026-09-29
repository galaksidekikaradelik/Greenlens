import { useState } from "react";
import {
  Recycle,
  Leaf,
  Check,
  Upload,
  LoaderCircle,
  Image as ImageIcon,
} from "lucide-react";

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

function Scanner({
  id,
  title,
  description,
  icon,
  file,
  preview,
  result,
  loading,
  error,
  onFileChange,
  onAnalyze,
  renderResult,
}) {
  return (
    <div className="scanner" id={id}>
      <div className="scanner__header">
        <div className="feature-card__icon">
          {icon}
        </div>

        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="scanner__content">

        <label className="scanner__upload">
          {preview ? (
            <img
              src={preview}
              alt={`${title} preview`}
              className="scanner__preview"
            />
          ) : (
            <>
              <ImageIcon
                size={38}
                strokeWidth={1.5}
              />

              <span>Şəkil seç</span>

              <small>
                JPG, JPEG və ya PNG
              </small>
            </>
          )}

          <input
            type="file"
            accept="image/*"
            onChange={onFileChange}
            hidden
          />
        </label>

        {file && (
          <p className="scanner__filename">
            {file.name}
          </p>
        )}

        {/* ERROR */}

        {error && (
          <div className="scanner__error">
            {error}
          </div>
        )}

        <button
          type="button"
          className="scanner__button"
          onClick={onAnalyze}
          disabled={loading}
        >
          {loading ? (
            <>
              <LoaderCircle
                size={18}
                className="register__spinner"
              />

              Analiz edilir...
            </>
          ) : (
            <>
              <Upload size={18} />

              Analiz et
            </>
          )}
        </button>

        {result && (
          <div className="scanner__result">
            <h3>Analiz nəticəsi</h3>

            {renderResult(result)}
          </div>
        )}
      </div>
    </div>
  );
}

function WasteResult({ result }) {
  return (
    <>
      <p>
        <strong>Əşya:</strong>{" "}
        {result.item}
      </p>

      <p>
        <strong>Kateqoriya:</strong>{" "}
        {result.category}
      </p>

      <p>
        <strong>Material:</strong>{" "}
        {result.material}
      </p>

      <p>
        <strong>Qutu:</strong>{" "}
        {result.bin}
      </p>

      <p>
        <strong>İzah:</strong>{" "}
        {result.explanation}
      </p>

      <p>
        <strong>Əminlik:</strong>{" "}
        {result.confidence}
      </p>
    </>
  );
}


function PlantResult({ result }) {
  return (
    <>
      <p>
        <strong>Bitki:</strong>{" "}
        {result.plantName}
      </p>

      <p>
        <strong>Problem:</strong>{" "}
        {result.problem}
      </p>

      <p>
        <strong>Dərəcə:</strong>{" "}
        {result.severity}
      </p>

      <p>
        <strong>Simptomlar:</strong>{" "}
        {result.symptoms}
      </p>

      <p>
        <strong>Müalicə:</strong>{" "}
        {result.treatment}
      </p>

      <p>
        <strong>Qarşısının alınması:</strong>{" "}
        {result.prevention}
      </p>

      <p>
        <strong>Tövsiyə olunan məhsul:</strong>{" "}
        {result.recommendedProduct}
      </p>

      <p>
        <strong>Əminlik:</strong>{" "}
        {result.confidence}
      </p>

      {result.warning && (
        <p>
          <strong>Xəbərdarlıq:</strong>{" "}
          {result.warning}
        </p>
      )}
    </>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  points,
  link,
}) {
  return (
    <div className="feature-card">
      <div className="feature-card__icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <ul className="feature-card__list">
        {points.map((point) => (
          <li key={point}>
            <Check
              size={14}
              strokeWidth={2}
            />

            {point}
          </li>
        ))}
      </ul>

      <a
        href={link}
        className="feature-card__link"
      >
        {title === "Tullantı Skaneri"
          ? "Tullantını skan et →"
          : "Bitkini skan et →"}
      </a>
    </div>
  );
}

export default function Features() {

  const [wasteFile, setWasteFile] = useState(null);
  const [wastePreview, setWastePreview] = useState("");
  const [wasteResult, setWasteResult] = useState(null);
  const [wasteLoading, setWasteLoading] = useState(false);
  const [wasteError, setWasteError] = useState("");
  const [plantFile, setPlantFile] = useState(null);
  const [plantPreview, setPlantPreview] = useState("");
  const [plantResult, setPlantResult] = useState(null);
  const [plantLoading, setPlantLoading] = useState(false);
  const [plantError, setPlantError] = useState("");

  const handleWasteFile = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setWasteError(
        "Zəhmət olmasa şəkil faylı seç."
      );
      return;
    }

    setWasteFile(file);
    setWastePreview(
      URL.createObjectURL(file)
    );
    setWasteResult(null);
    setWasteError("");
  };


  const handlePlantFile = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setPlantError(
        "Zəhmət olmasa şəkil faylı seç."
      );
      return;
    }

    setPlantFile(file);
    setPlantPreview(
      URL.createObjectURL(file)
    );
    setPlantResult(null);
    setPlantError("");
  };

  const analyze = async ({
    file,
    endpoint,
    setLoading,
    setError,
    setResult,
    errorMessage,
  }) => {

    if (!file) {
      setError(errorMessage);
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      setError(
        "Analiz etmək üçün əvvəlcə hesabına daxil ol."
      );
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const formData = new FormData();

      formData.append("image", file);

      const response = await fetch(
        `${API_URL}${endpoint}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      const data =
        await response.json().catch(
          () => null
        );

      if (!response.ok) {
        throw new Error(
          data?.message ||
            data?.error ||
            "Analiz zamanı xəta baş verdi."
        );
      }

      setResult(data);

    } catch (error) {

      setError(
        error.message ||
          "Serverə qoşulmaq mümkün olmadı."
      );

    } finally {
      setLoading(false);
    }
  };

  const analyzeWaste = () => {
    analyze({
      file: wasteFile,
      endpoint: "/api/waste/analyze",
      setLoading: setWasteLoading,
      setError: setWasteError,
      setResult: setWasteResult,
      errorMessage:
        "Əvvəlcə tullantının şəklini seç.",
    });
  };


  const analyzePlant = () => {
    analyze({
      file: plantFile,
      endpoint: "/api/plant/analyze",
      setLoading: setPlantLoading,
      setError: setPlantError,
      setResult: setPlantResult,
      errorMessage:
        "Əvvəlcə bitkinin şəklini seç.",
    });
  };

  return (
    <section
      className="features"
      id="features"
    >
      <div className="features__inner">

        <div className="features__head">
          <h2>
            İki skan, tək məqsəd
          </h2>

          <p>
            Kamerandan və ya qalereyandan şəkil
            seç, analizə başla.
          </p>
        </div>

        <div className="features__grid">

          <FeatureCard
            icon={
              <Recycle
                size={22}
                strokeWidth={1.8}
              />
            }
            title="Tullantı Skaneri"
            description="
              Tullantının şəklini seç, material
              növünü müəyyən et və düzgün qutu
              haqqında məlumat al.
            "
            points={WASTE_POINTS}
            link="#waste"
          />

          <FeatureCard
            icon={
              <Leaf
                size={22}
                strokeWidth={1.8}
              />
            }
            title="Bitki Skaneri"
            description="
              Bitkinin şəklini qalereyadan seç və
              onun sağlamlığı haqqında süni
              intellekt əsaslı analiz al.
            "
            points={PLANT_POINTS}
            link="#plant"
          />

        </div>

        <Scanner
          id="waste"
          title="Tullantı Skaneri"
          description="
            Tullantının şəklini seç və EcoScan ilə analiz et.
          "
          icon={
            <Recycle
              size={22}
              strokeWidth={1.8}
            />
          }
          file={wasteFile}
          preview={wastePreview}
          result={wasteResult}
          loading={wasteLoading}
          error={wasteError}
          onFileChange={handleWasteFile}
          onAnalyze={analyzeWaste}
          renderResult={(result) => (
            <WasteResult result={result} />
          )}
        />

        <Scanner
          id="plant"
          title="Bitki Skaneri"
          description="
            Bitkinin şəklini seç və sağlamlığını analiz et.
          "
          icon={
            <Leaf
              size={22}
              strokeWidth={1.8}
            />
          }
          file={plantFile}
          preview={plantPreview}
          result={plantResult}
          loading={plantLoading}
          error={plantError}
          onFileChange={handlePlantFile}
          onAnalyze={analyzePlant}
          renderResult={(result) => (
            <PlantResult result={result} />
          )}
        />

      </div>
    </section>
  );
}
