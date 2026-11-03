import { getProducts } from "@/lib/api";
import { formatNumber, formatPercent, formatUnit } from "@/lib/format";
import type { Product } from "@/types/product";

function TickerItem({
  product,
  hidden = false,
}: {
  product: Product;
  hidden?: boolean;
}) {
  const { dir, pct } = product.change;
  const color =
    dir === "up" ? "text-error" : dir === "down" ? "text-success" : "";
  const symbol = dir === "up" ? "▲" : dir === "down" ? "▼" : "—";

  return (
    <li
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-1.5 whitespace-nowrap border-r border-base-200 px-4 py-2 text-sm"
    >
      <span>{product.image}</span>
      <span className="font-medium">{product.nameBn}</span>
      <span>
        {formatNumber(product.today)} টাকা/{formatUnit(product.unit)}
      </span>
      <span className={`font-semibold ${color}`}>
        {symbol} {formatPercent(pct)}
      </span>
    </li>
  );
}

export default async function PriceTicker() {
  const products = await getProducts();

  return (
    <section
      aria-label="আজকের দামের তালিকা"
      className="overflow-hidden border-b border-base-300 bg-base-100"
    >
      {/* The list is rendered twice so the loop looks endless */}
      <ul className="flex w-max animate-ticker motion-reduce:animate-none hover:[animation-play-state:paused]">
        {products.map((product) => (
          <TickerItem key={product.id} product={product} />
        ))}
        {products.map((product) => (
          <TickerItem key={`copy-${product.id}`} product={product} hidden />
        ))}
      </ul>
    </section>
  );
}