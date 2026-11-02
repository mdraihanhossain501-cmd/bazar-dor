import type { Product, Category } from "@/types/product";

const BASE_URL = "https://openapi.programming-hero.com/api/bazardor";

export async function getProducts(
  category?: string
): Promise<Product[]> {
  const url = category
    ? `${BASE_URL}/products?category=${category}`
    : `${BASE_URL}/products`;

  const response = await fetch(url, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export async function getCategories(): Promise<Category[]> {
  const response = await fetch(`${BASE_URL}/categories`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json();
}

export async function getProductById(
  id: number
): Promise<Product> {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch product details");
  }

  return response.json();
}