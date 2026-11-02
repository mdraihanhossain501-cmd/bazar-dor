import CategoryNav from "@/components/CategoryNav";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PriceTrends from "@/components/PriceTrends";
import ProductSection from "@/components/ProductSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <CategoryNav />
      <main>
        <Hero />
        <PriceTrends />
        <ProductSection />
      </main>
    </>
  );
}