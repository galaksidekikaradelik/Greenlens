import "./style/index.css";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import Features from "../src/components/Features";
import HowItWorks from "../src/components/HowItWork";
import Impact from "../src/components/Impact";
import Stats from "../src/components/Stats";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Impact />
        <Stats />
        {/* About, Contact bölmələri buraya əlavə olunacaq */}
      </main>
    </div>
  );
}

export default App;