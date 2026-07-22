// // ============================================================================
// // meta-pixel.js
// // Client-side event tracking for Meta (and a parallel TikTok send).
// // Fires the browser pixel + posts the same event server-side with a shared
// // eventId for deduplication.
// // ============================================================================

// // ----------------------------------------------------------------------------
// // Cookie helpers
// // ----------------------------------------------------------------------------
// export function getCookie(name) {
//     if (typeof document === 'undefined') return null;
//     const m = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
//     return m ? m[2] : null;
// }

// function setCookie(name, value, maxAgeSeconds) {
//     if (typeof document === 'undefined') return;
//     document.cookie = `${name}=${value};path=/;max-age=${maxAgeSeconds};SameSite=Lax`;
// }

// // ----------------------------------------------------------------------------
// // Landing capture — run ONCE on first load, before any event fires.
// // Call captureClickIds() from a top-level useEffect in your root layout.
// //
// // Why: fbclid / ttclid are only in the URL on the ad-click landing. They're
// // gone by the time the user hits AddToCart or Purchase, so we persist them to
// // cookies (90 days) the moment they land, and read them back on every event.
// // ----------------------------------------------------------------------------
// const NINETY_DAYS = 90 * 24 * 60 * 60;

// export function captureClickIds() {
//     if (typeof window === 'undefined') return;
//     const params = new URLSearchParams(window.location.search);

//     // Meta: build _fbc in Meta's required format fb.1.{ts}.{fbclid}
//     const fbclid = params.get('fbclid');
//     if (fbclid && !getCookie('_fbc')) {
//         setCookie('_fbc', `fb.1.${Date.now()}.${fbclid}`, NINETY_DAYS);
//     }

//     // TikTok: store the raw ttclid
//     const ttclid = params.get('ttclid');
//     if (ttclid && !getCookie('ttclid')) {
//         setCookie('ttclid', ttclid, NINETY_DAYS);
//     }
// }

// // ----------------------------------------------------------------------------
// // Identifiers
// // ----------------------------------------------------------------------------

// // Read _fbp. Prefer the REAL value set by Meta's fbevents.js pixel.
// // On a fresh load our code can run before the pixel initializes, so we poll
// // briefly (up to ~1s) to let Meta set the genuine cookie. Only if it's still
// // absent do we fabricate one — and a fabricated _fbp carries no cross-session
// // matching weight, so we want that to be the rare exception, not the default.
// // The poll only adds latency when _fbp is actually missing.
// async function getOrCreateFbp() {
//     if (typeof document === 'undefined') return null;
//     let fbp = getCookie('_fbp');
//     if (fbp) { console.log('[fbp] existing:', fbp); return fbp; }

//     for (let i = 0; i < 10; i++) {
//         await new Promise(r => setTimeout(r, 100));
//         fbp = getCookie('_fbp');
//         if (fbp) { console.log('[fbp] meta set it after', (i + 1) * 100, 'ms:', fbp); return fbp; }
//     }

//     const rand = Math.floor(Math.random() * 1e16) + Date.now();
//     fbp = `fb.1.${Date.now()}.99${rand}`;
//     setCookie('_fbp', fbp, NINETY_DAYS);
//     console.log('[fbp] FABRICATED after full poll:', fbp);
//     return fbp;
// }

// // Persistent anonymous ID for external_id matching across all traffic
// // (covers logged-out visitors, which is most of ViewContent).
// // Returns the RAW UUID — the server routes hash it. Do not hash here.
// export function getAnonId() {
//     if (typeof window === 'undefined') return null;
//     let id = localStorage.getItem('xlp_anon_id');
//     if (!id) {
//         id = crypto.randomUUID();
//         localStorage.setItem('xlp_anon_id', id);
//     }
//     return id;
// }

// // ----------------------------------------------------------------------------
// // trackEvent — fires browser pixel + server CAPI with a shared eventId.
// // Pass { email, phone, customerId } when you have them (checkout, login, popup).
// // Send RAW values — the server routes hash everything.
// //
// // NOTE: now async because getOrCreateFbp() may briefly await Meta's pixel.
// // Fire-and-forget callers (e.g. ViewContent on mount) can still call this
// // without awaiting — it resolves on its own. Only await where ordering matters.
// // ----------------------------------------------------------------------------
// export async function trackEvent(eventName, customData = {}, { email, phone, customerId } = {}) {
//     if (typeof window === 'undefined') return;

//     const eventId = crypto.randomUUID();
//     const eventTime = Math.floor(Date.now() / 1000); // shared by browser + server
//     const fbp = await getOrCreateFbp();
//     const anonId = getAnonId();

//     // 1. Browser side (Pixel)
//     if (window.fbq) {
//         window.fbq('track', eventName, customData, { eventID: eventId });
//     }

//     // 2. Server side (Meta CAPI route)
//     fetch('/api/meta-capi', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             eventName,
//             eventId,
//             eventTime,
//             customData,
//             eventSourceUrl: window.location.href,
//             clientUserAgent: window.navigator.userAgent,
//             // testEventCode: 'TEST79065',
//             fbp,
//             fbc: getCookie('_fbc'),
//             email: email || null,
//             phone: phone || null,
//             customerId: customerId || null,
//             anonId,
//         }),
//     }).catch(err => console.error('Meta CAPI Fetch Error:', err));
// }

// // ----------------------------------------------------------------------------
// // trackTikTokEvent — parallel send to your TikTok Events API route.
// // Reuses the SAME anonId so external_id matches across pixels.
// // Fire alongside trackEvent (or fold into it) for events you want on both.
// // ----------------------------------------------------------------------------
// export function trackTikTokEvent(eventName, customData = {}, { email, phone, customerId } = {}) {
//     if (typeof window === 'undefined') return;

//     const eventId = crypto.randomUUID();
//     const eventTime = Math.floor(Date.now() / 1000);
//     const anonId = getAnonId();

//     // 1. Browser side (TikTok pixel)
//     if (window.ttq) {
//         window.ttq.track(eventName, customData, { event_id: eventId });
//     }

//     // 2. Server side (TikTok Events API route)
//     fetch('/api/tiktok-events', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             eventName,
//             eventId,
//             eventTime,
//             customData,
//             eventSourceUrl: window.location.href,
//             clientUserAgent: window.navigator.userAgent,
//             // testEventCode: 'TEST79065',
//             ttclid: getCookie('ttclid'),
//             ttp: getCookie('_ttp'),
//             email: email || null,
//             phone: phone || null,
//             externalId: customerId || anonId, // raw; route hashes it
//         }),
//     }).catch(err => console.error('TikTok CAPI Fetch Error:', err));
// }