import { NavLink } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { navItems } from '../data/siteData'
import { api } from '../services/api'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [openSubmenu, setOpenSubmenu] = useState(null)
  const closeTimerRef = useRef(null)

  const closeMenu = () => setMenuOpen(false)

  // Hover-intent for the desktop dropdown: there's a gap between the nav
  // link and the submenu panel, so plain CSS :hover drops the instant the
  // cursor crosses it. Keep the panel open on a short grace timer so moving
  // from the "Services" link into the dropdown (or around inside it)
  // doesn't close it prematurely; only closing both regions for the full
  // delay actually closes it.
  const openSubmenuFor = (label) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    setOpenSubmenu(label)
  }

  const scheduleCloseSubmenu = () => {
    closeTimerRef.current = setTimeout(() => setOpenSubmenu(null), 220)
  }

  useEffect(() => () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
  }, [])

  // Live search against the mock API; debounced. Falls back to a substring
  // scan over the local nav catalog if the API is unreachable so the modal
  // is always interactive.
  useEffect(() => {
    if (!searchOpen) return
    const term = query.trim()
    if (!term) { setResults([]); return }
    const handle = setTimeout(async () => {
      try {
        const data = await api.search(term)
        setResults(data.results || [])
      } catch {
        const t = term.toLowerCase()
        setResults(
          navItems
            .flatMap((item) => [
              { kind: 'page', title: item.label, summary: item.path, path: item.path },
              ...(item.children || []).map((c) => ({ kind: 'page', title: c.label, summary: c.path, path: c.path })),
            ])
            .filter((r) => r.title.toLowerCase().includes(t))
            .slice(0, 6),
        )
      }
    }, 200)
    return () => clearTimeout(handle)
  }, [query, searchOpen])

  return (
    <>
      <header className="site-header">
        <div className="site-header__brand">
          <NavLink to="/" aria-label="Golden Pacific Law Firm home">
            <img src="/clone-assets/assets/img/resource/logo-1.png" alt="Golden Pacific Law Firm" />
          </NavLink>
        </div>
        <button className="site-header__menu-button" type="button" onClick={() => setMenuOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className="site-header__nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <div
              className={`site-header__nav-item ${item.children && openSubmenu === item.label ? 'site-header__nav-item--open' : ''}`}
              key={item.label}
              onMouseEnter={() => item.children && openSubmenuFor(item.label)}
              onMouseLeave={() => item.children && scheduleCloseSubmenu()}
            >
              <NavLink to={item.path}>{item.label}</NavLink>
              {item.children && (
                <div className="site-header__submenu">
                  {item.children.map((child) => (
                    <NavLink key={child.label} to={child.path}>{child.label}</NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="site-header__actions">
          <button className="icon-button" type="button" aria-label="Open search" onClick={() => setSearchOpen(true)}>
            <span aria-hidden="true"></span>
          </button>
          <NavLink className="button button--solid" to="/contact">
            Contact Us <span aria-hidden="true">-&gt;</span>
          </NavLink>
        </div>
      </header>

      <div className={`mobile-drawer ${menuOpen ? 'mobile-drawer--open' : ''}`}>
        <button className="mobile-drawer__close" type="button" onClick={closeMenu} aria-label="Close menu">x</button>
        <img src="/clone-assets/assets/img/resource/logo-1.png" alt="Golden Pacific Law Firm" />
        {navItems.map((item) => (
          <NavLink key={item.label} to={item.path} onClick={closeMenu}>{item.label}</NavLink>
        ))}
        <NavLink className="button button--solid" to="/contact" onClick={closeMenu}>Contact Us -&gt;</NavLink>
      </div>
      {menuOpen && <button className="drawer-backdrop" type="button" onClick={closeMenu} aria-label="Close menu"></button>}

      <div className={`search-modal ${searchOpen ? 'search-modal--open' : ''}`} role="dialog" aria-modal="true">
        <button className="search-modal__close" type="button" onClick={() => setSearchOpen(false)}>x</button>
        <form
          className="search-modal__form"
          onSubmit={(event) => {
            event.preventDefault()
            setQuery(query.trim())
          }}
        >
          <label htmlFor="site-search">Search here</label>
          <div>
            <input
              id="site-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search Here..."
            />
            <button type="submit" aria-label="Submit search">Go</button>
          </div>
          {query.trim() && (
            <p className="search-modal__result">
              {results.length === 0
                ? `No matches for "${query.trim()}".`
                : `Showing ${results.length} match${results.length === 1 ? '' : 'es'} for "${query.trim()}":`}
            </p>
          )}
          {results.length > 0 && (
            <ul className="search-modal__results">
              {results.map((r, i) => (
                <li key={`${r.kind}-${r.id || r.path || i}`}>
                  <NavLink to={r.path || '/'} onClick={() => setSearchOpen(false)}>
                    <span className="search-modal__kind">{r.kind}</span>
                    <strong>{r.title}</strong>
                    {r.summary && <span className="search-modal__summary">{r.summary}</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </form>
      </div>
    </>
  )
}

export default Header
