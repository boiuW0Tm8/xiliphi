import crypto from 'crypto';

const hash = (v) =>
  v ? crypto.createHash('sha256').update(v.trim().toLowerCase()).digest('hex') : undefined;

export async function POST(req) {
  try {
    const body = await req.json();
    const { eventName, eventId, customData, eventSourceUrl, fbp, fbc, email, customerId } = body;

    const clientIp =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') || undefined;
    const userAgent = req.headers.get('user-agent') || undefined;

    const userData = {
      em: email ? [hash(email)] : undefined,
      fbp: fbp || undefined,
      fbc: fbc || undefined,
      client_ip_address: clientIp,
      client_user_agent: userAgent,
      external_id: customerId ? [hash(customerId)] : undefined,
    };
    Object.keys(userData).forEach((k) => userData[k] === undefined && delete userData[k]);

    const res = await fetch(
      `https://graph.facebook.com/v19.0/${process.env.NEXT_PUBLIC_META_PIXEL_ID}/events?access_token=${process.env.META_ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: [{
            event_name: eventName,
            event_time: Math.floor(Date.now() / 1000),
            event_id: eventId,
            action_source: 'website',
            event_source_url: eventSourceUrl,
            user_data: userData,
            custom_data: customData,
          }],
          test_event_code: 'TEST57208',
        }),
      }
    );
    return Response.json(await res.json());
  } catch (error) {
    return Response.json({ error: 'Failed to send event' }, { status: 500 });
  }
}