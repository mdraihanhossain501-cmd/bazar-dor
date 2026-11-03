import Link from "next/link";
import UpdateProfileForm from "@/components/UpdateProfileForm";
import { requireSession } from "@/lib/session";

export default async function UpdateProfilePage() {
  const { user } = await requireSession();

  return (
    <main className="mx-auto max-w-xl px-4 py-10">
      <h1 className="text-2xl font-bold">তথ্য আপডেট করুন</h1>
      <p className="mt-1 text-sm">আপনার নাম পরিবর্তন করুন।</p>

      <section className="mt-6 rounded-2xl border border-base-300 bg-base-100 p-6">
        <UpdateProfileForm currentName={user.name ?? ""} />
      </section>

      <Link
        href="/profile"
        className="mt-6 block text-center text-sm hover:underline"
      >
        ← প্রোফাইলে ফিরে যান
      </Link>
    </main>
  );
}