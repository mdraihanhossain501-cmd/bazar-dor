"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { signIn } from "@/lib/auth-client";
import AuthCard, {
  inputClass,
  primaryButtonClass,
} from "@/components/AuthCard";
import SocialButtons from "@/components/SocialButtons";
import { getAuthErrorMessage } from "@/lib/auth-errors";

export default function SignInPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("reason") === "login-required") {
      toast.error("এই পেজ দেখতে আগে সাইন ইন করুন।", { id: "login-required" });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim() || !password) {
      toast.error("ইমেইল ও পাসওয়ার্ড দিন।");
      return;
    }

    setLoading(true);

    try {
      const { error } = await signIn.email({ email: email.trim(), password });

      if (error) {
        toast.error(
          getAuthErrorMessage(error, "সাইন ইন করা যায়নি। আবার চেষ্টা করুন।")
        );
        return;
      }

      toast.success("সফলভাবে সাইন ইন হয়েছে");
      router.push("/");
      router.refresh();
    } catch {
      toast.error("কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard
      title="সাইন ইন"
      subtitle="বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।"
      footer={
        <>
          অ্যাকাউন্ট নেই?{" "}
          <Link href="/signup" className="font-medium text-primary hover:underline">
            সাইন আপ করুন
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm font-medium">
            ইমেইল
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="password" className="text-sm font-medium">
            পাসওয়ার্ড
          </label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            placeholder="কমপক্ষে ৮ অক্ষর"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={inputClass}
          />
        </div>

        <button type="submit" disabled={loading} className={primaryButtonClass}>
          {loading ? "অপেক্ষা করুন..." : "সাইন ইন"}
        </button>
      </form>

      <SocialButtons />
    </AuthCard>
  );
}