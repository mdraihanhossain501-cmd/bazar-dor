import Link from "next/link";
import SignOutButton from "@/components/SignOutButton";
import { primaryButtonClass } from "@/components/AuthCard";
import { requireSession } from "@/lib/session";

export default async function ProfilePage() {
  const { user } = await requireSession();
  const initial = user.name?.trim().charAt(0).toUpperCase() || "U";

  return (
    <main className="mx-auto max-w-xl px-4 py-10">
      <h1 className="text-2xl font-bold">আমার প্রোফাইল</h1>
      <p className="mt-1 text-sm">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>

      <section className="mt-6 flex items-center justify-between gap-4 rounded-2xl border border-base-300 bg-base-100 p-4">
        <div className="flex min-w-0 items-center gap-4">
          {user.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={user.image}
              alt=""
              referrerPolicy="no-referrer"
              className="size-14 shrink-0 rounded-xl object-cover"
            />
          ) : (
            <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary text-xl font-semibold text-primary-content">
              {initial}
            </span>
          )}

          <div className="min-w-0">
            <p className="truncate text-lg font-semibold">{user.name}</p>
            <p className="truncate text-sm">{user.email}</p>
          </div>
        </div>

        <SignOutButton />
      </section>

      <section className="mt-4 rounded-2xl border border-base-300 bg-base-100 p-6">
        <h2 className="font-semibold">তথ্য</h2>

        <dl className="mt-4 space-y-4">
          <div>
            <dt className="text-sm font-medium">নাম</dt>
            <dd className="mt-1.5 flex h-10 items-center rounded-lg border border-base-300 bg-base-200 px-3 text-sm">
              {user.name}
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium">ইমেইল</dt>
            <dd className="mt-1.5 flex h-10 items-center rounded-lg border border-base-300 bg-base-200 px-3 text-sm">
              {user.email}
            </dd>
          </div>
        </dl>

        <Link href="/profile/update" className={`${primaryButtonClass} mt-6`}>
          আপডেট
        </Link>
      </section>
    </main>
  );
}