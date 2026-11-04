"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";
import { formatNumber } from "@/lib/format";

type SortOrder = "default" | "low-to-high" | "high-to-low";

export default function ProductGrid({ products }: { products: Product[] }) {
  const [sortOrder, setSortOrder] = useState<SortOrder>("default");

  // `today` is a real number, so this sorts by value, not as text
  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === "low-to-high") return a.today - b.today;
    if (sortOrder === "high-to-low") return b.today - a.today;
    return 0;
  });

  return (
    <div className="mt-4 space-y-4">
      <div className="flex items-center justify-end gap-3 rounded-2xl border border-base-300 bg-base-100 px-4 py-3">
        <label htmlFor="sort" className="text-sm">
          সাজান
        </label>

        <div className="relative">
          <select
            id="sort"
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value as SortOrder)}
            className="h-9 appearance-none rounded-lg border border-base-300 bg-base-100 pl-3 pr-8 text-sm outline-none focus:border-primary"
          >
            <option value="default">ডিফল্ট</option>
            <option value="low-to-high">দাম: কম থেকে বেশি</option>
            <option value="high-to-low">দাম: বেশি থেকে কম</option>
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-2 top-1/2 size-4 -translate-y-1/2"
            aria-hidden="true"
          />
        </div>
      </div>

      <p className="text-sm">
        মোট {formatNumber(products.length)}টি পণ্য দেখানো হচ্ছে
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}