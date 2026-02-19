import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Using the provided Resend API key directly as requested
const resend = new Resend('re_FVkLHrvF_EmqeAC3r4KNhYsRmyzBuQpDq');

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'ram.surat.web@gmail.com',
      subject: `New portfolio message: ${subject}`,
      reply_to: email,
      html: `
        <p>New message from your portfolio contact form:</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending contact email:', error);
    return NextResponse.json(
      { error: 'Something went wrong while sending your message. Please try again later.' },
      { status: 500 }
    );
  }
}

