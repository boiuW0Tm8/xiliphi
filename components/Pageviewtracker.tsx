'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const w = window as any;
    if (w.ttq) w.ttq.page();
    if (w.fbq) w.fbq('track', 'PageView');
  }, [pathname, searchParams]);

  return null;
}