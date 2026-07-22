// 'use client';
// import { useEffect, useRef } from 'react';
// import { usePathname, useSearchParams } from 'next/navigation';

// export default function PageViewTracker() {
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const isFirst = useRef(true);

//   useEffect(() => {
//     if (typeof window === 'undefined') return;
//     if (isFirst.current) { isFirst.current = false; return; } // snippets fired initial PV
//     const w = window as any;
//     if (w.ttq) w.ttq.page();
//     if (w.fbq) w.fbq('track', 'PageView');
//   }, [pathname, searchParams]);

//   return null;
// }