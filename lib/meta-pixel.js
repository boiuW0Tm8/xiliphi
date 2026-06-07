export function trackEvent(eventName, customData = {}, { email, customerId } = {}) {
    if (typeof window === 'undefined') return;

    const eventId = crypto.randomUUID();
    const fbp = getOrCreateFbp();
    const anonId = getAnonId();

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
            clientUserAgent: window.navigator.userAgent,
            //testEventCode: 'TEST84261',
            fbp,
            fbc: getCookie('_fbc'),
            email: email || null,
            customerId: customerId || null,
            anonId,
        }),
    }).catch(err => console.error("CAPI Fetch Error:", err));
}

function getCookie(name) {
    if (typeof document === 'undefined') return null;
    const m = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return m ? m[2] : null;
}

// Read _fbp; if missing, create it in Meta's required format and persist it
// so the browser Pixel and server CAPI agree on the same value.
function getOrCreateFbp() {
    if (typeof document === 'undefined') return null;
    let fbp = getCookie('_fbp');
    if (!fbp) {
        fbp = `fb.1.${Date.now()}.${Math.floor(Math.random() * 1e16)}`;
        document.cookie = `_fbp=${fbp};path=/;max-age=7776000;SameSite=Lax`;
    }
    return fbp;
}

// Persistent anonymous ID for external_id matching across all traffic
// (covers logged-out visitors, which is most of ViewContent).
function getAnonId() {
    if (typeof window === 'undefined') return null;
    let id = localStorage.getItem('xlp_anon_id');
    if (!id) {
        id = crypto.randomUUID();
        localStorage.setItem('xlp_anon_id', id);
    }
    return id;
}