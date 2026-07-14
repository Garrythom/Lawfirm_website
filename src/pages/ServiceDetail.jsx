import { Link, useParams } from 'react-router-dom'
import { services } from '../data/siteData'
import serviceContent from '../data/serviceContent.json'
import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import Accordion from '../components/Accordion'

function ServiceDetail() {
  const { id } = useParams()
  const service = services.find((s) => s.id === id)
  const content = serviceContent[id]

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
      <PageHeader title={service.title} crumb="Practice Area" image={service.image} />

      <section className="service-detail">
        <aside className="service-detail__sidebar">
          <div className="service-detail__nav">
            <h3>Service List</h3>
            <ul>
              {services.map((s) => (
                <li key={s.id}>
                  <Link to={`/services/${s.id}`} className={s.id === id ? 'active' : ''}>
                    {s.title} <span aria-hidden="true">-&gt;</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="service-detail__contact">
            <h3>Get in touch</h3>
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
              <p>Click a case to expand and view the details:</p>
              <Accordion items={content.cases} />
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default ServiceDetail
