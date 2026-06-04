export function trackEvent(eventName, customData = {}, { email, customerId } = {}) {
  const eventId = crypto.randomUUID();

  // Browser side (Pixel) — fires with eventID
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, customData, { eventID: eventId });
  }

  // Server side (your CAPI route) — fires with the SAME eventId
  fetch('/api/meta-capi', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      eventName,
      eventId,
      customData,
      eventSourceUrl: window.location.href,
      fbp: getCookie('_fbp'),
      fbc: getCookie('_fbc'),
      email: email || null,
      customerId: customerId || null,
    }),
  });
}

function getCookie(name) {
  const m = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return m ? m[2] : null;
}