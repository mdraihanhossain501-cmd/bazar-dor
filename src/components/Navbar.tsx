
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "@/lib/auth-client";

export default function Navbar() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
    router.refresh();
  };

  return (
    <header className="border-b border-gray-100 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-icon.png"
            alt="Bazar Dor logo"
            width={48}
            height={48}
            className="h-12 w-12 rounded-xl object-contain"
            priority
          />

          <div>
            <h1 className="text-xl font-bold text-gray-900">
              বাজার দর
            </h1>
            <p className="text-xs text-gray-600">
              সোমবার, ৩ নভেম্বর, ২০২৬
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          {isPending ? (
            <span className="text-sm text-gray-500">Loading...</span>
          ) : session?.user ? (
            <>
              <span className="hidden text-sm font-medium text-gray-700 sm:block">
                {session.user.name}
              </span>

              <button
                onClick={handleSignOut}
                className="rounded-lg border border-red-600 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="rounded-lg border border-green-700 px-4 py-2 text-sm font-medium text-green-700 transition hover:bg-green-50"
              >
                Sign In
              </Link>

              <Link
                href="/sign-up"
                className="rounded-lg bg-green-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-800"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
