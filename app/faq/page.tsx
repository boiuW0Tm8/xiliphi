export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-3xl md:text-4xl font-medium mb-16 tracking-wide">
        Frequently Asked Questions
      </h1>

      <div className="space-y-12 text-neutral-800">

        {/* SHIPPING */}
        <div>
          <h2 className="text-lg font-medium mb-3">Where do you ship?</h2>
          <p className="text-neutral-600 leading-relaxed">
            We currently ship within Canada. Additional regions may be added in the future.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-3">How long does shipping take?</h2>
          <p className="text-neutral-600 leading-relaxed">
            Orders typically arrive within 3–7 business days depending on your location.
            You will receive tracking information once your order has shipped.
          </p>
        </div>

        {/* PRODUCTS */}
        <div>
          <h2 className="text-lg font-medium mb-3">Are your products suitable for sensitive skin?</h2>
          <p className="text-neutral-600 leading-relaxed">
            Our formulas are crafted with gentle, high-quality ingredients.
            However, we recommend performing a patch test before full use,
            especially if you have sensitive skin.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-3">Are Xiliphi products natural?</h2>
          <p className="text-neutral-600 leading-relaxed">
            We prioritize thoughtfully selected ingredients designed to nourish
            and support healthy-looking skin.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-3">Are your products tested on animals?</h2>
          <p className="text-neutral-600 leading-relaxed">
            No. Xiliphi does not test on animals.
          </p>
        </div>

        {/* RETURNS */}
        <div>
          <h2 className="text-lg font-medium mb-3">What is your return policy?</h2>
          <p className="text-neutral-600 leading-relaxed">
            If you are not satisfied with your purchase, please contact us within
            14 days of delivery and we will work to resolve the issue.
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="text-lg font-medium mb-3">How can I contact you?</h2>
          <p className="text-neutral-600 leading-relaxed">
            You can reach us anytime at{" "}
            <a
              href="mailto:support@xiliphi.com"
              className="underline hover:text-black transition-colors"
            >
              support@xiliphi.com
            </a>.
          </p>
        </div>

      </div>
    </div>
  );
}