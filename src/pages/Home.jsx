import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWork";
import About from "./AboutUs";
import Impact from "../components/Impact";
import Stats from "../components/Stats";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Impact />
        <Stats />
      </main>

      <Footer />
    </div>
  );
}