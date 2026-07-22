import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-24 text-neutral-900 animate-fade-in-up">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-medium mb-8 animate-fade-in-up">
          Where To Buy
        </h1>

        <Link
          href="https://www.amazon.ca/s?k=XILIPHI&ref=bl_dp_s_web_0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block group animate-fade-in-up [animation-delay:120ms]"
        >
          <Image
            src="/amazon-logo.png"
            alt="Buy Xiliphi on Amazon"
            width={160}
            height={48}
            priority
            className="opacity-100 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"
          />
        </Link>
      </section>
    </main>
  );
}
