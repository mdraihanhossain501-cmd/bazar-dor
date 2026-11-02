
import { getProductById } from "@/lib/api";
import Link from "next/link";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;
  const product = await getProductById(Number(id));

  const averagePrice =
    (product.markets.reduce(
      (total, market) => total + (market.min + market.max) / 2,
      0
    ) / product.markets.length) || 0;

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 py-10">
      <Link
        href="/"
        className="text-sm text-green-700 hover:underline"
      >
        ← Back to Home
      </Link>

      <div className="mt-6 grid gap-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:grid-cols-2">
        <div className="flex min-h-64 items-center justify-center rounded-xl bg-gray-50">
          <span className="text-8xl" role="img" aria-label={product.nameBn}>
            {product.image}
          </span>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            {product.categoryNameBn}
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            {product.nameBn}
          </h1>

          <p className="mt-4 text-2xl font-bold text-green-700">
            ৳{product.today} / {product.unit}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-gray-50 p-4">
              <p className="text-sm text-gray-500">গতকাল</p>
              <p className="mt-1 font-semibold">৳{product.yesterday}</p>
            </div>

            <div className="rounded-lg bg-gray-50 p-4">
              <p className="text-sm text-gray-500">গত সপ্তাহ</p>
              <p className="mt-1 font-semibold">৳{product.lastWeek}</p>
            </div>

            <div className="rounded-lg bg-gray-50 p-4">
              <p className="text-sm text-gray-500">গত মাস</p>
              <p className="mt-1 font-semibold">৳{product.lastMonth}</p>
            </div>

            <div className="rounded-lg bg-gray-50 p-4">
              <p className="text-sm text-gray-500">গড় বাজার মূল্য</p>
              <p className="mt-1 font-semibold">
                ৳{averagePrice.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="mb-4 text-xl font-bold text-gray-900">
          বিভিন্ন বাজারের মূল্য
        </h2>

        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-4 py-3">বাজার</th>
                <th className="px-4 py-3">বিভাগ</th>
                <th className="px-4 py-3">সর্বনিম্ন</th>
                <th className="px-4 py-3">সর্বোচ্চ</th>
              </tr>
            </thead>

            <tbody>
              {product.markets.map((market, index) => (
                <tr key={`${market.market}-${index}`} className="border-t">
                  <td className="px-4 py-3">{market.market}</td>
                  <td className="px-4 py-3">{market.division}</td>
                  <td className="px-4 py-3">৳{market.min}</td>
                  <td className="px-4 py-3">৳{market.max}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
