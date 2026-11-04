"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="mx-auto max-w-md px-4 py-16 text-center">
      <h1 className="text-xl font-bold">কিছু একটা সমস্যা হয়েছে</h1>
      <p className="mt-2 text-sm">
        তথ্য লোড করা যায়নি। একটু পরে আবার চেষ্টা করুন।
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-6 inline-flex h-10 items-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-content shadow transition-colors hover:bg-primary-strong"
      >
        আবার চেষ্টা করুন
      </button>
    </main>
  );
}