
import Link from "next/link";
import { getCategories } from "@/lib/api";

export default async function CategoryNav() {
  const categories = await getCategories();

  return (
    <nav className="border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 overflow-x-auto px-4 py-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className="flex shrink-0 items-center gap-2 text-sm font-semibold text-gray-800 transition hover:text-green-700"
          >
            <span className="text-base">{category.icon}</span>
            <span>{category.nameBn}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
