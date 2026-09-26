import "./style/index.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <Features />
        {/* About, Contact bölmələri buraya əlavə olunacaq */}
      </main>
    </div>
  );
}

export default App;