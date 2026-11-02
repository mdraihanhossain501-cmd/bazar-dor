
"use client";

import { useState } from "react";
import type { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";

type ProductGridProps = {
  products: Product[];
};

export default function ProductGrid({ products }: ProductGridProps) {
  const [sortOrder, setSortOrder] = useState("default");

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === "low-to-high") {
      return a.today - b.today;
    }

    if (sortOrder === "high-to-low") {
      return b.today - a.today;
    }

    return 0;
  });

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-gray-600">
          মোট {products.length}টি পণ্য
        </p>

        <select
          value={sortOrder}
          onChange={(event) => setSortOrder(event.target.value)}
          className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-green-600"
          aria-label="Sort products by price"
        >
          <option value="default">ডিফল্ট ক্রম</option>
          <option value="low-to-high">দাম: কম থেকে বেশি</option>
          <option value="high-to-low">দাম: বেশি থেকে কম</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
