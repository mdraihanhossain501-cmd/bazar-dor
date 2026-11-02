import { getProducts } from "@/lib/api";

export default async function ApiCheckPage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen p-6">
      <h1 className="mb-4 text-2xl font-bold">API</h1>

      <pre className="overflow-auto rounded-lg bg-gray-100 p-4 text-sm text-black">
        {JSON.stringify(products, null, 2)}
      </pre>
    </main>
  );
}