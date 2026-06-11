import crypto from 'crypto';

// Email: lowercase + trim, then SHA-256
const hashEmail = (v) =>
  v ? crypto.createHash('sha256').update(v.trim().toLowerCase()).digest('hex') : undefined;

// Phone: normalize to E.164-ish (digits + leading +), then SHA-256.
// NOTE: ensure country code is present upstream. If your checkout stores bare
// 10-digit numbers, prepend '+1' before this runs.
const hashPhone = (v) => {
  if (!v) return undefined;
  const e164 = v.replace(/[^\d+]/g, ''); // keep digits and +, strip spaces/dashes/parens
  return e164 ? crypto.createHash('sha256').update(e164).digest('hex') : undefined;
};

// External ID: hashed here, so send the RAW anon id from the client.
// Do NOT pre-hash in getAnonId() or you'll double-hash and never match.
const hashId = (v) =>
  v ? crypto.createHash('sha256').update(v.trim().toLowerCase()).digest('hex') : undefined;

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      eventName,
      eventId,
      eventTime, // client-captured unix seconds (when trackEvent fired)
      customData,
      eventSourceUrl,
      clientUserAgent,
      ttclid,
      ttp,
      email,
      phone,
      externalId,
    } = body;

    const clientIp =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      undefined;

    const userAgent = clientUserAgent || req.headers.get('user-agent') || undefined;

    const payload = {
      event_source: 'web',
      event_source_id: process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID,
      data: [
        {
          event: eventName,
          // Prefer client event time; TikTok rejects events older than ~10 min,
          // so accurate timing also protects against silent drops.
          event_time: eventTime || Math.floor(Date.now() / 1000),
          event_id: eventId,
          user: {
            email: hashEmail(email),
            phone: hashPhone(phone),
            external_id: hashId(externalId),
            ttp: ttp || undefined,
            ttclid: ttclid || undefined,
            ip: clientIp,
            user_agent: userAgent,
          },
          properties: customData || {},
          page: { url: eventSourceUrl },
        },
      ],
      // test_event_code: 'TEST95249', // uncomment to route into Test Events tab
    };

    const res = await fetch('https://business-api.tiktok.com/open_api/v1.3/event/track/', {
      method: 'POST',
      headers: {
        'Access-Token': process.env.TIKTOK_ACCESS_TOKEN,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    // TikTok returns code: 0 on success. Anything else means the event was
    // rejected even though the HTTP status is 200 — log it while debugging.
    if (data.code !== 0) {
      console.error('TikTok rejected event:', data.code, data.message, data.data);
    }

    return Response.json(data);
  } catch (err) {
    console.error('TikTok CAPI Error:', err);
    return Response.json({ error: 'failed' }, { status: 500 });
  }
}