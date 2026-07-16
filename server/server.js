// Pacific Gate Law Firm — Mock backend
// Inferred implementation: reproduces the likely API surface for a law-firm site
// (lead capture, content reads, search). No payment flows are inferred — none observed.

import express from 'express'
import cors from 'cors'
import { services, team, articles, reviews, contactInfo, navItems } from './data.js'

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json({ limit: '64kb' }))

// In-memory lead store (resets on restart — equivalent to the inferred
// "mock lead pipeline" the contact form posts to)
const leads = []

// --- Helpers ---------------------------------------------------------------
const required = (body, fields) => {
  const missing = fields.filter((f) => !body?.[f] || !String(body[f]).trim())
  return missing
}

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

// --- Content endpoints (read-only) -----------------------------------------
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'gp-dm-clone-api', timestamp: new Date().toISOString() })
})

app.get('/api/nav', (_req, res) => res.json(navItems))

app.get('/api/services', (_req, res) => res.json(services))

app.get('/api/services/:id', (req, res) => {
  const service = services.find((s) => s.id === req.params.id)
  if (!service) return res.status(404).json({ error: 'Service not found' })
  res.json(service)
})

app.get('/api/team', (_req, res) => res.json(team))

app.get('/api/team/:id', (req, res) => {
  const member = team.find((m) => String(m.id) === req.params.id)
  if (!member) return res.status(404).json({ error: 'Team member not found' })
  res.json(member)
})

app.get('/api/articles', (_req, res) => res.json(articles))

app.get('/api/articles/:id', (req, res) => {
  const article = articles.find((a) => String(a.id) === req.params.id)
  if (!article) return res.status(404).json({ error: 'Article not found' })
  res.json(article)
})

app.get('/api/reviews', (_req, res) => res.json(reviews))

app.get('/api/contact', (_req, res) => res.json(contactInfo))

// --- Search ---------------------------------------------------------------
app.get('/api/search', (req, res) => {
  const q = String(req.query.q || '').toLowerCase().trim()
  if (!q) return res.json({ query: '', total: 0, results: [] })

  const inServices = services
    .filter((s) => s.title.toLowerCase().includes(q) || s.summary.toLowerCase().includes(q))
    .map((s) => ({ kind: 'service', id: s.id, title: s.title, summary: s.summary, path: `/services/${s.id}` }))

  const inTeam = team
    .filter((m) => m.name.toLowerCase().includes(q) || m.role.toLowerCase().includes(q))
    .map((m) => ({ kind: 'team', id: m.id, title: m.name, summary: m.role, path: '/team' }))

  const inArticles = articles
    .filter((a) => a.title.toLowerCase().includes(q))
    .map((a) => ({ kind: 'article', id: a.id, title: a.title, summary: a.date, path: `/insights/blog/${a.id}` }))

  const results = [...inServices, ...inTeam, ...inArticles]
  res.json({ query: q, total: results.length, results })
})

// --- Contact / lead capture ----------------------------------------------
app.post('/api/contact', (req, res) => {
  const missing = required(req.body, ['fname', 'email', 'message'])
  if (missing.length) {
    return res.status(400).json({ error: 'Missing required fields', missing })
  }
  if (!/^\S+@\S+\.\S+$/.test(req.body.email)) {
    return res.status(400).json({ error: 'Invalid email address' })
  }

  const lead = {
    id: leads.length + 1,
    slug: slugify(`${req.body.fname}-${Date.now()}`),
    createdAt: new Date().toISOString(),
    status: 'received',
    ...req.body,
  }
  leads.push(lead)
  // Inferred behavior: return a confirmation object the front-end can render
  res.status(201).json({
    success: true,
    leadId: lead.id,
    message: 'Your case outline has been received. A senior partner will review and respond within 1 business day.',
  })
})

app.get('/api/leads', (_req, res) => res.json({ total: leads.length, leads }))

// --- 404 + error handling ------------------------------------------------
app.use((req, res) => res.status(404).json({ error: 'Not found', path: req.path }))

// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.error(err)
  res.status(500).json({ error: 'Internal server error' })
})

app.listen(PORT, () => {
  console.log(`[gp-dm-clone-api] listening on http://localhost:${PORT}`)
})
