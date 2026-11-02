
import ProductGrid from "@/components/ProductGrid";
import { getProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { slug } = await params;
  const products = await getProducts(slug);

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-10">
      <div className="mb-8">
        <Link
          href="/"
          className="text-sm text-green-700 hover:underline"
        >
          ← Back to Home
        </Link>

        <h1 className="mt-4 text-2xl font-bold text-gray-900">
          {products.length > 0
            ? products[0].categoryNameBn
            : "পণ্য পাওয়া যায়নি"}
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          এই ক্যাটাগরির সকল পণ্যের বর্তমান বাজার দর
        </p>
      </div>

      {products.length > 0 ? (
        <ProductGrid products={products} />
      ) : (
        <p className="rounded-xl bg-gray-50 p-8 text-center text-gray-600">
          এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
        </p>
      )}
    </main>
  );
}
