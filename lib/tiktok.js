// ============================================================================
// tiktok.js
// Client-side TikTok event tracking. Fires the browser pixel + posts the same
// event server-side with a shared eventId for deduplication.
//
// Imports the shared identifier helpers from meta-pixel.js so both pixels use
// the SAME anon ID (xlp_anon_id) and the same cookie reader — this is what
// keeps external_id matching consistent across Meta and TikTok.
// ============================================================================

import { getAnonId, getCookie } from './meta-pixel';

export function trackTikTokEvent(eventName, customData = {}, { email, phone, customerId } = {}) {
    if (typeof window === 'undefined') return;

    const eventId = crypto.randomUUID();
    const eventTime = Math.floor(Date.now() / 1000); // shared by browser + server
    const anonId = getAnonId();

    const ttp = getCookie('_ttp');
    const ttclid =
        getCookie('ttclid') ||
        new URLSearchParams(window.location.search).get('ttclid') ||
        undefined;

    // 1. Browser side (Pixel)
    // event_id goes in the THIRD arg (options), NOT inside the properties object,
    // or TikTok won't dedup against the server event and counts it twice.
    if (window.ttq) {
        window.ttq.track(eventName, customData, { event_id: eventId });
    }

    // 2. Server side (Events API route)
    fetch('/api/tiktok-capi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            eventName,
            eventId,
            eventTime,
            customData,
            eventSourceUrl: window.location.href,
            clientUserAgent: window.navigator.userAgent,
             testEventCode: 'TEST95190',
            ttp,
            ttclid,
            email: email || null,
            phone: phone || null,
            // Same raw value Meta sends (customerId when known, else the shared
            // anon id). Route hashes it — send raw.
            externalId: customerId || anonId,
        }),
    }).catch((err) => console.error('TikTok CAPI Fetch Error:', err));
}