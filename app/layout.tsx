import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import NavbarClient from "@/components/Navbarclient";
import "./globals.css";
import Link from "next/link";
import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google';
import { FaInstagram, FaTiktok, FaYoutube, FaPinterest } from 'react-icons/fa';
import { Suspense } from 'react';
import PageViewTracker from "@/components/Pageviewtracker";

const xiliphiFont = localFont({
  src: "./fonts/TT Norms Pro Regular.otf",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://xiliphi.com"),
  title: "Xiliphi | Natural Skincare",
  description: "Discover Xiliphi's turmeric-powered skincare, body butters, and lip care — crafted with natural ingredients.",
  openGraph: {
    siteName: "Xiliphi",
    url: "https://xiliphi.com",
    type: "website",
    images: [
      {
        url: "https://xiliphi.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Xiliphi Natural Skincare",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const socialLinks = [
    { icon: <FaInstagram />, href: "https://instagram.com/xiliphi", label: "Instagram" },
    { icon: <FaTiktok />, href: "https://tiktok.com/@xiliphi", label: "TikTok" },
    { icon: <FaYoutube />, href: "https://youtube.com/@xiliphi", label: "YouTube" },
    { icon: <FaPinterest />, href: "https://pinterest.com/xiliphi", label: "Pinterest" },
  ];

  return (
    <html lang="en">
      <body className={`overflow-x-hidden ${xiliphiFont.className}`}>
        <Suspense fallback={null}>
          <PageViewTracker />
        </Suspense>
        <div className="relative overflow-hidden">
          <NavbarClient>
            {children}
          </NavbarClient>
        </div>
        <footer className="bg-black text-white">
          {/* MOBILE — stacked, centered */}
          <div className="md:hidden px-6 py-8 flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm tracking-wide w-fit mx-auto text-center">
              {[
                { label: "Contact", href: "/contact" },
                { label: "FAQ", href: "/faq" },
                { label: "Shipping", href: "/shipping" },
                { label: "Returns", href: "/returns" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map(({ label, href }) => (
                <Link key={href} href={href} className="hover:text-neutral-400 transition-colors">
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex justify-center gap-6 text-xl border-y border-white/10 py-6">
              {socialLinks.map(({ icon, href, label }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="text-neutral-400 hover:text-white transition-colors">
                  {icon}
                </a>
              ))}
            </div>

            <div className="text-sm tracking-wide space-y-2 text-center">
              <p className="font-medium">© {new Date().getFullYear()} Xiliphi</p>
              <p className="text-neutral-400">Based in Toronto, Canada</p>
            </div>
          </div>

          {/* DESKTOP — unchanged from your original */}
          <div className="hidden md:flex max-w-6xl mx-auto px-6 py-6 flex-row justify-between items-center">
            <div className="text-sm tracking-wide space-y-2">
              <p className="font-medium">© {new Date().getFullYear()} Xiliphi</p>
              <p className="text-neutral-400">Based in Toronto, Canada</p>
            </div>
            <div className="flex flex-col items-end gap-5">
              <div className="flex flex-wrap gap-6 text-sm tracking-wide">
                {[
                  { label: "Contact", href: "/contact" },
                  { label: "FAQ", href: "/faq" },
                  { label: "Shipping", href: "/shipping" },
                  { label: "Returns", href: "/returns" },
                  { label: "Privacy Policy", href: "/privacy" },
                  { label: "Terms of Service", href: "/terms" },
                ].map(({ label, href }) => (
                  <Link key={href} href={href} className="hover:text-neutral-400 transition-colors">
                    {label}
                  </Link>
                ))}
              </div>
              <div className="flex gap-6 text-xl">
                {socialLinks.map(({ icon, href, label }) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="text-neutral-400 hover:text-white transition-colors">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
        <SpeedInsights />
        <Script
          src={`https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${process.env.NEXT_PUBLIC_KLAVIYO_API_KEY}`}
          strategy="afterInteractive"
        />
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];
              ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];
              ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
              for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
              ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};
              ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var s=document.createElement("script");s.type="text/javascript",s.async=!0,s.src=r+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(s,a)};
              ttq.load('${process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID}');
              ttq.page();
            }(window, document, 'ttq');
          `}
        </Script>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
      </body>
    </html>
  );
}