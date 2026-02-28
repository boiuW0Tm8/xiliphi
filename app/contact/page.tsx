"use client";

import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactPage() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    setLoading(true);

    try {
      if (!recaptchaRef.current) {
        setLoading(false);
        return;
      }

      const token = await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset();

      if (!token) {
        setLoading(false);
        return;
      }

      const formData = new FormData(form);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
          token,
        }),
      });

      if (res.ok) {
        setSuccess(true);
        form.reset();

        // 🔥 Auto hide success after 5 seconds
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      }

    } catch (err) {
      console.error("Submit error:", err);
    } finally {
      // ✅ This guarantees button always resets
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-white px-6 py-32 text-neutral-700">
      {/* HEADER */}
      {/* HEADER */}
      <section className="max-w-4xl mx-auto text-center mb-24">
        <h1 className="text-5xl md:text-6xl font-medium text-neutral-900 tracking-tight">
          Contact Us
        </h1>

        <p className="mt-6 text-lg md:text-xl text-neutral-500 font-normal max-w-2xl mx-auto leading-relaxed">
          Questions? We’re happy to help! Send us a message here and we’ll respond as soon as we can.
        </p>
      </section>

      {/* FORM */}
      <section className="max-w-3xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="space-y-8 text-lg font-medium"
        >
          <input
            name="name"
            placeholder="Name*"
            required
            className="w-full border-b border-neutral-300 bg-transparent py-4 outline-none focus:border-neutral-900 transition-colors"
          />

          <input
            name="email"
            type="email"
            placeholder="Email*"
            required
            className="w-full border-b border-neutral-300 bg-transparent py-4 outline-none focus:border-neutral-900 transition-colors"
          />

          <input
            name="phone"
            placeholder="Telephone Number*"
            required
            className="w-full border-b border-neutral-300 bg-transparent py-4 outline-none focus:border-neutral-900 transition-colors"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            className="w-full border-b border-neutral-300 bg-transparent py-4 outline-none focus:border-neutral-900 transition-colors resize-none"
          />

          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            size="invisible"
            ref={recaptchaRef}
            badge="bottomright"
          />

          <button
            disabled={loading}
            className="mt-8 inline-flex items-center gap-2 border border-neutral-900 px-6 py-3 rounded-full text-sm hover:bg-neutral-900 hover:text-white transition-colors"
          >
            {loading ? "Sending..." : "Send →"}
          </button>
        </form>
      </section>

      {/* SUCCESS POPUP */}
      {success && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-neutral-900 text-white px-6 py-3 rounded-full text-sm">
          Message sent successfully ✓
        </div>
      )}
    </main>
  );
}