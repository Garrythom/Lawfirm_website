import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { asset, navItems, services } from '../data/siteData'
import serviceContent from '../data/serviceContent.json'
import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import Accordion from '../components/Accordion'
import VideoModal from '../components/VideoModal'

function ServiceDetail() {
  const { id } = useParams()
  const service = services.find((s) => s.id === id)
  const content = serviceContent[id]
  const serviceLinks = navItems.find((item) => item.label === 'Services')?.children ?? []
  const [videoOpen, setVideoOpen] = useState(false)

  if (!service) {
    return (
      <section className="services-page patterned">
        <SectionTitle kicker="Not Found" title="Service not found" align="center" />
        <p style={{ textAlign: 'center' }}>
          <Link className="text-link" to="/services">Back to all services <span aria-hidden="true">-&gt;</span></Link>
        </p>
      </section>
    )
  }

  return (
    <>
      <PageHeader title={service.title} crumb={service.title} crumbLead="Service" image={service.heroImage} />

      <section className="service-detail">
        <aside className="service-detail__sidebar">
          <div className="service-detail__nav">
            <h3>Service List</h3>
            <ul>
              {serviceLinks.map((link) => {
                const linkId = link.path.replace('/services/', '')
                const isActive = linkId === id
                return (
                  <li key={link.path}>
                    <Link to={link.path} className={isActive ? 'active' : ''}>
                      <span>{link.label}</span>
                      <span className="service-detail__nav-arrow" aria-hidden="true">-&gt;</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="service-detail__contact">
            <img className="service-detail__contact-icon" src={asset('assets/img/icon/about-v2-icon1.png')} alt="" aria-hidden="true" />
            <span className="service-detail__contact-kicker">Get in Touch</span>
            <p>Legal justice<br />for you</p>
            <Link className="button button--solid" to="/contact">Contact us <span aria-hidden="true">-&gt;</span></Link>
          </div>
        </aside>

        <div className="service-detail__content">
          <img className="service-detail__image" src={service.image} alt="" loading="lazy" />
          <h2>{service.title}</h2>
          {content?.intro.map((para, i) => <p key={i}>{para}</p>)}

          {content?.highlights && (
            <>
              <h3>{content.highlightsHeading}</h3>
              <ul className="about-list">
                {content.highlights.map((item) => (
                  <li key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </li>
                ))}
              </ul>
            </>
          )}

          {content?.secondaryImage && !content?.videoUrl && (
            <div className="service-detail__media">
              <img src={asset(content.secondaryImage)} alt="" loading="lazy" />
            </div>
          )}

          {content?.videoUrl && (
            <button
              type="button"
              className={`service-detail__media service-detail__media--video ${content.secondaryImage ? '' : 'service-detail__media--bare'}`}
              onClick={() => setVideoOpen(true)}
              aria-label="Watch the video"
            >
              {content.secondaryImage && <img src={asset(content.secondaryImage)} alt="" loading="lazy" />}
              <span className="service-detail__play" aria-hidden="true">&#9658;</span>
            </button>
          )}

          {content?.strategies && (
            <>
              <h3>{content.strategiesHeading}</h3>
              <ul className="about-list">
                {content.strategies.map((item) => (
                  <li key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </li>
                ))}
              </ul>
            </>
          )}

          {content?.gallery && (
            <div className="service-detail__gallery">
              {content.gallery.map((src) => <img key={src} src={asset(src)} alt="" loading="lazy" />)}
            </div>
          )}

          {content?.documentation && (
            <>
              <h3>{content.documentationHeading}</h3>
              <p>{content.documentationIntro}</p>
              <ul className="check-list">
                {content.documentation.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <p>{content.documentationOutro}</p>
            </>
          )}

          {content?.cases?.length > 0 && (
            <div className="service-detail__cases">
              <h3>{content.casesHeading}</h3>
              <p>Click the &quot;+&quot; sign to expand and view our representative cases:</p>
              <Accordion items={content.cases} />
            </div>
          )}
        </div>
      </section>

      {videoOpen && content?.videoUrl && (
        <VideoModal url={content.videoUrl} onClose={() => setVideoOpen(false)} />
      )}
    </>
  )
}

export default ServiceDetail
