"use client";

import { useSyncExternalStore } from "react";
import { getBanglaDate } from "@/lib/format";

const subscribe = () => () => {};

export default function BanglaDate({ className }: { className?: string }) {
  const date = useSyncExternalStore(subscribe, () => getBanglaDate(), () => "");

  return (
    <span className={className} suppressHydrationWarning>
      {date || "\u00A0"}
    </span>
  );
}