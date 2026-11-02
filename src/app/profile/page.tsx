
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession, updateUser, signOut } from "@/lib/auth-client";

export default function ProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (session?.user) {
      setName(session.user.name || "");
    }
  }, [session]);

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.replace("/sign-in");
    }
  }, [isPending, session, router]);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const result = await updateUser({ name: name.trim() });

      if (result.error) {
        setError(result.error.message || "Profile update failed.");
        return;
      }

      setMessage("Profile updated successfully.");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    router.push("/sign-in");
    router.refresh();
  };

  if (isPending || !session?.user) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-gray-600">Loading profile...</p>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <section className="w-full max-w-md space-y-6 rounded-xl border bg-white p-8 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            My Profile
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            View and update your account information.
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            value={session.user.email}
            readOnly
            className="w-full rounded-lg border bg-gray-100 p-3 text-gray-600"
          />
        </div>

        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Full name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              minLength={2}
              className="w-full rounded-lg border p-3 outline-none focus:border-green-600"
            />
          </div>

          {message && (
            <p className="text-sm text-green-700">{message}</p>
          )}

          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading || !name.trim()}
            className="w-full rounded-lg bg-green-700 p-3 font-medium text-white hover:bg-green-800 disabled:opacity-50"
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>

        <button
          onClick={handleSignOut}
          className="w-full rounded-lg border border-red-600 p-3 font-medium text-red-600 hover:bg-red-50"
        >
          Logout
        </button>

        <Link
          href="/"
          className="block text-center text-sm text-green-700 hover:underline"
        >
          Back to Home
        </Link>
      </section>
    </main>
  );
}
