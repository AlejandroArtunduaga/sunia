import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import ProductGrid from "@/components/ProductGrid";
import BrandsSection from "@/components/BrandsSection";
import CoverageSection from "@/components/CoverageSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white py-10">
      <Header />
      <HeroSection />
      <ProductSection />
      <ProductGrid />
      <BrandsSection />
      <CoverageSection />
      <Footer />
    </main>
  );
}
