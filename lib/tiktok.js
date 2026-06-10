export function trackTikTokEvent(eventName, customData = {}, { email, phone, externalId } = {}) {
  if (typeof window === 'undefined') return;

  const eventId = crypto.randomUUID();
  const ttp = getCookie('_ttp');
  const ttclid = getCookie('ttclid') || new URLSearchParams(window.location.search).get('ttclid');

  // 1. Browser side (Pixel)
  if (window.ttq) {
    window.ttq.track(eventName, { ...customData, event_id: eventId });
  }

  // 2. Server side (Events API route)
  fetch('/api/tiktok-capi', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      eventName,
      eventId,
      customData,
      eventSourceUrl: window.location.href,
      clientUserAgent: window.navigator.userAgent,
      ttp,
      ttclid,
      email: email || null,
      phone: phone || null,
      externalId: externalId || null,
    }),
  }).catch((err) => console.error('TikTok CAPI Fetch Error:', err));
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : undefined;
}