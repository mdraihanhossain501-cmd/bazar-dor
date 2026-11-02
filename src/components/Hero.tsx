import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-green-50 px-4 py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-2">
        <div>
          <p className="mb-3 font-semibold text-green-700">
            বাজারের সঠিক তথ্য
          </p>

          <h1 className="max-w-2xl text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
            প্রতিদিনের বাজার দর জানুন সহজেই
          </h1>

          <p className="mt-5 max-w-xl leading-7 text-gray-600">
            আপনার নিত্যপ্রয়োজনীয় পণ্যের সর্বশেষ দাম, বাজারের পরিবর্তন এবং
            সঠিক তথ্য এক জায়গায়।
          </p>

          <a
            href="#সব-পণ্য"
            className="mt-8 inline-block rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
          >
            সব পণ্যের দাম দেখুন
          </a>
        </div>

        <div className="flex justify-center">
          <Image
            src="/bazar-hero.png"
            alt="Fresh vegetables and fruits in a shopping basket"
            width={550}
            height={450}
            priority
            className="h-auto w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
}