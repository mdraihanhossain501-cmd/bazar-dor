import { ProductGridSkeleton } from "@/components/Skeletons";

export default function CategoryLoading() {
  return (
    <main aria-busy="true" className="mx-auto max-w-6xl px-4 py-6">
      <div className="h-20 animate-pulse rounded-2xl border border-base-300 bg-base-100" />
      <div className="mt-4 h-14 animate-pulse rounded-2xl border border-base-300 bg-base-100" />
      <div className="mt-4 h-5 w-48 animate-pulse rounded bg-base-300" />
      <div className="mt-3">
        <ProductGridSkeleton count={6} />
      </div>
    </main>
  );
}