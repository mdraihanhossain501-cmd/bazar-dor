import { ProductGridSkeleton } from "@/components/Skeletons";

export default function HomeLoading() {
  return (
    <main
      aria-busy="true"
      className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-6"
    >
      <div className="h-72 animate-pulse rounded-3xl border border-base-300 bg-base-100" />

      {[0, 1].map((section) => (
        <div key={section}>
          <div className="mb-3 h-7 w-48 animate-pulse rounded bg-base-300" />
          <ProductGridSkeleton count={6} />
        </div>
      ))}
    </main>
  );
}