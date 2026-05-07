import { NextRequest, NextResponse } from 'next/server';
import { createPatientFromForm } from '@/lib/pabau/client';

// Contact form & consultation form submission handler
// Sends email notification to clinic staff + patient confirmation + Pabau sync
//
// REQUIRED: Set RESEND_API_KEY or SENDGRID_API_KEY in environment.
// Without a configured email service, submissions return an error to the user.

const RECIPIENT_EMAIL = process.env.CONTACT_FORM_RECIPIENT || 'AzadehMD@gmail.com';
const SENDER_EMAIL = process.env.EMAIL_FROM || 'noreply@healinque.com';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  concern?: string;
  message?: string;
  howYouHeard?: string;
  formType: 'contact' | 'consultation' | 'newsletter';
}

function buildEmailHtml(data: ContactFormData): string {
  const isConsultation = data.formType === 'consultation';
  const subject = isConsultation ? 'New Consultation Request' : 'New Contact Form Submission';

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Helvetica Neue', Arial, sans-serif; margin: 0; padding: 0; background: #f5f3ef; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; }
        .header { background: #0a1628; padding: 24px; text-align: center; }
        .header h1 { color: #C9A227; font-size: 20px; margin: 0; letter-spacing: 2px; }
        .body { padding: 32px 24px; }
        .label { color: #8b7355; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
        .value { color: #0a1628; font-size: 16px; margin-bottom: 20px; }
        .divider { height: 1px; background: #C9A227; opacity: 0.3; margin: 20px 0; }
        .footer { background: #f5f3ef; padding: 16px 24px; text-align: center; color: #8b7355; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>${subject.toUpperCase()}</h1>
        </div>
        <div class="body">
          <div class="label">Name</div>
          <div class="value">${escapeHtml(data.name)}</div>

          <div class="label">Email</div>
          <div class="value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>

          ${data.phone ? `
          <div class="label">Phone</div>
          <div class="value"><a href="tel:${escapeHtml(data.phone)}">${escapeHtml(data.phone)}</a></div>
          ` : ''}

          ${data.service ? `
          <div class="label">Service Interest</div>
          <div class="value">${escapeHtml(data.service)}</div>
          ` : ''}

          ${data.concern ? `
          <div class="label">Primary Concern</div>
          <div class="value">${escapeHtml(data.concern)}</div>
          ` : ''}

          ${data.howYouHeard ? `
          <div class="label">How They Found Us</div>
          <div class="value">${escapeHtml(data.howYouHeard)}</div>
          ` : ''}

          <div class="divider"></div>

          ${data.message ? `
          <div class="label">Message</div>
          <div class="value" style="white-space: pre-wrap;">${escapeHtml(data.message)}</div>
          ` : '<div class="value" style="color: #8b7355; font-style: italic;">No message provided</div>'}
        </div>
        <div class="footer">
          Healinque &middot; 15644 Pomerado Road, Suite 103, Poway, CA 92064<br/>
          This is an automated notification from the Healinque website.
        </div>
      </div>
    </body>
    </html>
  `;
}

function buildPlainText(data: ContactFormData): string {
  const isConsultation = data.formType === 'consultation';
  const lines = [
    isConsultation ? '=== NEW CONSULTATION REQUEST ===' : '=== NEW CONTACT FORM SUBMISSION ===',
    '',
    `Name: ${data.name}`,
    `Email: ${data.email}`,
  ];

  if (data.phone) lines.push(`Phone: ${data.phone}`);
  if (data.service) lines.push(`Service: ${data.service}`);
  if (data.concern) lines.push(`Concern: ${data.concern}`);
  if (data.howYouHeard) lines.push(`How They Found Us: ${data.howYouHeard}`);

  lines.push('');
  lines.push(`Message: ${data.message || '(none)'}`);
  lines.push('');
  lines.push('---');
  lines.push('Healinque · 15644 Pomerado Road, Suite 103, Poway, CA 92064');

  return lines.join('\n');
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name?.trim()) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }
    if (!data.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }

    const isConsultation = data.formType === 'consultation';
    const subject = isConsultation
      ? `New Consultation Request from ${data.name}`
      : `New Contact Inquiry from ${data.name}`;

    const htmlBody = buildEmailHtml(data);
    const textBody = buildPlainText(data);

    // Strategy 1: Use Resend API if configured
    if (process.env.RESEND_API_KEY) {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: SENDER_EMAIL,
          to: [RECIPIENT_EMAIL],
          reply_to: data.email,
          subject,
          html: htmlBody,
          text: textBody,
        }),
      });

      if (!resendResponse.ok) {
        const err = await resendResponse.text();
        console.error('Resend API error:', err);
        return NextResponse.json(
          { error: 'We had trouble sending your message. Please call or text us at (858) 337-7999.' },
          { status: 500 }
        );
      }

      // Send patient confirmation email (fire-and-forget — don't block on this)
      sendPatientConfirmation(data, 'resend').catch((err) =>
        console.warn('Patient confirmation email failed:', err)
      );

      // Fire-and-forget Pabau sync
      syncToPabau(data).catch(() => {});
      return NextResponse.json({ success: true, method: 'resend' });
    }

    // Strategy 2: Use SendGrid if configured
    if (process.env.SENDGRID_API_KEY) {
      const sgResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: RECIPIENT_EMAIL }] }],
          from: { email: SENDER_EMAIL },
          reply_to: { email: data.email },
          subject,
          content: [
            { type: 'text/plain', value: textBody },
            { type: 'text/html', value: htmlBody },
          ],
        }),
      });

      if (!sgResponse.ok) {
        const err = await sgResponse.text();
        console.error('SendGrid API error:', err);
        return NextResponse.json(
          { error: 'We had trouble sending your message. Please call or text us at (858) 337-7999.' },
          { status: 500 }
        );
      }

      // Send patient confirmation email (fire-and-forget)
      sendPatientConfirmation(data, 'sendgrid').catch((err) =>
        console.warn('Patient confirmation email failed:', err)
      );

      syncToPabau(data).catch(() => {});
      return NextResponse.json({ success: true, method: 'sendgrid' });
    }

    // No email service configured — this is a lead-loss scenario.
    // Return an honest error so the user knows to contact us directly.
    console.error(
      '🚨 CRITICAL: No email service configured (RESEND_API_KEY or SENDGRID_API_KEY). ' +
      'Patient inquiry from ' + data.email + ' was NOT delivered. ' +
      'Configure an email provider immediately.'
    );

    // Still attempt Pabau sync so the lead isn't completely lost
    syncToPabau(data).catch(() => {});

    return NextResponse.json(
      {
        error:
          'Our contact form is temporarily unavailable. ' +
          'Please call or text us directly at (858) 337-7999 or email AzadehMD@gmail.com.',
      },
      { status: 503 }
    );

  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please call us at (858) 337-7999.' },
      { status: 500 }
    );
  }
}

// After email is sent, optionally sync to Pabau (fire-and-forget)
async function syncToPabau(data: ContactFormData): Promise<void> {
  if (data.formType === 'newsletter') return; // Don't create patients from newsletter signups

  try {
    await createPatientFromForm({
      name: data.name,
      email: data.email,
      phone: data.phone,
      concern: data.concern || data.service,
      message: data.message,
    });
  } catch (err) {
    // Non-blocking — log but don't fail the form submission
    console.warn('Pabau sync failed (non-blocking):', err);
  }
}

// Send a confirmation email to the patient so they know their inquiry was received
async function sendPatientConfirmation(
  data: ContactFormData,
  provider: 'resend' | 'sendgrid'
): Promise<void> {
  if (data.formType === 'newsletter') return;

  const firstName = data.name.split(' ')[0];
  const confirmHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Helvetica Neue', Arial, sans-serif; margin: 0; padding: 0; background: #f5f3ef; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; }
        .header { background: #0a1628; padding: 24px; text-align: center; }
        .header h1 { color: #C9A227; font-size: 20px; margin: 0; letter-spacing: 2px; }
        .body { padding: 32px 24px; color: #0a1628; font-size: 16px; line-height: 1.6; }
        .footer { background: #f5f3ef; padding: 16px 24px; text-align: center; color: #8b7355; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>HEALINQUE</h1>
        </div>
        <div class="body">
          <p>Hi ${escapeHtml(firstName)},</p>
          <p>Thank you for reaching out to Healinque. We have received your inquiry and will respond within one business day.</p>
          <p>If your matter is urgent, please call or text us at <strong>(858) 337-7999</strong>.</p>
          <p style="margin-top: 24px;">Warm regards,<br/>The Healinque Team</p>
        </div>
        <div class="footer">
          Healinque Wellness &amp; Longevity Center<br/>
          15644 Pomerado Road, Suite 103, Poway, CA 92064<br/>
          <a href="https://healinque.com" style="color: #C9A227;">healinque.com</a>
        </div>
      </div>
    </body>
    </html>
  `;

  const confirmText = [
    `Hi ${data.name.split(' ')[0]},`,
    '',
    'Thank you for reaching out to Healinque. We have received your inquiry and will respond within one business day.',
    '',
    'If your matter is urgent, please call or text us at (858) 337-7999.',
    '',
    'Warm regards,',
    'The Healinque Team',
    '',
    'Healinque Wellness & Longevity Center',
    '15644 Pomerado Road, Suite 103, Poway, CA 92064',
    'healinque.com',
  ].join('\n');

  if (provider === 'resend' && process.env.RESEND_API_KEY) {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: SENDER_EMAIL,
        to: [data.email],
        subject: 'We received your inquiry — Healinque',
        html: confirmHtml,
        text: confirmText,
      }),
    });
  } else if (provider === 'sendgrid' && process.env.SENDGRID_API_KEY) {
    await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: data.email }] }],
        from: { email: SENDER_EMAIL },
        subject: 'We received your inquiry — Healinque',
        content: [
          { type: 'text/plain', value: confirmText },
          { type: 'text/html', value: confirmHtml },
        ],
      }),
    });
  }
}
