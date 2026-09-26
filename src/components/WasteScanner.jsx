import { Recycle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScannerUpload from "../components/ScannerUpload";
import "../style/pages/scanner.css";

export default function WasteScanner() {
  const handleAnalyze = async () => {
    // TODO: burada AI analiz API çağırışı ediləcək
    await new Promise((resolve) => setTimeout(resolve, 1200));
  };

  return (
    <div className="app">
      <Navbar />
      <main>
        <section className="scanner-page">
          <div className="scanner-page__inner">
            <div className="scanner-page__icon">
              <Recycle size={26} strokeWidth={1.8} />
            </div>
            <h1>Tullantı Skaneri</h1>
            <p>Tullantının şəklini qalereyadan seç, növünü və düzgün qutunu öyrən.</p>
            <ScannerUpload
              accentLabel="JPG, PNG — maks. 10MB"
              onAnalyze={handleAnalyze}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}