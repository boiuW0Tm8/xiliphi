import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Information | Xiliphi",
  description: "Xiliphi ships across Canada and the U.S. — standard and express options with free shipping on qualifying orders.",
  alternates: {
    canonical: "/shipping",
  },
};

export default function ShippingPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-medium mb-4 tracking-wide">
        Shipping Information
      </h1>
      <p className="text-sm text-neutral-400 mb-16">All rates are displayed in Canadian dollars (CAD).</p>

      <div className="space-y-12 text-neutral-800">

        {/* CANADA */}
        <div>
          <h2 className="text-lg font-medium mb-3">Shipping to Canada</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            We offer two delivery options for Canadian orders:
          </p>
          <ul className="space-y-3 text-neutral-600">
            <li>
              <strong>Standard Shipping — $10</strong><br />
              Free on orders over $50.
            </li>
            <li>
              <strong>Express Shipping — $15</strong><br />
              Faster delivery for when you need your order sooner.
            </li>
          </ul>
        </div>

        {/* US */}
        <div>
          <h2 className="text-lg font-medium mb-3">Shipping to the United States</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            We also ship to the U.S. with the following rates:
          </p>
          <ul className="space-y-3 text-neutral-600">
            <li>
              <strong>Standard Shipping — $15</strong><br />
              Free on orders over $75.
            </li>
            <li>
              <strong>Express Shipping — $20</strong>
            </li>
          </ul>
          <p className="text-neutral-600 leading-relaxed mt-4">
            U.S. orders may be subject to customs fees or import duties upon delivery.
            These charges are the responsibility of the customer and are not included in our shipping rates.
          </p>
        </div>

        {/* PROCESSING TIME */}
        <div>
          <h2 className="text-lg font-medium mb-3">Order Processing</h2>
          <p className="text-neutral-600 leading-relaxed">
            Orders are typically dispatched within 24 hours of purchase.
            Once shipped, you will receive tracking information via email.
          </p>
        </div>

        {/* COURIERS */}
        <div>
          <h2 className="text-lg font-medium mb-3">Delivery Partners</h2>
          <p className="text-neutral-600 leading-relaxed">
            We work with trusted couriers including Canada Post and UPS
            to ensure your order arrives safely and on time.
            Carrier selection may vary depending on your location.
          </p>
        </div>

        {/* DELIVERY TIMES */}
        <div>
          <h2 className="text-lg font-medium mb-3">Estimated Delivery Times</h2>
          <p className="text-neutral-600 leading-relaxed">
            Standard shipping typically arrives within 3–7 business days.
            Express shipping usually arrives within 1–3 business days,
            depending on your region.
          </p>
        </div>

        {/* ADDITIONAL INFO */}
        <div>
          <h2 className="text-lg font-medium mb-3">Additional Information</h2>
          <p className="text-neutral-600 leading-relaxed">
            Delivery times are estimates and may vary during peak periods
            or due to unforeseen carrier delays. Please ensure your shipping
            address is entered correctly at checkout, as we are unable to
            modify orders once they have been dispatched.
          </p>
        </div>

      </div>
    </main>
  );
}