
"use client";

import Link from "next/link";

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md rounded-xl border p-8">
        <h1 className="text-2xl font-bold mb-6">Create Account</h1>

        <p className="text-gray-600 mb-4">
          Sign-up form coming next.
        </p>

        <Link href="/sign-in" className="text-blue-600 underline">
          Already have an account? Sign In
        </Link>
      </div>
    </main>
  );
}
