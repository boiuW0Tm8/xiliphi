import type { Metadata } from "next";

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
            please
            {" "}<a
              href="/contact"
              className="underline hover:text-black transition-colors"
            >
              contact
            </a>{" "}
            us within <strong>14 days of delivery</strong> and we will
            do our best to assist you.
          </p>
        </div>

        {/* ELIGIBILITY */}
        <div>
          <h2 className="text-lg font-medium mb-3">Eligibility</h2>
          <p className="text-neutral-600 leading-relaxed">
            To be eligible for a return, items must be unused. For hygiene and safety reasons,
            we are unable to accept returns on used products.
          </p>
        </div>

        {/* SHIPPING COSTS */}
        <div>
          <h2 className="text-lg font-medium mb-3">Return Shipping</h2>
          <p className="text-neutral-600 leading-relaxed">
            Customers are responsible for return shipping costs.
            Original shipping fees are non-refundable.
          </p>
        </div>

        {/* DAMAGED ITEMS */}
        <div>
          <h2 className="text-lg font-medium mb-3">Damaged or Incorrect Orders</h2>
          <p className="text-neutral-600 leading-relaxed">
            If your order arrives damaged, defective, or incorrect,
            please
            {" "}<a
              href="/contact"
              className="underline hover:text-black transition-colors"
            >
              contact
            </a>{" "}
            us within <strong>48 hours of delivery</strong> and we will resolve the issue promptly.
          </p>
        </div>

        {/* REFUNDS */}
        <div>
          <h2 className="text-lg font-medium mb-3">Refunds</h2>
          <p className="text-neutral-600 leading-relaxed">
            Once your return is received and inspected, we will notify you
            of the approval status. Approved refunds will be processed to
            your original method of payment within 5 business days.
          </p>
        </div>

      </div>
    </main>
  );
}