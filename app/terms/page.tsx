import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Xiliphi",
  description: "Review Xiliphi's terms of service covering purchases, shipping, returns, and use of our website.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-medium mb-4 tracking-wide">
        Terms of Service
      </h1>
      <p className="text-sm text-neutral-400 mb-16">Last updated: March 9, 2026</p>

      <div className="space-y-12 text-neutral-800">

        {/* OVERVIEW */}
        <div>
          <p className="text-neutral-600 leading-relaxed mb-4">
            Welcome to Xiliphi. The terms &quot;we&quot;, &quot;us&quot; and &quot;our&quot; refer to Xiliphi. Xiliphi operates this store
            and website, including all related information, content, features, tools, products and services in order
            to provide you, the customer, with a curated shopping experience (the &quot;Services&quot;). Xiliphi is powered
            by Shopify, which enables us to provide the Services to you.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            Please read these Terms of Service carefully, as they include important information about your legal
            rights and cover areas such as warranty disclaimers and limitations of liability. By visiting,
            interacting with or using our Services, you agree to be bound by these Terms of Service and our{" "}
            <Link href="/privacy" className="underline hover:text-black transition-colors">Privacy Policy</Link>.
            If you do not agree to these terms, you should not use or access our Services.
          </p>
        </div>

        {/* SECTION 1 */}
        <div>
          <h2 className="text-lg font-medium mb-3">Section 1 — Access and Account</h2>
          <p className="text-neutral-600 leading-relaxed mb-3">
            By agreeing to these Terms of Service, you represent that you are at least the age of majority in your
            province or territory of residence, or that you have given us your consent to allow any of your minor
            dependents to use the Services on devices you own, purchase or manage.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            You are solely responsible for maintaining the security of your account credentials and for all of your
            account activity. You may not transfer, sell, assign, or license your account to any other person. You
            represent and warrant that all information you provide is correct, current and complete.
          </p>
        </div>

        {/* SECTION 2 */}
        <div>
          <h2 className="text-lg font-medium mb-3">Section 2 — Our Products</h2>
          <p className="text-neutral-600 leading-relaxed mb-3">
            We strive to ensure that product descriptions, pricing, and images are accurate. However, colors or
            product appearance may differ from how they appear on your screen due to your device settings.
            We do not warrant that the quality of any products will meet your expectations or be the same as
            depicted in our store.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            All product descriptions are subject to change at any time without notice. We reserve the right to
            discontinue any product at any time and may limit quantities offered to any person, geographic region,
            or jurisdiction.
          </p>
        </div>

        {/* SECTION 3 */}
        <div>
          <h2 className="text-lg font-medium mb-3">Section 3 — Orders</h2>
          <p className="text-neutral-600 leading-relaxed mb-3">
            When you place an order, you are making an offer to purchase. Xiliphi reserves the right to accept or
            decline your order for any reason. Your order is not accepted until Xiliphi confirms acceptance and
            processes your payment. Please review your order carefully before submitting, as we may be unable to
            accommodate cancellation requests after acceptance.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            Your purchases are subject to return or exchange solely in accordance with our{" "}
            <Link href="/returns" className="underline hover:text-black transition-colors">Returns Policy</Link>.
            Purchases are for personal or household use only and not for commercial resale or export.
          </p>
        </div>

        {/* SECTION 4 */}
        <div>
          <h2 className="text-lg font-medium mb-3">Section 4 — Pricing & Payments</h2>
          <p className="text-neutral-600 leading-relaxed mb-3">
            All prices are listed in Canadian dollars unless otherwise stated. Prices, discounts and promotions are
            subject to change without notice. The price charged will be the price in effect at the time the order
            is placed, as set out in your order confirmation email. Unless otherwise stated, prices do not include
            taxes, shipping, handling, or customs charges.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            You represent and warrant that the payment information you provide is true, correct, and complete, and
            that you are authorized to use the payment method provided.
          </p>
        </div>

        {/* SECTION 5 */}
        <div>
          <h2 className="text-lg font-medium mb-3">Section 5 — Shipping & Delivery</h2>
          <p className="text-neutral-600 leading-relaxed">
            Shipping times are estimates only and are not guaranteed. We are not liable for delays caused by
            shipping carriers, customs processing, or events outside our control. Once we transfer products to
            the carrier, title and risk of loss passes to you.
          </p>
        </div>

        {/* SECTION 6 */}
        <div>
          <h2 className="text-lg font-medium mb-3">Section 6 — Product Use & Allergies</h2>
          <p className="text-neutral-600 leading-relaxed">
            Our products are intended for external cosmetic use only. Customers are responsible for reviewing
            ingredient lists and performing patch tests prior to use. Discontinue use if irritation occurs.
            Xiliphi is not responsible for adverse reactions due to individual sensitivities.
          </p>
        </div>

        {/* SECTION 7 */}
        <div>
          <h2 className="text-lg font-medium mb-3">Section 7 — Intellectual Property</h2>
          <p className="text-neutral-600 leading-relaxed mb-3">
            All original content on this website, including branding, text, design, layout, images, graphics,
            and product descriptions, is the property of Xiliphi and is protected by applicable intellectual
            property laws. You may not copy, reproduce, distribute, or create derivative works without our prior
            written consent. Certain images or media may be used under appropriate licenses or open-source terms.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            Xiliphi&apos;s names, logos, and slogans are trademarks of Xiliphi and may not be used without prior
            written permission. Shopify&apos;s name and trademarks are the property of Shopify Inc.
          </p>
        </div>

        {/* SECTION 8 */}
        <div>
          <h2 className="text-lg font-medium mb-3">Section 8 — Third-Party Links & Tools</h2>
          <p className="text-neutral-600 leading-relaxed">
            The Services may contain links to third-party websites or provide access to third-party tools. 
            We use third-party services including Klaviyo for email marketing and Judge.me for product reviews. 
            Use of these services is subject to their respective terms and privacy policies. We are not responsible 
            for the content, accuracy, or practices of any third-party sites or tools. Your use of third-party 
            services is at your own risk and subject to their respective terms and policies. 
          </p>
        </div>

        {/* SECTION 9 */}
        <div>
          <h2 className="text-lg font-medium mb-3">Section 9 — Relationship with Shopify</h2>
          <p className="text-neutral-600 leading-relaxed">
            Xiliphi is powered by Shopify, which enables us to provide the Services to you. However, any sales
            and purchases you make are made directly with Xiliphi. By using the Services, you acknowledge and
            agree that Shopify is not responsible for any aspect of any sales between you and Xiliphi, including
            any injury, damage, or loss resulting from purchased products and services. You expressly release
            Shopify and its affiliates from all claims arising from your transactions with Xiliphi.
          </p>
        </div>

        {/* SECTION 10 */}
        <div>
          <h2 className="text-lg font-medium mb-3">Section 10 — Privacy Policy</h2>
          <p className="text-neutral-600 leading-relaxed">
            All personal information we collect through the Services is subject to our{" "}
            <Link href="/privacy" className="underline hover:text-black transition-colors">Privacy Policy</Link>.
            Certain personal information may also be subject to{" "}
            <a href="https://www.shopify.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-black transition-colors">
              Shopify&apos;s Privacy Policy
            </a>.
            By using the Services, you acknowledge that you have read these privacy policies.
          </p>
        </div>

        {/* SECTION 11 */}
        <div>
          <h2 className="text-lg font-medium mb-3">Section 11 — Feedback</h2>
          <p className="text-neutral-600 leading-relaxed">
            If you submit feedback, reviews, or other content to us, you grant Xiliphi a perpetual, worldwide,
            royalty-free license to use, reproduce, modify, and distribute such content for any purpose, including
            to operate and improve the Services. You represent that you own or have all necessary rights to any
            feedback you submit, and that it does not violate any third-party rights.
          </p>
        </div>

        {/* SECTION 12 */}
        <div>
          <h2 className="text-lg font-medium mb-3">Section 12 — Errors, Inaccuracies and Omissions</h2>
          <p className="text-neutral-600 leading-relaxed">
            Occasionally there may be information on or in the Services that contains typographical errors,
            inaccuracies, or omissions relating to product descriptions, pricing, promotions, shipping charges,
            or availability. We reserve the right to correct any errors or omissions and to change or update
            information at any time without prior notice.
          </p>
        </div>

        {/* SECTION 13 */}
        <div>
          <h2 className="text-lg font-medium mb-3">Section 13 — Prohibited Uses</h2>
          <p className="text-neutral-600 leading-relaxed">
            You may access and use the Services for lawful purposes only. You may not use the Services for any
            unlawful purpose, to infringe intellectual property rights, to harass or harm others, to transmit
            false or misleading information, to send spam, to impersonate any person or entity, or to interfere
            with the security or operation of the Services. We reserve the right to terminate your access at any
            time for violations of these Terms.
          </p>
        </div>

        {/* SECTION 14 */}
        <div>
          <h2 className="text-lg font-medium mb-3">Section 14 — Disclaimer of Warranties</h2>
          <p className="text-neutral-600 leading-relaxed mb-3">
            The Services and all products offered through the Services are provided &quot;as is&quot; and &quot;as available&quot;
            without any representation, warranties, or conditions of any kind, either express or implied,
            including implied warranties of merchantability, fitness for a particular purpose, durability, title,
            and non-infringement.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            We do not guarantee that your use of the Services will be uninterrupted, timely, secure, or
            error-free. Some jurisdictions do not allow the disclaimer of implied warranties, so the above
            may not apply to you.
          </p>
        </div>

        {/* SECTION 15 */}
        <div>
          <h2 className="text-lg font-medium mb-3">Section 15 — Limitation of Liability</h2>
          <p className="text-neutral-600 leading-relaxed">
            To the fullest extent permitted by law, Xiliphi, our partners, directors, officers, employees,
            affiliates, agents, contractors, service providers, or licensors shall not be liable for any
            injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential
            damages of any kind arising from your use of the Services or any products procured through the
            Services. Our products are intended for external cosmetic use only.
          </p>
        </div>

        {/* SECTION 16 */}
        <div>
          <h2 className="text-lg font-medium mb-3">Section 16 — Indemnification</h2>
          <p className="text-neutral-600 leading-relaxed">
            You agree to indemnify, defend and hold harmless Xiliphi, Shopify, and our affiliates, partners,
            officers, directors, employees, agents, contractors, licensors, and service providers from any
            losses, damages, liabilities, or claims, including reasonable attorneys&apos; fees, arising out of your
            breach of these Terms, your violation of any law or third-party rights, or your access to and use
            of the Services.
          </p>
        </div>

        {/* SECTION 17 */}
        <div>
          <h2 className="text-lg font-medium mb-3">Section 17 — Governing Law</h2>
          <p className="text-neutral-600 leading-relaxed">
            These Terms of Service shall be governed by and construed in accordance with the laws of the
            province of Ontario and the federal laws of Canada applicable therein. You and Xiliphi consent
            to the exclusive jurisdiction of the courts located in Ontario, Canada.
          </p>
        </div>

        {/* SECTION 18 */}
        <div>
          <h2 className="text-lg font-medium mb-3">Section 18 — Severability</h2>
          <p className="text-neutral-600 leading-relaxed">
            If any provision of these Terms of Service is determined to be unlawful, void, or unenforceable,
            that provision shall be enforced to the fullest extent permitted by applicable law, and the
            unenforceable portion shall be severed from these Terms without affecting the validity of any
            other remaining provisions.
          </p>
        </div>

        {/* SECTION 19 */}
        <div>
          <h2 className="text-lg font-medium mb-3">Section 19 — Changes to These Terms</h2>
          <p className="text-neutral-600 leading-relaxed">
            We reserve the right to update these Terms of Service at any time by posting changes to this page.
            We will notify you of any material changes as required by applicable law. Your continued use of the
            Services following any changes constitutes acceptance of those updates.
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="text-lg font-medium mb-3">Contact</h2>
          <p className="text-neutral-600 leading-relaxed">
            If you have any questions regarding these Terms of Service, please contact us using our{" "}
            <Link href="/contact" className="underline hover:text-black transition-colors">
              contact form
            </Link>{" "}
          </p>
        </div>

      </div>
    </main>
  );
}