
import { getProducts } from "@/lib/api";

export default async function PriceTicker() {
  const products = await getProducts();

  const trendingProducts = products
    .filter((product) => product.change.dir !== "flat")
    .slice(0, 12);

  return (
    <section className="overflow-hidden border-b border-gray-100 bg-white py-3">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex w-max animate-[ticker_35s_linear_infinite] items-center gap-8">
          {[...trendingProducts, ...trendingProducts].map(
            (product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="flex shrink-0 items-center gap-2 text-sm"
              >
                <span>{product.categoryIcon}</span>

                <span className="font-medium text-gray-800">
                  {product.nameBn}
                </span>

                <span className="font-semibold text-gray-900">
                  ৳{product.today}
                </span>

                <span
                  className={
                    product.change.dir === "up"
                      ? "font-semibold text-red-600"
                      : "font-semibold text-green-600"
                  }
                >
                  {product.change.dir === "up" ? "▲" : "▼"}{" "}
                  {product.change.pct}%
                </span>
              </div>
            )
          )}
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
