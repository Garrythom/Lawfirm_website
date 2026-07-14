import { NavLink } from 'react-router-dom'
import { awards, contactInfo } from '../data/siteData'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="award-strip">
        {awards.slice(0, 5).map((award) => (
          <img key={award} src={award} alt="" loading="lazy" />
        ))}
      </div>
      <div className="site-footer__main">
        <div className="site-footer__about">
          <img src="/clone-assets/assets/img/resource/logo-1.png" alt="Golden Pacific Law Firm" />
          <p>
            Golden Pacific Law Firm is an international law firm representing financial institutions, sovereign
            governments, companies, insolvency practitioners, and private clients in asset recovery, financial fraud,
            insolvency, and financial services litigation.
          </p>
          <h3>Office Hours</h3>
          <p>Mon to Fri, 9:00 AM - 5:00 PM</p>
        </div>
        <div>
          <h3>Useful Links</h3>
          <ul>
            {['Home', 'About', 'Team', 'Services', 'Blog', 'Reviews'].map((label) => (
              <li key={label}><NavLink to={label === 'Home' ? '/' : label === 'Reviews' ? '/insights/reviews' : `/${label.toLowerCase()}`}>{label}</NavLink></li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Cooperation Authority</h3>
          <ul>
            <li>US Financial Crimes Enforcement Network (FinCEN)</li>
            <li>US Financial Industry Regulatory Authority (FINRA)</li>
            <li>Autorite des marches financiers (AMF)</li>
            <li>Swiss Financial Markets Supervisory Authority (FINMA)</li>
            <li>Financial Conduct Authority (FCA)</li>
          </ul>
        </div>
        <div>
          <h3>Contact Us</h3>
          <ul>
            <li><strong>Location 1</strong><span>{contactInfo.locations[0]}</span></li>
            <li><strong>Location 2</strong><span>{contactInfo.locations[1]}</span></li>
            <li><strong>Email us</strong><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></li>
            <li><strong>Call us</strong><a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></li>
          </ul>
        </div>
      </div>
      <div className="site-footer__bottom">(c) Copyright 2026 Golden Pacific. All Rights Reserved</div>
    </footer>
  )
}

export default Footer
