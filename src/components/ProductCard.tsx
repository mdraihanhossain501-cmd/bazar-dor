import Link from "next/link";
import type { Product } from "@/types/product";
import { formatNumber, formatPercent, formatUnitLabel } from "@/lib/format";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { dir, pct } = product.change;

  const badgeStyle =
    dir === "up"
      ? "bg-error/10 text-error"
      : dir === "down"
        ? "bg-success/10 text-success"
        : "bg-base-200";
  const symbol = dir === "up" ? "▲" : dir === "down" ? "▼" : "—";

  return (
    <Link
      href={`/product/${product.id}`}
      aria-label={`${product.nameBn} - বিস্তারিত দেখুন`}
      className="block rounded-2xl border border-base-300 bg-base-100 p-4 transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-primary"
    >
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-base-200 text-2xl"
        >
          {product.image}
        </span>

        <div className="min-w-0">
          <h3 className="text-base font-semibold leading-snug">
            {product.nameBn}
          </h3>
          <p className="text-xs">{formatUnitLabel(product.unit)}</p>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between gap-2">
        <div>
          <p className="text-xs">আজকের দাম</p>
          <p>
            <span className="text-xl font-bold">
              {formatNumber(product.today)}
            </span>{" "}
            <span className="text-sm font-medium">টাকা</span>
          </p>
        </div>

        <span
          className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs ${badgeStyle}`}
        >
          <span>{symbol}</span>
          <span className="font-semibold">{formatPercent(pct)}</span>
        </span>
      </div>
    </Link>
  );
}