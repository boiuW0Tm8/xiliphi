import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://xiliphi.com"),
  title: "Privacy Policy | Xiliphi",
  description: "Learn how Xiliphi collects, uses, and protects your personal information.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-medium mb-4 tracking-wide">
        Privacy Policy
      </h1>
      <p className="text-sm text-neutral-400 mb-16">Last updated: March 9, 2026</p>

      <div className="space-y-12 text-neutral-800">

        {/* INTRO */}
        <div>
          <p className="text-neutral-600 leading-relaxed">
            At Xiliphi, your privacy matters to us. This Privacy Policy explains how we collect, use, and protect
            your personal information when you visit our website or make a purchase. Xiliphi operates this store
            and website, including all related information, content, features, tools, products and services (the
            "Services"). The Services are powered by Shopify.
          </p>
          <p className="text-neutral-600 leading-relaxed mt-4">
            Please read this Privacy Policy carefully. By using and accessing any of the Services, you acknowledge
            that you have read and understood this Privacy Policy. If there is a conflict between our Terms of
            Service and this Privacy Policy, this Privacy Policy controls with respect to the collection,
            processing, and disclosure of your personal information.
          </p>
        </div>

        {/* INFORMATION WE COLLECT */}
        <div>
          <h2 className="text-lg font-medium mb-3">Information We Collect</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            When you interact with our website, we may collect the following categories of personal information:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-neutral-600">
            <li><strong>Contact details</strong> including your name, address, billing address, shipping address, phone number, and email address</li>
            <li><strong>Payment information</strong> processed securely through trusted third-party providers — we do not store full credit card details on our servers</li>
            <li><strong>Account information</strong> including your username, password, security questions, preferences and settings</li>
            <li><strong>Order and transaction details</strong> including items you view, add to your cart, purchase, return, or exchange, and your purchase history</li>
            <li><strong>Communications with us</strong> including the information you include when contacting us for customer support</li>
            <li><strong>Device and usage information</strong> including your IP address, browser type, pages visited, and how you interact with the Services</li>
          </ul>
          <p className="text-neutral-600 leading-relaxed mt-4">
            We may collect this information directly from you, automatically through the Services (including cookies
            and similar technologies), from our service providers, or from partners and other third parties.
          </p>
        </div>

        {/* HOW WE USE IT */}
        <div>
          <h2 className="text-lg font-medium mb-3">How We Use Your Information</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            We use your personal information to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-neutral-600">
            <li>Process and fulfill your orders, including arranging shipping and handling returns</li>
            <li>Provide customer support and respond to your inquiries</li>
            <li>Maintain and improve our website and Services</li>
            <li>Send order confirmations, shipping updates, and account notifications</li>
            <li>Send marketing and promotional communications by email (you may opt out at any time)</li>
            <li>Detect and prevent fraud, ensure payment security, and protect our Services</li>
            <li>Comply with applicable legal obligations</li>
          </ul>
          <p className="text-neutral-600 leading-relaxed mt-4 font-medium">
            We do not sell your personal information.
          </p>
        </div>

        {/* PAYMENT PROCESSING */}
        <div>
          <h2 className="text-lg font-medium mb-3">Payment Processing</h2>
          <p className="text-neutral-600 leading-relaxed">
            Payments are processed securely through trusted third-party providers.
            We do not store full credit card or financial account details on our servers.
          </p>
        </div>

        {/* COOKIES */}
        <div>
          <h2 className="text-lg font-medium mb-3">Cookies & Analytics</h2>
          <p className="text-neutral-600 leading-relaxed">
            Our website may use cookies and analytics tools to understand how visitors interact with our site
            and to improve performance and user experience. You can adjust your browser settings to decline
            cookies if you prefer.
          </p>
        </div>

        {/* HOW WE SHARE */}
        <div>
          <h2 className="text-lg font-medium mb-3">How We Share Your Information</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            We may share your personal information in the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-neutral-600">
            <li><strong>Service providers:</strong> With vendors who perform services on our behalf, such as payment processors, shipping partners (including Canada Post and UPS), IT management, data analytics, and cloud storage — solely to fulfill your order or operate our Services</li>
            <li><strong>Business and marketing partners:</strong> To support personalized advertising based on your online activity, where permitted by law</li>
            <li><strong>Shopify:</strong> As our hosting and commerce platform, Shopify collects and processes personal information about your use of the Services. Information you submit may be shared with Shopify and transmitted to third parties in countries other than where you reside. Learn more at the <a href="https://www.shopify.com/legal/privacy" className="underline hover:text-black transition-colors" target="_blank" rel="noopener noreferrer">Shopify Consumer Privacy Policy</a></li>
            <li><strong>Legal and safety purposes:</strong> To comply with applicable law, respond to legal process, or enforce our terms and policies</li>
            <li><strong>Business transactions:</strong> In connection with a merger, acquisition, or similar event</li>
          </ul>
        </div>

        {/* SHOPIFY */}
        <div>
          <h2 className="text-lg font-medium mb-3">Relationship with Shopify</h2>
          <p className="text-neutral-600 leading-relaxed">
            The Services are hosted by Shopify. To help protect, grow, and improve our business, we use certain
            Shopify features that incorporate data from your interactions with our store and with Shopify. In these
            circumstances, Shopify is responsible for the processing of your personal information for those purposes.
            You can exercise your rights over that data via the{" "}
            <a href="https://privacy.shopify.com/en" className="underline hover:text-black transition-colors" target="_blank" rel="noopener noreferrer">
              Shopify Privacy Portal
            </a>.
          </p>
        </div>

        {/* CHILDREN */}
        <div>
          <h2 className="text-lg font-medium mb-3">Children&apos;s Data</h2>
          <p className="text-neutral-600 leading-relaxed">
            The Services are not intended for use by children under the age of majority. We do not knowingly
            collect personal information from minors. If you believe a child has provided us with their personal
            information, please contact us and we will delete it.
          </p>
        </div>

        {/* DATA SECURITY */}
        <div>
          <h2 className="text-lg font-medium mb-3">Data Security</h2>
          <p className="text-neutral-600 leading-relaxed">
            We take reasonable security measures to protect your personal information. However, no method of
            online transmission is completely secure. We recommend that you do not use unsecure channels to
            communicate sensitive information to us, and that you keep your account credentials private.
          </p>
        </div>

        {/* DATA RETENTION */}
        <div>
          <h2 className="text-lg font-medium mb-3">Data Retention</h2>
          <p className="text-neutral-600 leading-relaxed">
            How long we retain your personal information depends on factors such as whether we need it to
            maintain your account, provide Services, comply with legal obligations, resolve disputes, or
            enforce applicable policies.
          </p>
        </div>

        {/* THIRD PARTY LINKS */}
        <div>
          <h2 className="text-lg font-medium mb-3">Third-Party Links</h2>
          <p className="text-neutral-600 leading-relaxed">
            Our website may contain links to third-party websites. We are not responsible for the privacy
            practices or content of those sites and encourage you to review their policies independently.
          </p>
        </div>

        {/* YOUR RIGHTS */}
        <div>
          <h2 className="text-lg font-medium mb-3">Your Rights</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            Depending on where you live, you may have some or all of the following rights regarding your personal information:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-neutral-600">
            <li><strong>Access / Know:</strong> Request access to personal information we hold about you</li>
            <li><strong>Delete:</strong> Request deletion of your personal information</li>
            <li><strong>Correct:</strong> Request correction of inaccurate information</li>
            <li><strong>Portability:</strong> Receive a copy of your data and request transfer to a third party</li>
            <li><strong>Opt out of targeted advertising:</strong> Opt out of the sale or sharing of your personal information for targeted advertising purposes</li>
            <li><strong>Manage communication preferences:</strong> Opt out of promotional emails at any time using the unsubscribe link in any email we send</li>
          </ul>
          <p className="text-neutral-600 leading-relaxed mt-4">
            To exercise any of these rights, please contact us using our contact form. We will not discriminate
            against you for exercising your rights. We may need to verify your identity before processing your request.
          </p>
        </div>

        {/* INTERNATIONAL TRANSFERS */}
        <div>
          <h2 className="text-lg font-medium mb-3">International Transfers</h2>
          <p className="text-neutral-600 leading-relaxed">
            Your personal information may be transferred, stored, and processed outside the country where you
            reside. Where required, we rely on recognized transfer mechanisms such as Standard Contractual
            Clauses to protect your data.
          </p>
        </div>

        {/* CHANGES */}
        <div>
          <h2 className="text-lg font-medium mb-3">Changes to This Policy</h2>
          <p className="text-neutral-600 leading-relaxed">
            We may update this Privacy Policy from time to time. We will post the revised policy on this
            website and update the "Last updated" date. We will provide notice as required by applicable law.
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="text-lg font-medium mb-3">Contact Us</h2>
          <p className="text-neutral-600 leading-relaxed">
            If you have any questions about this Privacy Policy or would like to exercise any of your rights,
            please contact us using our{" "}
            <Link href="/contact" className="underline hover:text-black transition-colors">
              contact form
            </Link>
          </p>
        </div>

      </div>
    </main>
  );
}