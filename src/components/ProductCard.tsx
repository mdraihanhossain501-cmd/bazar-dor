
import Link from "next/link";
import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const isUp = product.change.dir === "up";
  const isDown = product.change.dir === "down";

  const changeColor = isUp
    ? "text-red-600 bg-red-50"
    : isDown
      ? "text-green-600 bg-green-50"
      : "text-gray-600 bg-gray-100";

  const changeSymbol = isUp ? "▲" : isDown ? "▼" : "—";

  return (
    <Link
      href={`/product/${product.id}`}
      className="block"
      aria-label={`View details for ${product.nameBn}`}
    >
      <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <div className="flex h-40 items-center justify-center bg-gray-50">
          <span className="text-7xl" role="img" aria-label={product.nameBn}>
            {product.image}
          </span>
        </div>

        <div className="p-4">
          <p className="mb-1 text-xs text-gray-500">
            {product.categoryNameBn}
          </p>

          <h3 className="mb-2 font-semibold text-gray-800">
            {product.nameBn}
          </h3>

          <p className="text-lg font-bold text-gray-900">
            ৳{product.today} / {product.unit}
          </p>

          <span
            className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-medium ${changeColor}`}
          >
            {changeSymbol} {Math.abs(product.change.pct)}%
          </span>
        </div>
      </article>
    </Link>
  );
}


