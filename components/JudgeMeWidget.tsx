"use client";

import { useEffect } from "react";

export default function JudgeMeBadge({ productId }: { productId: string }) {
  const numericId = productId.replace("gid://shopify/Product/", "");

  useEffect(() => {
    const s = document.createElement("script");
    s.src = `https://cdnwidget.judge.me/widget_preloader.js?_=${Date.now()}`;
    s.async = true;
    s.setAttribute("data-cfasync", "false");
    document.body.appendChild(s);
    return () => {
      s.remove();
    };
  }, [numericId]);

  return <div className="jdgm-widget jdgm-preview-badge" data-id={numericId} />;
}