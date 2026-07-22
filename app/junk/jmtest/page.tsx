import Script from "next/script";

export default function JmTest() {
  return (
    <>
      <Script id="jdgm-test-config" strategy="beforeInteractive">
        {`
          jdgm = window.jdgm || {};
          jdgm.SHOP_DOMAIN = 'wvpuwf-1k.myshopify.com';
          jdgm.PLATFORM = 'shopify';
          jdgm.PUBLIC_TOKEN = '3sXR0VYZiI5NoLrW0W535ZaeWzo';
        `}
      </Script>
      <Script
        id="jdgm-test-preloader"
        src="https://cdnwidget.judge.me/widget_preloader.js"
        strategy="afterInteractive"
      />

      <h1>JM badge test</h1>
      <div className="jdgm-widget jdgm-preview-badge" data-id="8102122225727"></div>
    </>
  );
}