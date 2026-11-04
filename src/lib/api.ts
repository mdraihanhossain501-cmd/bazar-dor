import { cache } from "react";
import type { Product, Category } from "@/types/product";

// Main API first, then the two backups from the assignment
const BASE_URLS = [
  "https://openapi.programming-hero.com/api/bazardor",
  "https://api.api-store.workers.dev/api/bazardor",
  "https://api.abcz.workers.dev/api/bazardor",
];

async function fetchJson<T>(path: string): Promise<T> {
  let lastError: unknown;

  for (const baseUrl of BASE_URLS) {
    try {
      const response = await fetch(`${baseUrl}${path}`, {
        cache: "no-store",
        signal: AbortSignal.timeout(8000),
      });

      if (response.ok) {
        return (await response.json()) as T;
      }

      lastError = new Error(`Request failed with status ${response.status}`);
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError instanceof Error
    ? lastError
    : new Error("Failed to fetch data");
}

// `cache` makes sure the same request is only made once per page load
export const getProducts = cache(
  async (category?: string): Promise<Product[]> => {
    const path = category
      ? `/products?category=${encodeURIComponent(category)}`
      : "/products";

    return fetchJson<Product[]>(path);
  }
);

export const getCategories = cache(async (): Promise<Category[]> => {
  return fetchJson<Category[]>("/categories");
});

export async function getProductBySlug(
  slug: string
): Promise<Product | null> {
  const products = await getProducts();
  return products.find((product) => product.slug === slug) ?? null;
}