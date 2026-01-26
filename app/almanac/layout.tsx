export default function AlmanacLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-neutral-50 min-h-screen">
      {children}
    </section>
  );
}
