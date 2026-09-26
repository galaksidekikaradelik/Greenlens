import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWork";
import Impact from "../components/Impact";
import Stats from "../components/Stats";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <Impact />
      <Stats />
    </main>
  );
}