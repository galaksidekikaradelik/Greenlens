import { useRef, useState } from "react";
import { Upload, RotateCcw, ScanLine } from "lucide-react";
import "../style/components/scanner-upload.css";

export default function ScannerUpload({ accentLabel, onAnalyze }) {
  const inputRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    setPreview(URL.createObjectURL(file));
  };

  const handleReset = () => {
    setPreview(null);
    setFileName("");
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleAnalyze = async () => {
    if (!preview) return;
    setIsAnalyzing(true);
    try {
      await onAnalyze?.(preview);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="scanner-upload">
      {!preview ? (
        <label className="scanner-upload__dropzone">
          <Upload size={28} strokeWidth={1.6} />
          <span className="scanner-upload__title">Qalereyadan şəkil seç</span>
          <span className="scanner-upload__hint">{accentLabel}</span>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            hidden
          />
        </label>
      ) : (
        <div className="scanner-upload__preview">
          <img src={preview} alt={fileName} />
          <div className="scanner-upload__preview-actions">
            <button
              type="button"
              className="scanner-upload__btn scanner-upload__btn--ghost"
              onClick={handleReset}
            >
              <RotateCcw size={16} strokeWidth={1.8} />
              Yenidən seç
            </button>
            <button
              type="button"
              className="scanner-upload__btn scanner-upload__btn--primary"
              onClick={handleAnalyze}
              disabled={isAnalyzing}
            >
              <ScanLine size={16} strokeWidth={1.8} />
              {isAnalyzing ? "Analiz olunur..." : "Analiz et"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}