import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message, token } = await req.json();

    const captchaVerify = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      }
    );

    const captchaData = await captchaVerify.json();

    if (!captchaData.success) {
      return NextResponse.json({ error: "Captcha failed" }, { status: 400 });
    }

    await resend.emails.send({
      from: "contact@xiliphi.com",
      to: "support@xiliphi.com",
      subject: "New Website Contact Message",
      html: `
        <h3>New Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}