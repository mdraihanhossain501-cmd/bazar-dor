import { notFound } from "next/navigation";
import EmptyState from "@/components/EmptyState";
import ProductGrid from "@/components/ProductGrid";
import { getCategories, getProducts } from "@/lib/api";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  const [categories, allProducts] = await Promise.all([
    getCategories(),
    getProducts(),
  ]);

  const category = categories.find((c) => c.slug === slug || c.id === slug);

  // Unknown category -> custom 404 page
  if (!category) {
    notFound();
  }

  const products = allProducts.filter(
    (product) =>
      product.category === category.id || product.category === category.slug
  );

  return (
    <main className="mx-auto max-w-6xl px-4 py-6">
      <section className="flex items-center gap-4 rounded-2xl border border-base-300 bg-base-100 p-4">
        <span
          aria-hidden="true"
          className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-base-200 text-2xl"
        >
          {category.icon}
        </span>
        <div>
          <h1 className="text-xl font-bold">{category.nameBn}</h1>
          <p className="text-sm">প্রতি পণ্যের আজকের দাম ও পরিবর্তন</p>
        </div>
      </section>

      {products.length > 0 ? (
        <ProductGrid products={products} />
      ) : (
        <EmptyState
          title="এই ক্যাটাগরিতে কোনো পণ্য নেই"
          description="অন্য কোনো ক্যাটাগরি বেছে নিন বা হোম পেজে ফিরে যান।"
        />
      )}
    </main>
  );
}