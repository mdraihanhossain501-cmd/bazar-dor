"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Category } from "@/types/product";

type CategoryNavProps = {
  categories: Category[];
};

export default function CategoryNav({ categories }: CategoryNavProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="ক্যাটাগরি" className="border-t border-base-200">
      <div className="mx-auto max-w-6xl px-4">
        <ul className="flex gap-1 overflow-x-auto py-2">
          {categories.map((category) => {
            const href = `/category/${category.slug}`;
            const active = pathname === href;

            return (
              <li key={category.id} className="shrink-0">
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`flex h-8 items-center gap-1.5 rounded-lg px-3.5 text-xs font-semibold transition-colors ${
                    active
                      ? "bg-primary text-primary-content"
                      : "hover:bg-base-200"
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.nameBn}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}