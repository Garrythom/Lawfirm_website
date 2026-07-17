import { Link, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import ContactForm from '../components/ContactForm'
import ArrowIcon from '../components/ArrowIcon'
import { asset, services } from '../data/siteData'
import { caseStudies } from '../data/insightsData'
import caseDetails from '../data/caseStudyDetails.json'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

function CaseStudyDetail() {
  const { id } = useParams()
  const meta = caseStudies.find((item) => String(item.id) === id)
  const detail = caseDetails.find((item) => item.id === id)
  useDocumentTitle(detail?.title ?? 'Case Details')

  if (!meta || !detail) {
    return (
      <section className="services-page patterned">
        <SectionTitle kicker="Not Found" title="Case study not found" align="center" />
        <p style={{ textAlign: 'center' }}>
          <Link className="text-link" to="/insights">Back to all case studies <span aria-hidden="true"><ArrowIcon /></span></Link>
        </p>
      </section>
    )
  }

  return (
    <>
      <PageHeader title="Case Details" crumb="Case Details" image={asset('assets/img/background/case_studies_bg.jpg')} />
      <section className="case-detail">
        <div className="case-detail__content">
          <div className="case-detail__intro">
            <time>{detail.date}</time>
            <h2>{detail.title}</h2>
          </div>
          <img className="case-detail__hero" src={asset(detail.heroImage.replace(/^\//, ''))} alt="" loading="lazy" />
          <div className="case-detail__body">
            {detail.blocks.map((block, index) =>
              block.type === 'ul' ? (
                <ul className="check-list" key={index}>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p key={index}>{block.text}</p>
              ),
            )}
          </div>
          <div className="case-detail__form">
            <SectionTitle kicker="Get in Touch" title="Book a Free Consultation" />
            <ContactForm />
          </div>
        </div>
        <aside className="case-detail__sidebar">
          <h3 className="case-detail__sidebar-heading">Our Services</h3>
          <div className="case-detail__services">
            {services.map((service) => (
              <Link className="case-service-card" to={`/services/${service.id}`} key={service.id}>
                <div className="case-service-card__image">
                  <img src={service.image} alt="" loading="lazy" />
                </div>
                <div className="case-service-card__body">
                  <h4>{service.title}</h4>
                  <p>{service.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </section>
    </>
  )
}

export default CaseStudyDetail
