
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import ProductGrid from "@/components/ProductGrid";
import StatsSection from "@/components/StatsSection";
import CoverageSection from "@/components/CoverageSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white py-10">
      <Header />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="productos">
        <ProductSection />
        <ProductGrid />
      </section>
      <section id="energia">
        <StatsSection />
      </section>
      <section id="cobertura">
        <CoverageSection />
      </section>
      <Footer />
    </main>
  );
}
 