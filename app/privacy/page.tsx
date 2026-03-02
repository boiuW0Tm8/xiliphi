"use client";

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-medium mb-16 tracking-wide">
        Privacy Policy
      </h1>

      <div className="space-y-12 text-neutral-800">

        {/* INTRO */}
        <div>
          <p className="text-neutral-600 leading-relaxed">
            At Xiliphi, your privacy matters to us. This Privacy Policy explains
            how we collect, use, and protect your personal information when you
            visit our website or make a purchase.
          </p>
        </div>

        {/* INFORMATION WE COLLECT */}
        <div>
          <h2 className="text-lg font-medium mb-3">Information We Collect</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            When you interact with our website, we may collect:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-neutral-600">
            <li>Name and contact information (such as email and shipping address)</li>
            <li>Payment information (processed securely through third-party providers)</li>
            <li>Order details and purchase history</li>
            <li>Website usage data such as IP address, browser type, and pages visited</li>
          </ul>
        </div>

        {/* HOW WE USE IT */}
        <div>
          <h2 className="text-lg font-medium mb-3">How We Use Your Information</h2>
          <p className="text-neutral-600 leading-relaxed">
            We use your information to process orders, provide customer support,
            improve our website, communicate updates, and ensure a secure shopping
            experience. We do not sell your personal information.
          </p>
        </div>

        {/* PAYMENT PROCESSING */}
        <div>
          <h2 className="text-lg font-medium mb-3">Payment Processing</h2>
          <p className="text-neutral-600 leading-relaxed">
            Payments are processed securely through trusted third-party providers.
            We do not store full credit card details on our servers.
          </p>
        </div>

        {/* COOKIES */}
        <div>
          <h2 className="text-lg font-medium mb-3">Cookies & Analytics</h2>
          <p className="text-neutral-600 leading-relaxed">
            Our website may use cookies and analytics tools to understand how
            visitors interact with our site. This helps us improve performance
            and user experience. You can adjust your browser settings to decline
            cookies if you prefer.
          </p>
        </div>

        {/* SHIPPING PARTNERS */}
        <div>
          <h2 className="text-lg font-medium mb-3">Third-Party Services</h2>
          <p className="text-neutral-600 leading-relaxed">
            We may share necessary information with trusted service providers
            such as payment processors and shipping partners (including Canada
            Post and UPS) solely for the purpose of fulfilling your order.
          </p>
        </div>

        {/* DATA SECURITY */}
        <div>
          <h2 className="text-lg font-medium mb-3">Data Security</h2>
          <p className="text-neutral-600 leading-relaxed">
            We take reasonable security measures to protect your personal
            information. However, no method of online transmission is completely
            secure.
          </p>
        </div>

        {/* YOUR RIGHTS */}
        <div>
          <h2 className="text-lg font-medium mb-3">Your Rights</h2>
          <p className="text-neutral-600 leading-relaxed">
            You may request access to, correction of, or deletion of your
            personal information by contacting us.
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="text-lg font-medium mb-3">Contact Us</h2>
          <p className="text-neutral-600 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a
              href="mailto:support@xiliphi.com"
              className="underline hover:text-black transition-colors"
            >
              support@xiliphi.com
            </a>.
          </p>
        </div>

      </div>
    </main>
  );
}