import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { navItems } from '../data/siteData'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')

  const closeMenu = () => setMenuOpen(false)

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
            <div className="site-header__nav-item" key={item.label}>
              <NavLink to={item.path}>{item.label}</NavLink>
              {item.children && (
                <div className="site-header__submenu">
                  {item.children.map((child) => (
                    <NavLink key={child} to={item.path}>{child}</NavLink>
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
              Showing inferred matches for "{query.trim()}": services, attorneys, articles, and contact options.
            </p>
          )}
        </form>
      </div>
    </>
  )
}

export default Header
