"use client";

export default function JudgeMeWidget({
  productId,
  productTitle,
  productUrl,
}: {
  productId: string;
  productTitle: string;
  productUrl: string;
}) {
  const numericId = productId.replace("gid://shopify/Product/", "");

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.jdgm = window.jdgm || {};
            window.jdgm.SHOP_DOMAIN = 'wvpuwf-1k.myshopify.com';
            window.jdgm.PLATFORM = 'shopify';
            window.jdgm.PUBLIC_TOKEN = '3sXR0VYZiI5NoLrW0W535ZaeWzo';
            window.jdgmSettings = window.jdgm;
          `,
        }}
      />
      <script
        async
        src="https://cdnwidget.judge.me/widget_preloader.js"
      />
      <div
        className="jdgm-widget jdgm-review-widget jdgm-outside-widget"
        data-id={numericId}
        data-url={productUrl}
        data-product-title={productTitle}
      />
    </>
  );
}