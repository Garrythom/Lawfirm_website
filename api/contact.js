// Vercel Serverless Function — receives contact form / "Submit Case" POSTs
// and relays them to Resend, which emails the message to CONTACT_TO_EMAIL.
// Runs server-side only, so RESEND_API_KEY is never exposed to the browser.

const REQUIRED_FIELDS = ['fname', 'email', 'message']

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[char])

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const body = req.body || {}
  const missing = REQUIRED_FIELDS.filter((field) => !body[field] || !String(body[field]).trim())
  if (missing.length) {
    return res.status(400).json({ error: 'Missing required fields', missing })
  }
  if (!/^\S+@\S+\.\S+$/.test(body.email)) {
    return res.status(400).json({ error: 'Invalid email address' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'Pacific Gate Website <onboarding@resend.dev>'

  if (!apiKey || !toEmail) {
    console.error('Contact form: missing RESEND_API_KEY or CONTACT_TO_EMAIL environment variable')
    return res.status(500).json({ error: 'Email service is not configured' })
  }

  const { fname, mobile, email, subject, message } = body

  const html = `
    <h2>New case inquiry from the website</h2>
    <p><strong>Name:</strong> ${escapeHtml(fname)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(mobile || '—')}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Subject:</strong> ${escapeHtml(subject || '—')}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
  `.trim()

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: toEmail,
        reply_to: email,
        subject: `New case inquiry: ${subject || fname}`,
        html,
      }),
    })

    if (!resendResponse.ok) {
      const errorBody = await resendResponse.json().catch(() => ({}))
      console.error('Resend API error', resendResponse.status, errorBody)
      return res.status(502).json({ error: 'Failed to send email' })
    }

    return res.status(201).json({
      success: true,
      message: 'Your case outline has been received. A senior partner will review and respond within 1 business day.',
    })
  } catch (err) {
    console.error('Contact form send failure', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
