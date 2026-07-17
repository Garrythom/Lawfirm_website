import ContactForm from '../components/ContactForm'
import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { asset, contactInfo } from '../data/siteData'

const ICONS = {
  location: (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" aria-hidden="true">
      <path d="M12 2 2 9.5h3V21h5v-6h4v6h5V9.5h3L12 2Z" fill="currentColor" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" aria-hidden="true">
      <rect x="2" y="4.5" width="20" height="15" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="m3 5.5 9 7.5 9-7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" width="34" height="34" fill="none" aria-hidden="true">
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.2c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z"
        fill="currentColor"
      />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" width="34" height="34" fill="none" aria-hidden="true">
      <path
        d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Z"
        fill="currentColor"
      />
      <path
        d="M8.6 7.2c.2-.5.5-.5.7-.5h.5c.2 0 .4 0 .6.4.2.5.7 1.7.7 1.8.1.1.1.3 0 .4-.1.2-.1.3-.3.4-.1.2-.3.3-.4.5-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.1 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.2.1 1.6.8 1.9 1 .3.1.5.2.5.3.1.5-.1 1-.5 1.5-.5.5-1.2.8-1.9.8-.5 0-1.5-.2-3.3-1.4-2.3-1.6-3.8-4-3.9-4.2-.1-.2-.9-1.2-.9-2.3 0-1.1.6-1.7.8-1.9Z"
        fill="var(--copper)"
      />
    </svg>
  ),
}

function ContactInfoCard({ icon, label, children }) {
  return (
    <article className="contact-info-card">
      <span className="contact-info-card__icon">{ICONS[icon]}</span>
      <div className="contact-info-card__body">
        <p><span className="contact-info-card__line" aria-hidden="true"></span>{label}</p>
        <h3>{children}</h3>
      </div>
    </article>
  )
}

function Contact() {
  useDocumentTitle('Contact Us')
  return (
    <>
      <PageHeader title="Contact Us" crumb="Contact Us" image={asset('assets/img/background/contact_bg.jpg')} />
      <section className="contact-page">
        <SectionTitle kicker="Support Information" title="Contact Information" align="center" />
        <div className="contact-info-grid">
          <ContactInfoCard icon="location" label="Location">{contactInfo.locations[0]}</ContactInfoCard>
          <ContactInfoCard icon="email" label="Email us"><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></ContactInfoCard>
          <ContactInfoCard icon="phone" label="Call us"><a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></ContactInfoCard>
          <ContactInfoCard icon="whatsapp" label="WhatsApp"><a href={contactInfo.whatsapp}>Contact us</a></ContactInfoCard>
        </div>
        <div className="contact-form-panel">
          <img src={asset('assets/img/resource/contact-page-img1.jpg')} alt="" />
          <div>
            <SectionTitle kicker="Get in Touch" title="Book a Free Consultation" />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
