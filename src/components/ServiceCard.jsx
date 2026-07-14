function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-card__image">
        <img src={service.image} alt="" loading="lazy" />
        <div className="service-card__badge" aria-hidden="true">GP</div>
      </div>
      <div className="service-card__body">
        <div className="service-card__meta">
          <span>{service.number}</span>
          <a href={`#${service.id}`} aria-label={`Open ${service.title}`}>-&gt;</a>
        </div>
        <h3>{service.title}</h3>
        <p>{service.summary}</p>
      </div>
    </article>
  )
}

export default ServiceCard
