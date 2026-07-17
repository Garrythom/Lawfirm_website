import { NavLink } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { contactInfo, navItems } from '../data/siteData'
import { api } from '../services/api'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [openSubmenu, setOpenSubmenu] = useState(null)
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null)
  const closeTimerRef = useRef(null)
  const searchInputRef = useRef(null)

  const closeMenu = () => {
    setMenuOpen(false)
    setOpenMobileSubmenu(null)
  }

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus()
  }, [searchOpen])

  useEffect(() => {
    if (!searchOpen) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setSearchOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [searchOpen])

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
    const handle = setTimeout(async () => {
      if (!term) { setResults([]); return }
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
          <NavLink to="/" aria-label="Pacific Gate Law Firm home">
            <img src="/clone-assets/assets/img/resource/logo-1.svg" alt="Pacific Gate Law Firm" />
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
        <div className="mobile-drawer__top">
          <NavLink to="/" onClick={closeMenu} className="mobile-drawer__brand" aria-label="Pacific Gate Law Firm home">
            <span className="mobile-drawer__brand-icon" aria-hidden="true" />
            <span className="mobile-drawer__brand-text">
              <strong>Pacific Gate</strong>
              <small>Law Firm</small>
            </span>
          </NavLink>
          <button className="mobile-drawer__close" type="button" onClick={closeMenu} aria-label="Close menu">&times;</button>
        </div>
        <ul className="mobile-drawer__nav">
          {navItems.map((item) => {
            const isOpen = openMobileSubmenu === item.label
            return (
              <li key={item.label} className={item.children ? 'mobile-drawer__item--has-children' : ''}>
                <div className="mobile-drawer__row">
                  <NavLink to={item.path} onClick={closeMenu}>{item.label}</NavLink>
                  {item.children && (
                    <button
                      type="button"
                      className={`mobile-drawer__dropdown-btn ${isOpen ? 'mobile-drawer__dropdown-btn--open' : ''}`}
                      onClick={() => setOpenMobileSubmenu(isOpen ? null : item.label)}
                      aria-expanded={isOpen}
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <span aria-hidden="true">&#9662;</span>
                    </button>
                  )}
                </div>
                {item.children && (
                  <ul className={`mobile-drawer__submenu ${isOpen ? 'mobile-drawer__submenu--open' : ''}`}>
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <NavLink to={child.path} onClick={closeMenu}>{child.label}</NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
        <div className="mobile-drawer__contact">
          <span className="mobile-drawer__contact-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
              <path
                d="M6.6 3.5 9 5.9c.4.4.4 1 .1 1.5L7.6 9.7a13.6 13.6 0 0 0 6.7 6.7l2.3-1.5c.5-.3 1.1-.3 1.5.1l2.4 2.4c.5.5.5 1.3 0 1.7l-1.7 1.7c-.5.5-1.3.7-2 .5C10.9 19.5 4.5 13.1 2.9 7.2c-.2-.7 0-1.5.5-2L5.1 3.5c.4-.5 1.2-.5 1.5 0Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
        </div>
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
              ref={searchInputRef}
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
