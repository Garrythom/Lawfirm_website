// API client — small fetch wrapper that uses VITE_API_BASE_URL.
// Falls back to the local mock service when the env var is not set, so the
// site stays interactive without a backend running.

const BASE = import.meta.env.VITE_API_BASE_URL || '/api'

async function request(path, options = {}) {
  const response = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  })
  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: response.statusText }))
    throw new Error(error.error || 'Request failed')
  }
  return response.json()
}

export const api = {
  health: () => request('/health'),
  nav: () => request('/nav'),
  services: () => request('/services'),
  service: (id) => request(`/services/${id}`),
  team: () => request('/team'),
  teamMember: (id) => request(`/team/${id}`),
  articles: () => request('/articles'),
  article: (id) => request(`/articles/${id}`),
  reviews: () => request('/reviews'),
  contact: () => request('/contact'),
  search: (q) => request(`/search?q=${encodeURIComponent(q)}`),
  submitLead: (payload) => request('/contact', { method: 'POST', body: JSON.stringify(payload) }),
}
