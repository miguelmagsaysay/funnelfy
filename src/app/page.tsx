import Hero from "./components/Hero";
import Features from "./components/Features";
import Logos from "./components/Logos";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      
      <main className="min-h-screen bg-white">
        <Hero />
        <Logos />
        <Features />
        <Footer />
      </main>
    </>
  );
}
