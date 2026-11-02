
"use client";

import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md rounded-xl border p-8">
        <h1 className="text-2xl font-bold mb-6">Sign In</h1>

        <p className="text-gray-600 mb-4">
          Sign-in form coming next.
        </p>

        <Link href="/sign-up" className="text-blue-600 underline">
          Don't have an account? Sign Up
        </Link>
      </div>
    </main>
  );
}
