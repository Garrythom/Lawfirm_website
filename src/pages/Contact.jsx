import ContactForm from '../components/ContactForm'
import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import { asset, contactInfo } from '../data/siteData'

function Contact() {
  return (
    <>
      <PageHeader title="Contact Us" crumb="Contact Us" image={asset('assets/img/background/contact_bg.jpg')} />
      <section className="contact-page">
        <SectionTitle kicker="Support Information" title="Contact Information" align="center" />
        <div className="contact-info-grid">
          <article><span>01</span><p>Location</p><h3>{contactInfo.locations[0]}</h3></article>
          <article><span>02</span><p>Email us</p><h3><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></h3></article>
          <article><span>03</span><p>Call us</p><h3><a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></h3></article>
          <article><span>04</span><p>WhatsApp</p><h3><a href={contactInfo.whatsapp}>Contact us</a></h3></article>
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
