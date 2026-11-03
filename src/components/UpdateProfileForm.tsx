"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { updateUser } from "@/lib/auth-client";
import { inputClass, primaryButtonClass } from "@/components/AuthCard";

export default function UpdateProfileForm({
  currentName,
}: {
  currentName: string;
}) {
  const router = useRouter();
  const [name, setName] = useState(currentName);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmed = name.trim();
    if (!trimmed) {
      toast.error("নাম খালি রাখা যাবে না।");
      return;
    }

    setLoading(true);

    try {
      const { error } = await updateUser({ name: trimmed });

      if (error) {
        toast.error("তথ্য আপডেট করা যায়নি। আবার চেষ্টা করুন।");
        return;
      }

      toast.success("তথ্য সফলভাবে আপডেট হয়েছে");
      router.push("/profile");
      router.refresh();
    } catch {
      toast.error("কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="space-y-1.5">
        <label htmlFor="name" className="text-sm font-medium">
          নাম
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
        />
      </div>

      <button type="submit" disabled={loading} className={primaryButtonClass}>
        {loading ? "অপেক্ষা করুন..." : "তথ্য আপডেট করুন"}
      </button>
    </form>
  );
}