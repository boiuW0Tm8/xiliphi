import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/products/cart",
        destination: "/products",
        permanent: false,
      },
      {
        source: "/cart",
        destination: "/products",
        permanent: false,
      },
    ];
  },
  experimental: {
    scrollRestoration: true,
  },
};

export default nextConfig;