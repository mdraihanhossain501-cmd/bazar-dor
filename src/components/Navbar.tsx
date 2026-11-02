import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-bold text-green-700">
          🛒 বাজার দর
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/signin"
            className="rounded-lg border px-4 py-2 text-sm font-medium"
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className="rounded-lg bg-green-700 px-4 py-2 text-sm font-medium text-white"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}