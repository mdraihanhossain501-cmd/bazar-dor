import Hero from "@/components/Hero";
import PriceTrends from "@/components/PriceTrends";
import ProductSection from "@/components/ProductSection";
import { getProducts } from "@/lib/api";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-6">
      <Hero />
      <PriceTrends products={products} />
      <ProductSection products={products} />
    </main>
  );
}