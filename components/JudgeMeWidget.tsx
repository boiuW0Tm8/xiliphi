"use client";

export default function JudgeMeBadge({ productId }: { productId: string }) {
  const numericId = productId.replace("gid://shopify/Product/", "");
  return <div className="jdgm-widget jdgm-preview-badge" data-id={numericId} />;
}