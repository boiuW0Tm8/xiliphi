export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-24 text-neutral-900">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-medium mb-10">
          Contact
        </h1>

        {/* Mailing Address */}
        <h2 className="text-sm font-medium uppercase tracking-wide text-neutral-500 mb-2">
          Mailing Address
        </h2>
        <p className="text-lg font-medium leading-normal space-y-1 mb-8">
          <span className="block">Xiliphi</span>
          <span className="block">7030 Woodbine Avenue, Suite 500</span>
          <span className="block">Markham, ON L3R 6G2</span>
          <span className="block">Canada</span>
        </p>

        {/* Email */}
        <h2 className="text-sm font-medium uppercase tracking-wide text-neutral-500 mb-2">
          Email
        </h2>
        <p className="text-lg font-medium leading-normal">
          support@xiliphi.com
        </p>
      </section>
    </main>
  );
}
