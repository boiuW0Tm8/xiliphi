export function trackEvent(eventName, customData = {}, { email, customerId } = {}) {
    // Guard clause: Ensure this only executes in the browser
    if (typeof window === 'undefined') return;

    const eventId = crypto.randomUUID();

    // 1. Browser side (Pixel)
    if (window.fbq) {
        window.fbq('track', eventName, customData, { eventID: eventId });
    }

    // 2. Server side (CAPI route)
    fetch('/api/meta-capi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            eventName,
            eventId,
            customData,
            eventSourceUrl: window.location.href,
            clientUserAgent: window.navigator.userAgent, // Crucial for anonymous server matching
            fbp: getCookie('_fbp'),
            fbc: getCookie('_fbc'),
            email: email || null,
            customerId: customerId || null,
        }),
    }).catch(err => console.error("CAPI Fetch Error:", err));
}

function getCookie(name) {
    if (typeof document === 'undefined') return null;
    const m = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return m ? m[2] : null;
}