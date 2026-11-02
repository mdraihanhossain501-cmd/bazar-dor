import { getProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard";

export default async function ProductSection() {
  const products = await getProducts();

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          আজকের বাজার দর
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          বাংলাদেশের বিভিন্ন বাজারের নিত্যপ্রয়োজনীয় পণ্যের দাম
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}