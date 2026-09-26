import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/index.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Features from "./pages/Features";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;