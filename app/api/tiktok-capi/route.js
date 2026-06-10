import crypto from 'crypto';

const hash = (v) =>
  v ? crypto.createHash('sha256').update(v.trim().toLowerCase()).digest('hex') : undefined;

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      eventName,
      eventId,
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
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          user: {
            email: hash(email),
            phone: hash(phone),
            external_id: hash(externalId),
            ttp: ttp || undefined,
            ttclid: ttclid || undefined,
            ip: clientIp,
            user_agent: userAgent,
          },
          properties: customData || {},
          page: { url: eventSourceUrl },
        },
      ],
       test_event_code: 'TEST95249',  // uncomment to route into Test Events tab
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
    return Response.json(data);
  } catch (err) {
    console.error('TikTok CAPI Error:', err);
    return Response.json({ error: 'failed' }, { status: 500 });
  }
}