import { getProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard";

export default async function ProductSection() {
  const products = await getProducts();

  return (
    <section
      id="সব-পণ্য"
      className="mx-auto max-w-7xl px-4 py-12"
    >
      <div className="mb-8">
        <p className="mb-2 font-semibold text-green-700">
          আমাদের পণ্যসমূহ
        </p>

        <h2 className="text-3xl font-bold text-gray-900">
          সব পণ্যের বাজারদর
        </h2>

        <p className="mt-2 text-gray-500">
          নিত্যপ্রয়োজনীয় পণ্যের সর্বশেষ বাজারদর এক জায়গায় দেখুন।
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}