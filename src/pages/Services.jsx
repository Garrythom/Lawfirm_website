import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { asset, services } from '../data/siteData'

function Services() {
  useDocumentTitle('Practice Area')
  return (
    <>
      <PageHeader title="Practice Area" crumb="Practice Area" image={asset('assets/img/background/service_bg.jpg')} />
      <section className="services-page patterned">
        <SectionTitle kicker="Our Specializations" title="Comprehensive Legal Services for Modern Challenges" align="center" />
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              icon={`/clone-assets/assets/img/icon/service-icon-${service.number}.png`}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default Services
