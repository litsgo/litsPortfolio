import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { name, email, message } = req.body || {};
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  const FROM_EMAIL = process.env.FROM_EMAIL;
  const TO_EMAIL = process.env.TO_EMAIL || 'litsbandiala8@gmail.com';

  if (!SENDGRID_API_KEY || !FROM_EMAIL) {
    return res.status(500).json({ error: 'Missing SendGrid configuration' });
  }

  const payload = {
    personalizations: [
      {
        to: [{ email: TO_EMAIL }],
        subject: 'New contact form message'
      }
    ],
    from: { email: FROM_EMAIL, name: 'Website' },
    reply_to: { email: email, name: name || 'Visitor' },
    content: [
      {
        type: 'text/plain',
        value: `Name: ${name}\nEmail: ${email}\n\n${message}`
      }
    ]
  };

  try {
    const r = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!r.ok) {
      const text = await r.text().catch(() => '')
      return res.status(500).json({ error: 'SendGrid error', details: text })
    }

    return res.status(200).json({ success: true })
  } catch (err: any) {
    return res.status(500).json({ error: 'Request failed', details: String(err) })
  }
}
