export default function AlmanacLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-neutral-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-20
        text-neutral-900 sm:text-neutral-700">
        {children}
      </div>
    </section>
  );
}
