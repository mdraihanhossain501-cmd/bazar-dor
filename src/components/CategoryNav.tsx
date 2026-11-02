import Link from "next/link";
import { getCategories } from "@/lib/api";

export default async function CategoryNav() {
  const categories = await getCategories();

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-4 py-3">
        <Link
          href="/"
          className="shrink-0 rounded-full bg-green-600 px-4 py-2 text-sm font-medium text-white"
        >
          সব পণ্য
        </Link>

        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className="shrink-0 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-green-600 hover:bg-green-50 hover:text-green-700"
          >
            <span className="mr-1">{category.icon}</span>
            {category.nameBn}
          </Link>
        ))}
      </div>
    </nav>
  );
}