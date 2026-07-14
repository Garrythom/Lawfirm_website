# Golden Pacific Law Firm — Clone

A near pixel-perfect recreation of [gp-dm.com](https://www.gp-dm.com/) (the
"Golden Pacific Law Firm" site) built with **React + Vite** on the frontend
and a small **Express** mock backend.

> **Reproduction status**
> - **Exact reproductions:** layout, typography, color palette, navigation
>   (header + dropdowns + mobile drawer + search modal), home/about/services/team/insights/contact
>   pages, footer, contact-form client-side validation, responsive breakpoints.
> - **Inferred implementations:** backend API surface (`/api/services`,
>   `/api/team`, `/api/contact`, `/api/search`, `/api/leads`), the lead-capture
>   POST endpoint, and the in-memory lead store. No payment flows were
>   observed on the source site.

## Stack

- **Frontend:** React 19, Vite 8, React Router 7
- **Styling:** Vanilla CSS (CSS variables + utility classes in `src/App.css`)
- **Backend:** Node.js, Express 4
- **Data:** In-memory (resets on restart) — schema documented below

## Project layout

```
law_firm/
├── public/                  Static assets (logo, screenshots)
├── server/                  Express mock backend
│   ├── data.js              Seed data (services, team, articles, reviews)
│   ├── server.js            Express app
│   └── package.json
├── src/
│   ├── assets/              Bundled images
│   ├── components/          Reusable UI (Header, Footer, ServiceCard, …)
│   ├── data/siteData.js     Frontend copy + content catalog
│   ├── layouts/SiteLayout.jsx
│   ├── pages/               Home, About, Services, Team, Insights, Contact
│   ├── routes/AppRoutes.jsx React Router 7 routes
│   ├── services/api.js      Fetch wrapper (VITE_API_BASE_URL)
│   ├── App.jsx / App.css    App shell + full design system
│   ├── index.css            Reset + CSS variables (palette + fonts)
│   └── main.jsx             Entry — BrowserRouter + StrictMode
├── index.html
├── vite.config.js
└── .env.example             VITE_API_BASE_URL
```

## Run locally

### Frontend
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # preview the production build
```

### Backend (optional — frontend falls back to a local mock if not running)
```bash
cd server
npm install
npm start        # http://localhost:4000
```

If `VITE_API_BASE_URL` is unset the frontend skips the network call and
shows the original "mock lead" success message. Set it in `.env`:
```bash
cp .env.example .env
```

## Deployment

- **Frontend** — `npm run build` produces a static `dist/` you can host on
  Netlify, Vercel, Cloudflare Pages, S3+CloudFront, etc. Set
  `VITE_API_BASE_URL` to the deployed API URL at build time.
- **Backend** — `cd server && npm start`. The service is stateless (in-memory
  lead store) so it can run on any Node host (Render, Fly, Railway, etc.).
  For a real deployment swap the in-memory `leads` array for MongoDB or
  PostgreSQL using the schema in `docs/schema.sql` / `docs/schema.md`.

## Accessibility

- Semantic landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`)
- `aria-label` on icon-only buttons and the search dialog (`role="dialog"`, `aria-modal`)
- Form fields use `name` attributes; status messages are announced in-flow
- Focus states inherit from default browser outlines on inputs/textareas
  (the contact form also shows a copper border on `:focus`)

## Screenshots

The original screenshots used as reference live in `public/`.

## License

Internal clone — for educational purposes.
