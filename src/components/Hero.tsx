import Image from "next/image";
import BanglaDate from "@/components/BanglaDate";

export default function Hero() {
  return (
        <section>
      <div className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-base-300 bg-base-100 px-4 py-10 md:flex-row md:px-8">
        <div className="flex max-w-xl flex-col items-start gap-2">
          <BanglaDate className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary" />

          <h1 className="text-3xl font-bold sm:text-4xl">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="mt-2 text-base">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <a
            href="#সব-পণ্য"
            className="mt-4 flex h-10 items-center rounded-lg border border-primary-strong bg-primary px-4 text-sm font-semibold text-primary-content shadow transition-colors hover:bg-primary-strong"
          >
            সব পণ্য দেখুন
          </a>
        </div>

        <Image
          src="/bazar-hero.png"
          alt="ঝুড়িতে তাজা সবজি ও ফল"
          width={315}
          height={263}
          priority
          className="h-auto w-full max-w-[315px]"
        />
      </div>
    </section>
  );
}