export default function Hero() {
  return (
    <section className="bg-green-50 px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 font-semibold text-green-700">
          বাজারের সঠিক তথ্য
        </p>

        <h1 className="max-w-2xl text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
          প্রতিদিনের বাজার দর জানুন সহজেই
        </h1>

        <p className="mt-5 max-w-xl text-gray-600">
          আপনার নিত্যপ্রয়োজনীয় পণ্যের সর্বশেষ দাম, বাজারের পরিবর্তন এবং
          সঠিক তথ্য এক জায়গায়।
        </p>

        <a
          href="#সব-পণ্য"
          className="mt-8 inline-block rounded-lg bg-green-700 px-6 py-3 font-semibold text-white"
        >
          সব পণ্যের দাম দেখুন
        </a>
      </div>
    </section>
  );
}