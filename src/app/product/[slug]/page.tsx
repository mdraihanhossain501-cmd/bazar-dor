import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { getProductBySlug } from "@/lib/api";
import { requireSession } from "@/lib/session";
import {
  formatDecimal,
  formatNumber,
  formatPercent,
  formatUnit,
  formatUnitLabel,
} from "@/lib/format";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  // Logged-out visitors are redirected to /signin with a toast
  await requireSession();

  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const { markets } = product;
  const { dir, pct } = product.change;

  const lowest = markets.length
    ? Math.min(...markets.map((m) => m.min))
    : product.today;
  const highest = markets.length
    ? Math.max(...markets.map((m) => m.max))
    : product.today;
  const average = markets.length
    ? markets.reduce((sum, m) => sum + (m.min + m.max) / 2, 0) / markets.length
    : product.today;

  const diff = product.today - product.yesterday;
  const symbol = dir === "up" ? "▲" : dir === "down" ? "▼" : "—";
  const changeColor =
    dir === "up" ? "text-error" : dir === "down" ? "text-success" : "";

  const stats = [
    {
      label: "সর্বনিম্ন দাম",
      value: formatNumber(lowest),
      note: "সবচেয়ে কম দামের বাজার",
      color: "text-success",
    },
    {
      label: "সর্বোচ্চ দাম",
      value: formatNumber(highest),
      note: "সবচেয়ে বেশি দামের বাজার",
      color: "text-error",
    },
    {
      label: "গড় দাম",
      value: formatNumber(Math.round(average)),
      note: `প্রতি ${formatUnit(product.unit)}-এর হিসাবে`,
      color: "text-success",
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <nav aria-label="breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm">
          <li>
            <Link href="/" className="hover:underline">
              হোম
            </Link>
          </li>
          <ChevronRight className="size-4" aria-hidden="true" />
          <li>
            <Link
              href={`/category/${product.category}`}
              className="hover:underline"
            >
              {product.categoryNameBn}
            </Link>
          </li>
          <ChevronRight className="size-4" aria-hidden="true" />
          <li aria-current="page">{product.nameBn}</li>
        </ol>
      </nav>

      {/* Summary */}
      <section className="mt-4 flex flex-col gap-4 rounded-2xl border border-base-300 bg-base-100 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <span
            aria-hidden="true"
            className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-base-200 text-3xl"
          >
            {product.image}
          </span>

          <div>
            <h1 className="text-2xl font-bold">{product.nameBn}</h1>
            <p className="text-sm">
              {formatUnitLabel(product.unit)} · {product.categoryNameBn}
            </p>
            <p className="mt-1 text-sm">
              {diff === 0 ? (
                "গতকালের তুলনায় আজ দাম অপরিবর্তিত আছে"
              ) : (
                <>
                  গতকালের তুলনায় আজ দাম{" "}
                  <strong>{diff > 0 ? "বেড়েছে" : "কমেছে"}</strong>{" "}
                  {formatNumber(Math.abs(diff))} টাকা
                </>
              )}
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-base-200 px-6 py-4 text-center">
          <p className="text-xs">আজকের দাম</p>
          <p className="text-3xl font-bold">{formatNumber(product.today)}</p>
          <p className="text-sm">টাকা / {formatUnit(product.unit)}</p>
          <p className={`mt-1 text-xs font-semibold ${changeColor}`}>
            {symbol} {formatPercent(pct)}
          </p>
        </div>
      </section>

      {/* Price summary + market table */}
      <section className="mt-4 rounded-2xl border border-base-300 bg-base-100 p-6">
        <h2 className="text-lg font-semibold">দামের সারসংক্ষেপ</h2>

        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-base-300 bg-base-100 px-5 py-4"
            >
              <p className="text-xs">{stat.label}</p>
              <p className="mt-1">
                <span className={`text-2xl font-bold ${stat.color}`}>
                  {stat.value}
                </span>{" "}
                <span className={`text-sm font-medium ${stat.color}`}>
                  টাকা
                </span>
              </p>
              <p className="mt-1 text-xs">{stat.note}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-6 text-lg font-semibold">বাজারভিত্তিক আজকের দাম</h2>

        <div className="mt-3 overflow-x-auto rounded-xl border border-base-300">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead className="bg-base-200">
              <tr>
                <th className="px-4 py-3 font-semibold">বাজার</th>
                <th className="px-4 py-3 font-semibold">বিভাগ</th>
                <th className="px-4 py-3 text-right font-semibold">সর্বনিম্ন</th>
                <th className="px-4 py-3 text-right font-semibold">সর্বোচ্চ</th>
                <th className="px-4 py-3 text-right font-semibold">গড়</th>
              </tr>
            </thead>

            <tbody>
              {markets.map((market, index) => (
                <tr
                  key={`${market.market}-${index}`}
                  className="border-t border-base-300"
                >
                  <td className="px-4 py-3">{market.market}</td>
                  <td className="px-4 py-3">{market.division}</td>
                  <td className="px-4 py-3 text-right">
                    {formatNumber(market.min)} টাকা
                  </td>
                  <td className="px-4 py-3 text-right">
                    {formatNumber(market.max)} টাকা
                  </td>
                  <td className="px-4 py-3 text-right font-bold">
                    {formatDecimal((market.min + market.max) / 2)} টাকা
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}