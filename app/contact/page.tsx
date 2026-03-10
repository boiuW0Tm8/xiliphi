import type { Metadata } from "next";
import ContactPage from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact | Xiliphi",
  description: "Get in touch with Xiliphi — we're happy to help with any questions about our products or orders.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Contact() {
  return <ContactPage />;
}