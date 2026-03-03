"use client";

export default function TermsOfServicePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-medium mb-16 tracking-wide">
        Terms of Service
      </h1>

      <div className="space-y-12 text-neutral-800">

        {/* INTRO */}
        <div>
          <p className="text-neutral-600 leading-relaxed">
            These Terms of Service govern your use of the Xiliphi website and
            the purchase of our products. By accessing our site or placing an
            order, you agree to these terms.
          </p>
        </div>

        {/* ELIGIBILITY */}
        <div>
          <h2 className="text-lg font-medium mb-3">Eligibility</h2>
          <p className="text-neutral-600 leading-relaxed">
            By using this website, you confirm that you are of legal age in
            your province or territory of residence, or that you have
            permission from a legal guardian.
          </p>
        </div>

        {/* PRODUCTS */}
        <div>
          <h2 className="text-lg font-medium mb-3">Products & Descriptions</h2>
          <p className="text-neutral-600 leading-relaxed">
            We strive to ensure that product descriptions, pricing, and images
            are accurate. However, we reserve the right to correct errors,
            update information, or modify products at any time without prior notice.
          </p>
        </div>

        {/* PRICING */}
        <div>
          <h2 className="text-lg font-medium mb-3">Pricing & Payments</h2>
          <p className="text-neutral-600 leading-relaxed">
            All prices are listed in Canadian dollars unless otherwise stated.
            We reserve the right to modify pricing at any time. Payment must be
            received before an order is processed.
          </p>
        </div>

        {/* SHIPPING */}
        <div>
          <h2 className="text-lg font-medium mb-3">Shipping</h2>
          <p className="text-neutral-600 leading-relaxed">
            Shipping times are estimates and may vary depending on carrier
            delays or external circumstances. Xiliphi is not responsible for
            delays once an order has been handed to the courier.
          </p>
        </div>

        {/* RETURNS */}
        <div>
          <h2 className="text-lg font-medium mb-3">Returns</h2>
          <p className="text-neutral-600 leading-relaxed">
            Returns are subject to our Returns Policy. Please review the
            Returns page for detailed information regarding eligibility
            and timelines.
          </p>
        </div>

        {/* LIMITATION OF LIABILITY */}
        <div>
          <h2 className="text-lg font-medium mb-3">Limitation of Liability</h2>
          <p className="text-neutral-600 leading-relaxed">
            Xiliphi shall not be liable for any indirect, incidental,
            or consequential damages arising from the use of our products
            or website. Our products are intended for external cosmetic use only.
          </p>
        </div>

        {/* ALLERGIES */}
        <div>
          <h2 className="text-lg font-medium mb-3">Product Use & Allergies</h2>
          <p className="text-neutral-600 leading-relaxed">
            Customers are responsible for reviewing ingredient lists and
            performing patch tests prior to use. Discontinue use if irritation
            occurs. Xiliphi is not responsible for adverse reactions due to
            individual sensitivities.
          </p>
        </div>

        {/* INTELLECTUAL PROPERTY */}
        <div>
          <h2 className="text-lg font-medium mb-3">Intellectual Property</h2>
          <p className="text-neutral-600 leading-relaxed">
            All original content on this website, including branding, text, design,
            and layout, is the property of Xiliphi and may not be copied,
            reproduced, or distributed without written permission. Certain images
            or media may be used under appropriate licenses or open-source terms.
          </p>
        </div>

        {/* CHANGES */}
        <div>
          <h2 className="text-lg font-medium mb-3">Changes to These Terms</h2>
          <p className="text-neutral-600 leading-relaxed">
            We reserve the right to update these Terms of Service at any time.
            Continued use of the website following changes constitutes acceptance
            of those updates.
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="text-lg font-medium mb-3">Contact</h2>
          <p className="text-neutral-600 leading-relaxed">
            If you have any questions regarding these therms, please contact us using our{" "}
            {" "}<a
              href="/contact"
              className="underline hover:text-black transition-colors"
            >
              contact
            </a>{" "}
            form.
          </p>
        </div>

      </div>
    </main>
  );
}