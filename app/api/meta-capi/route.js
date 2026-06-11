import crypto from 'crypto';

// --- Shared hashing helpers (identical to the TikTok route) ---
// Keep these in sync across both routes so the same anon visitor produces the
// same external_id hash on Meta and TikTok — that's what lets you match your
// own traffic across pixels.

// Email: lowercase + trim, then SHA-256
const hashEmail = (v) =>
    v ? crypto.createHash('sha256').update(v.trim().toLowerCase()).digest('hex') : undefined;

// Phone: normalize to E.164-ish (digits + leading +), then SHA-256.
// NOTE: ensure country code is present upstream. If checkout stores bare
// 10-digit numbers, prepend '+1' before this runs.
const hashPhone = (v) => {
    if (!v) return undefined;
    const e164 = v.replace(/[^\d+]/g, ''); // keep digits and +, strip spaces/dashes/parens
    return e164 ? crypto.createHash('sha256').update(e164).digest('hex') : undefined;
};

// IDs (external_id / customerId / anonId): hashed here, so send RAW from client.
// Do NOT pre-hash in getAnonId() or you'll double-hash and never match.
const hashId = (v) =>
    v ? crypto.createHash('sha256').update(String(v).trim().toLowerCase()).digest('hex') : undefined;

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
            testEventCode,
            fbp,
            fbc,
            email,
            phone,
            customerId,
            anonId,
        } = body;

        // Grab IP carefully on Vercel
        const clientIp =
            req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
            req.headers.get('x-real-ip') ||
            undefined;

        // Use client-passed user agent first, fall back to header if necessary
        const userAgent = clientUserAgent || req.headers.get('user-agent') || undefined;

        // external_id accepts an array; Meta matches on any value.
        // anonId covers logged-out traffic, customerId adds logged-in users on top.
        const externalIds = [];
        if (customerId) externalIds.push(hashId(customerId));
        if (anonId) externalIds.push(hashId(anonId));

        const userData = {
            em: email && email.trim() ? [hashEmail(email)] : undefined,
            ph: phone && phone.trim() ? [hashPhone(phone)] : undefined,
            fbp: fbp || undefined,
            fbc: fbc || undefined,
            client_ip_address: clientIp,
            client_user_agent: userAgent,
            external_id: externalIds.length ? externalIds : undefined,
        };

        // Thoroughly clean up undefined keys so they don't get sent to Meta
        Object.keys(userData).forEach((k) => userData[k] === undefined && delete userData[k]);

        const res = await fetch(
            `https://graph.facebook.com/v21.0/${process.env.NEXT_PUBLIC_META_PIXEL_ID}/events?access_token=${process.env.META_ACCESS_TOKEN}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    data: [{
                        event_name: eventName,
                        // Prefer client event time so server/browser events dedup
                        // cleanly on event_id with matching-ish timestamps.
                        event_time: eventTime || Math.floor(Date.now() / 1000),
                        event_id: eventId,
                        action_source: 'website',
                        event_source_url: eventSourceUrl,
                        user_data: userData,
                        custom_data: customData,
                    }],
                    ...(testEventCode ? { test_event_code: testEventCode } : {})
                }),
            }
        );

        const metaData = await res.json();

        // Meta uses singular `error` (object) for hard failures and `errors`/
        // `warnings` for softer issues — catch all three. On success, log
        // events_received to confirm the event actually landed.
        if (metaData.error || metaData.errors || metaData.warnings) {
            console.warn("Meta CAPI Warning/Error:", JSON.stringify(metaData, null, 2));
        } else {
            console.log("Meta CAPI ok, events_received:", metaData.events_received);
        }

        return Response.json(metaData);
    } catch (error) {
        console.error("CAPI Route Error:", error);
        return Response.json({ error: 'Failed to send event' }, { status: 500 });
    }
}