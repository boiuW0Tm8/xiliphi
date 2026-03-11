import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Returns & Exchanges | Xiliphi",
  description: "Learn about Xiliphi's return and exchange policy — contact us within 14 days of delivery.",
  alternates: {
    canonical: "/returns",
  },
};

export default function ReturnsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-medium mb-16 tracking-wide">
        Returns & Exchanges
      </h1>

      <div className="space-y-12 text-neutral-800">

        {/* POLICY OVERVIEW */}
        <div>
          <p className="text-neutral-600 leading-relaxed">
            We want you to feel confident in your purchase. If you are not fully satisfied,
            please <Link href="/contact" className="underline hover:text-black transition-colors">contact us</Link> within{" "}
            <strong>14 days of delivery</strong> to request a return. Items sent back without
            first requesting a return will not be accepted.
          </p>
        </div>

        {/* ELIGIBILITY */}
        <div>
          <h2 className="text-lg font-medium mb-3">Eligibility</h2>
          <p className="text-neutral-600 leading-relaxed mb-3">
            To be eligible for a return, items must be unused, in their original packaging,
            and accompanied by proof of purchase. For hygiene and safety reasons, we are
            unable to accept returns on used products.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            We cannot accept returns on sale items or gift cards.
          </p>
        </div>

        {/* EXCHANGES */}
        <div>
          <h2 className="text-lg font-medium mb-3">Exchanges</h2>
          <p className="text-neutral-600 leading-relaxed">
            The fastest way to get what you want is to return the item you have and, once
            the return is accepted, make a separate purchase for the new item.
          </p>
        </div>

        {/* RETURN SHIPPING */}
        <div>
          <h2 className="text-lg font-medium mb-3">Return Shipping</h2>
          <p className="text-neutral-600 leading-relaxed">
            If your return is accepted, we will send you a return shipping label and
            instructions on how and where to send your package. Customers are responsible
            for return shipping costs. Original shipping fees are non-refundable.
          </p>
        </div>

        {/* DAMAGED ITEMS */}
        <div>
          <h2 className="text-lg font-medium mb-3">Damaged or Incorrect Orders</h2>
          <p className="text-neutral-600 leading-relaxed">
            Please inspect your order upon reception. If your order arrives damaged,
            defective, or incorrect, please{" "}
            <Link href="/contact" className="underline hover:text-black transition-colors">contact us</Link>{" "}
            within <strong>48 hours of delivery</strong> and we will resolve the issue promptly.
          </p>
        </div>

        {/* EU */}
        <div>
          <h2 className="text-lg font-medium mb-3">European Union — 14 Day Cooling Off Period</h2>
          <p className="text-neutral-600 leading-relaxed">
            If merchandise is being shipped into the European Union, you have the right to
            cancel or return your order within 14 days for any reason and without justification.
            Items must be unused, in their original packaging, and accompanied by proof of purchase.
          </p>
        </div>

        {/* REFUNDS */}
        <div>
          <h2 className="text-lg font-medium mb-3">Refunds</h2>
          <p className="text-neutral-600 leading-relaxed">
            Once your return is received and inspected, we will notify you of the approval status.
            Approved refunds will be processed to your original method of payment within{" "}
            <strong>5 business days</strong>. Please allow additional time for your bank or credit
            card company to post the refund. If more than 15 business days have passed since your
            return was approved, please{" "}
            <Link href="/contact" className="underline hover:text-black transition-colors">contact us</Link>.
          </p>
        </div>

      </div>
    </main>
  );
}