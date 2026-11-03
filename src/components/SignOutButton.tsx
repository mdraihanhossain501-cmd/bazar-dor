"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { LogOut } from "lucide-react";
import { signOut } from "@/lib/auth-client";

export default function SignOutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    const { error } = await signOut();

    if (error) {
      toast.error("সাইন আউট করা যায়নি। আবার চেষ্টা করুন।");
      return;
    }

    toast.success("সফলভাবে সাইন আউট হয়েছে");
    router.push("/");
    router.refresh();
  };

  return (
    <button
      type="button"
      onClick={handleSignOut}
      className="flex h-9 shrink-0 items-center gap-1.5 rounded-lg border border-error px-3 text-sm font-medium text-error transition-colors hover:bg-error/10"
    >
      <LogOut className="size-4" />
      সাইন আউট
    </button>
  );
}