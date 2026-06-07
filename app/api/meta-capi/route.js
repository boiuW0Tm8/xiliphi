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
            testEventCode,
            fbp,
            fbc,
            email,
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
        if (customerId) externalIds.push(hash(String(customerId)));
        if (anonId) externalIds.push(hash(String(anonId)));

        const userData = {
            em: email && email.trim() ? [hash(email)] : undefined,
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
                        event_time: Math.floor(Date.now() / 1000),
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

        if (metaData.errors || metaData.warnings) {
            console.warn("Meta CAPI Warning/Error:", JSON.stringify(metaData, null, 2));
        }

        return Response.json(metaData);
    } catch (error) {
        console.error("CAPI Route Error:", error);
        return Response.json({ error: 'Failed to send event' }, { status: 500 });
    }
}