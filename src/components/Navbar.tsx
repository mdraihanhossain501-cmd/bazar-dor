"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { ChevronDown, LogOut, User } from "lucide-react";
import { signOut, useSession } from "@/lib/auth-client";
import BanglaDate from "@/components/BanglaDate";

export default function Navbar() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close the dropdown when clicking anywhere outside it
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleSignOut = async () => {
    setOpen(false);
    const { error } = await signOut();

    if (error) {
      toast.error("সাইন আউট করা যায়নি। আবার চেষ্টা করুন।");
      return;
    }

    toast.success("সফলভাবে সাইন আউট হয়েছে");
    router.push("/");
    router.refresh();
  };

  const user = session?.user;

  return (
    <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-4">
      <Link href="/" className="flex items-center gap-2">
        <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-lg text-primary-content">
          🛒
        </span>
        <span className="flex flex-col leading-tight">
          <span className="text-xl font-bold">বাজার দর</span>
          <BanglaDate className="text-xs" />
        </span>
      </Link>

      {isPending ? (
        <div className="h-10 w-28 animate-pulse rounded-lg bg-base-200" />
      ) : user ? (
        <div className="relative" ref={menuRef}>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-haspopup="menu"
            className="flex h-10 items-center gap-2 rounded-lg px-3 transition-colors hover:bg-base-200"
          >
            <span className="flex size-9 items-center justify-center rounded-[10px] bg-primary text-sm font-semibold text-primary-content">
              {user.name?.trim().charAt(0).toUpperCase() || "U"}
            </span>
            <span className="hidden max-w-32 truncate text-sm font-medium sm:block">
              {user.name}
            </span>
            <ChevronDown className="size-4" />
          </button>

          {open && (
            <div
              role="menu"
              className="absolute right-0 top-full z-50 mt-2 w-60 rounded-xl border border-base-300 bg-base-100 p-3 shadow-lg"
            >
              <p className="truncate text-sm font-semibold">{user.name}</p>
              <p className="mb-2 truncate text-xs">{user.email}</p>

              <Link
                href="/profile"
                role="menuitem"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm hover:bg-base-200"
              >
                <User className="size-4" />
                আমার প্রোফাইল
              </Link>

              <button
                type="button"
                role="menuitem"
                onClick={handleSignOut}
                className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-error hover:bg-base-200"
              >
                <LogOut className="size-4" />
                সাইন আউট
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Link
            href="/sign-in"
            className="flex h-10 items-center rounded-lg px-4 text-sm font-medium transition-colors hover:bg-base-200"
          >
            সাইন ইন
          </Link>
          <Link
            href="/sign-up"
            className="flex h-10 items-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-content shadow transition-colors hover:bg-primary-strong"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
}