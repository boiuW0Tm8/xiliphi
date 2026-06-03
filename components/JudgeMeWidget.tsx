"use client";

export default function JudgeMeWidget({
  productId,
  productTitle,
}: {
  productId: string;
  productTitle: string;
}) {
  const numericId = productId.replace("gid://shopify/Product/", "");

  return (
    <div
      className="jdgm-widget jdgm-review-widget jdgm-outside-widget"
      data-id={numericId}
      data-product-title={productTitle}
    />
  );
}