import ProductCard from "@/components/ProductCard";
import { formatNumber } from "@/lib/format";
import type { Product } from "@/types/product";

export default function ProductSection({ products }: { products: Product[] }) {
  return (
    <section id="সব-পণ্য">
      <h2 className="text-xl font-bold">সব পণ্য</h2>
      <p className="mt-3 text-sm">
        মোট {formatNumber(products.length)}টি পণ্য দেখানো হচ্ছে
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}