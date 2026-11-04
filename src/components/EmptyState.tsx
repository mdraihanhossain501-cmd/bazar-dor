import Link from "next/link";

type EmptyStateProps = {
  title: string;
  description: string;
};

export default function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-4 py-16 text-center">
      <p className="text-6xl font-bold text-primary">৪০৪</p>
      <h2 className="mt-4 text-xl font-bold">{title}</h2>
      <p className="mt-2 text-sm">{description}</p>
      <Link
        href="/"
        className="mt-6 flex h-10 items-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-content shadow transition-colors hover:bg-primary-strong"
      >
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
}