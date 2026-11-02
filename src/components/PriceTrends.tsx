import { getProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard";

export default async function PriceTrends() {
  const products = await getProducts();

  const risingProducts = products
    .filter((product) => product.change.dir === "up")
    .slice(0, 6);

  const fallingProducts = products
    .filter((product) => product.change.dir === "down")
    .slice(0, 6);

  return (
    <section className="mx-auto max-w-7xl space-y-12 px-4 py-12">
      {/* Rising prices */}
      <div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            <span className="mr-2 text-red-600">▲</span>
            যেসব পণ্যের দাম বাড়ছে
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            গত দিনের তুলনায় যেসব পণ্যের দাম বেড়েছে
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {risingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Falling prices */}
      <div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            <span className="mr-2 text-green-600">▼</span>
            যেসব পণ্যের দাম কমছে
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            গত দিনের তুলনায় যেসব পণ্যের দাম কমেছে
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {fallingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}