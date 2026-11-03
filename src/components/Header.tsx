import Navbar from "@/components/Navbar";
import CategoryNav from "@/components/CategoryNav";
import PriceTicker from "@/components/PriceTicker";
import { getCategories } from "@/lib/api";

export default async function Header() {
  const categories = await getCategories();

  return (
    <>
      <header className="border-b border-base-300 bg-base-100">
        <Navbar />
        <CategoryNav categories={categories} />
      </header>
      <PriceTicker />
    </>
  );
}