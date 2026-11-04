export function ProductCardSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border border-base-300 bg-base-100 p-4">
      <div className="flex items-center gap-3">
        <div className="size-12 rounded-xl bg-base-200" />
        <div className="space-y-2">
          <div className="h-4 w-28 rounded bg-base-200" />
          <div className="h-3 w-16 rounded bg-base-200" />
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="space-y-2">
          <div className="h-3 w-16 rounded bg-base-200" />
          <div className="h-6 w-24 rounded bg-base-200" />
        </div>
        <div className="h-6 w-16 rounded-full bg-base-200" />
      </div>
    </div>
  );
}

export function ProductGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
}