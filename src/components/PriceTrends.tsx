import ProductCard from "@/components/ProductCard";
import type { Product } from "@/types/product";

type MoverSectionProps = {
  title: string;
  symbol: string;
  symbolClass: string;
  products: Product[];
};

function MoverSection({
  title,
  symbol,
  symbolClass,
  products,
}: MoverSectionProps) {
  return (
    <section>
      <div className="mb-3 flex items-center gap-2">
        <span className={`text-base ${symbolClass}`}>{symbol}</span>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default function PriceTrends({ products }: { products: Product[] }) {
  // Biggest rise first
  const risers = products
    .filter((product) => product.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  // Biggest fall first (falls have negative percentages)
  const fallers = products
    .filter((product) => product.change.dir === "down")
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, 6);

  return (
    <>
      <MoverSection
        title="আজ দাম বেড়েছে"
        symbol="▲"
        symbolClass="text-error"
        products={risers}
      />
      <MoverSection
        title="আজ দাম কমেছে"
        symbol="▼"
        symbolClass="text-success"
        products={fallers}
      />
    </>
  );
}