import { NavLink } from 'react-router-dom'
import AwardCarousel from './AwardCarousel'
import { awards, contactInfo } from '../data/siteData'

function LocationIcon() {
  return (
    <svg className="footer-icon" viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
      <path
        d="M12 21s7-6.1 7-11.5a7 7 0 1 0-14 0C5 14.9 12 21 12 21Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg className="footer-icon" viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
      <rect x="3" y="5.5" width="18" height="13" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 7 12 13 20 7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="footer-icon" viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
      <path
        d="M6.6 3.5 9 5.9c.4.4.4 1 .1 1.5L7.6 9.7a13.6 13.6 0 0 0 6.7 6.7l2.3-1.5c.5-.3 1.1-.3 1.5.1l2.4 2.4c.5.5.5 1.3 0 1.7l-1.7 1.7c-.5.5-1.3.7-2 .5C10.9 19.5 4.5 13.1 2.9 7.2c-.2-.7 0-1.5.5-2L5.1 3.5c.4-.5 1.2-.5 1.5 0Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <AwardCarousel awards={awards} />
      <div className="site-footer__main">
        <div className="site-footer__about">
          <img src="/clone-assets/assets/img/resource/logo-1.svg" alt="Pacific Gate Law Firm" />
          <p>
            Pacific Gate Law Firm is an international law firm representing financial institutions, sovereign
            governments, companies, insolvency practitioners, and private clients in asset recovery, financial fraud,
            insolvency, and financial services litigation.
          </p>
          <h3>Office Hours</h3>
          <p>Mon to Fri, 9:00 AM - 5:00 PM</p>
        </div>
        <div>
          <h3>Useful Links</h3>
          <ul className="footer-links">
            {['Home', 'About', 'Team', 'Services', 'Blog', 'Reviews'].map((label) => (
              <li key={label}>
                <NavLink to={label === 'Home' ? '/' : label === 'Reviews' ? '/insights/reviews' : `/${label.toLowerCase()}`}>
                  <span className="footer-icon" aria-hidden="true">&#8250;</span>{label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Cooperation Authority</h3>
          <ul className="footer-authority">
            <li><span className="footer-icon" aria-hidden="true">&#9733;</span>US Financial Crimes Enforcement Network (FinCEN)</li>
            <li><span className="footer-icon" aria-hidden="true">&#9733;</span>US Financial Industry Regulatory Authority (FINRA)</li>
            <li><span className="footer-icon" aria-hidden="true">&#9733;</span>Autorite des marches financiers (AMF)</li>
            <li><span className="footer-icon" aria-hidden="true">&#9733;</span>Swiss Financial Markets Supervisory Authority (FINMA)</li>
            <li><span className="footer-icon" aria-hidden="true">&#9733;</span>Financial Conduct Authority (FCA)</li>
          </ul>
        </div>
        <div>
          <h3>Contact Us</h3>
          <ul className="footer-contact">
            <li><strong><LocationIcon />Location 1</strong><span>{contactInfo.locations[0]}</span></li>
            <li><strong><LocationIcon />Location 2</strong><span>{contactInfo.locations[1]}</span></li>
            <li><strong><EmailIcon />Email us</strong><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></li>
            <li><strong><PhoneIcon />Call us</strong><a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></li>
          </ul>
        </div>
      </div>
      <div className="site-footer__bottom">(c) Copyright 2026 Pacific Gate. All Rights Reserved</div>
    </footer>
  )
}

export default Footer
