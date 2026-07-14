# API Reference — `gp-dm-clone-api`

Base URL: `http://localhost:4000` (configurable via `PORT`).

All responses are JSON. Errors return `{ "error": "..." }` with a 4xx/5xx
status code. The lead-capture endpoint validates that `fname`, `email`, and
`message` are present and that `email` matches a simple `^\S+@\S+\.\S+$`
pattern.

## Health

```
GET /api/health
→ 200 { "status": "ok", "service": "gp-dm-clone-api", "timestamp": "..." }
```

## Navigation

```
GET /api/nav
→ 200 [{ "label": "Home", "path": "/" }, ...]
```

## Services

```
GET /api/services
→ 200 [ { "id": "asset-recovery", "title": "Asset Recovery", ... }, ... ]

GET /api/services/:id
→ 200 { "id": "asset-recovery", ... }
→ 404 { "error": "Service not found" }
```

## Team

```
GET /api/team
GET /api/team/:id
```

## Articles

```
GET /api/articles
GET /api/articles/:id
```

## Reviews

```
GET /api/reviews
```

## Contact info

```
GET /api/contact
→ 200 { "phone": "...", "email": "...", "locations": [...], "whatsapp": "..." }
```

## Search

```
GET /api/search?q=arbitration
→ 200 {
    "query": "arbitration",
    "total": 1,
    "results": [
      { "kind": "service", "id": "international-arbitration", "title": "International Arbitration", "summary": "..." }
    ]
  }
```

## Submit a lead (contact form)

```
POST /api/contact
Content-Type: application/json

{
  "fname":   "Jane Doe",
  "mobile":  "+1 206 555 0100",
  "email":   "jane@example.com",
  "subject": "Crypto recovery inquiry",
  "message": "I lost $250k in a pig-butchering scam..."
}

→ 201 {
    "success": true,
    "leadId": 1,
    "message": "Your case outline has been received. A senior partner will review and respond within 1 business day."
  }

→ 400 { "error": "Missing required fields", "missing": ["email"] }
→ 400 { "error": "Invalid email address" }
```

## List leads (admin/debug)

```
GET /api/leads
→ 200 { "total": 1, "leads": [ ... ] }
```
