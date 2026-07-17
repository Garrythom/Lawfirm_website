import { Link } from 'react-router-dom'

function ServiceCard({ service, icon }) {
  return (
    <article className="service-card">
      <div className="service-card__image">
        <img src={service.image} alt="" loading="lazy" />
        <div className="service-card__badge" aria-hidden="true">
          <img src={icon || '/clone-assets/assets/img/icon/sec-title-img1.png'} alt="" />
        </div>
      </div>
      <div className="service-card__body">
        <div className="service-card__meta">
          <span>{service.number}</span>
          <Link to={`/services/${service.id}`} aria-label={`Open ${service.title}`}>
            -&gt;
          </Link>
        </div>
        <h3>
          <Link to={`/services/${service.id}`} style={{ color: 'inherit' }}>{service.title}</Link>
        </h3>
        <p>{service.summary}</p>
      </div>
    </article>
  )
}

export default ServiceCard
