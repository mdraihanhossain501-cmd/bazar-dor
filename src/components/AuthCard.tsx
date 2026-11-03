import Link from "next/link";
import type { ReactNode } from "react";

export const inputClass =
  "h-10 w-full rounded-lg border border-base-300 bg-base-100 px-3 text-sm outline-none transition-colors placeholder:text-base-content/50 focus:border-primary";

export const primaryButtonClass =
  "flex h-10 w-full items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-content shadow transition-colors hover:bg-primary-strong disabled:opacity-60";

type AuthCardProps = {
  title: string;
  subtitle: string;
  footer: ReactNode;
  children: ReactNode;
};

export default function AuthCard({
  title,
  subtitle,
  footer,
  children,
}: AuthCardProps) {
  return (
    <main className="mx-auto flex max-w-md flex-col px-4 py-12">
      <h1 className="text-center text-2xl font-bold">{title}</h1>
      <p className="mt-2 text-center text-sm">{subtitle}</p>

      <div className="mt-6 rounded-2xl border border-base-300 bg-base-100 p-6">
        {children}
        <p className="mt-4 text-center text-sm">{footer}</p>
      </div>

      <Link href="/" className="mt-6 text-center text-sm hover:underline">
        ← হোম পেজে ফিরে যান
      </Link>
    </main>
  );
}