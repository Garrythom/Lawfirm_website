import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import { articles, asset, featureCards, heroSlides, reviews, services, stats } from '../data/siteData'

function Home() {
  const hero = heroSlides[0]

  return (
    <>
      <section className="home-hero">
        <div className="home-hero__copy">
          <h1>{hero.title}</h1>
          <p>{hero.copy}</p>
          <a className="text-link" href="/contact">Get a free consultation <span>-&gt;</span></a>
        </div>
        <div className="home-hero__image" style={{ backgroundImage: `url(${hero.image})` }}></div>
      </section>

      <section className="feature-band patterned">
        <SectionTitle kicker="Welcome to Golden Pacific" title="Best Law Firm" align="center" />
        <div className="feature-grid">
          {featureCards.map(([lineOne, lineTwo], index) => (
            <article className="feature-card" key={lineOne}>
              <span className="feature-card__icon">{String(index + 1).padStart(2, '0')}</span>
              <h3>{lineOne}<br />{lineTwo}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="about-snapshot">
        <div>
          <SectionTitle kicker="About Golden Pacific" title="Your Global Legal Shield in Finance" />
          <p>
            In an era of rapidly evolving global finance and increasingly sophisticated criminal methods, Golden Pacific
            Law Firm specializes in financial crime, AML compliance, and cross-border asset recovery for multinational
            corporations, financial institutions, and high-net-worth individuals.
          </p>
          <div className="signature-row">
            <a className="button button--solid" href="/about">Learn More <span>-&gt;</span></a>
            <div>
              <img src={asset('assets/img/about/signature1.png')} alt="" />
              <span>Robert Martin Donaldson, Founder</span>
            </div>
          </div>
        </div>
        <img className="about-snapshot__portrait" src={asset('assets/img/about/about-v1-img1.jpg')} alt="" />
        <div className="stat-list">
          {stats.map((stat) => (
            <div className="stat-list__item" key={stat.label}>
              <span>{stat.value}</span>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="why-panel">
        <img src={asset('assets/img/resource/why-choose-v1-img1.jpg')} alt="" />
        <div>
          <SectionTitle kicker="Our Strengths" title="Why Global Clients Choose Our Firm" />
          <p>
            We deliver more than legal advice. We provide strategic solutions grounded in deep industry insight,
            technological edge, and an uncompromising commitment to achieving your objectives.
          </p>
          <ul className="check-list">
            <li>Truly Global Network & Integrated Team</li>
            <li>Technology-Driven Investigation & Evidence Analysis</li>
            <li>Deep Expertise at the Finance-Tech Legal Frontier</li>
            <li>Strategic, Business-Oriented Legal Counsel</li>
          </ul>
          <a className="button button--solid" href="/about">Our Advantages <span>-&gt;</span></a>
        </div>
      </section>

      <section className="practice-dark">
        <div className="practice-dark__content">
          <SectionTitle kicker="Practice Areas" title="Navigating Global Financial Legal Risks" inverted />
          {services.slice(0, 4).map((service) => (
            <article className="practice-row" key={service.id}>
              <span>{service.number}/</span>
              <div>
                <h3>{service.headline}</h3>
                <p>{service.summary}</p>
              </div>
              <a href="/services">Learn More -&gt;</a>
            </article>
          ))}
        </div>
        <img src={asset('assets/img/background/services-v1-bg.jpg')} alt="" />
      </section>

      <section className="services-preview patterned">
        <SectionTitle kicker="Our Practice Areas" title="Expert Legal Services Across Key Financial Disciplines" />
        <div className="service-carousel">
          {services.slice(5, 9).map((service) => <ServiceCard key={service.id} service={service} />)}
        </div>
      </section>

      <section className="reviews-section">
        <SectionTitle kicker="Our Testimonials" title="Reviews" align="center" />
        <div className="review-orbs">
          {reviews.map((review) => <span key={review.initials}>{review.initials}</span>)}
        </div>
        <blockquote>{reviews[0].text}</blockquote>
        <div className="stars">*****</div>
        <p className="review-author">{reviews[0].name}</p>
        <span className="review-date">{reviews[0].date}</span>
      </section>

      <section className="cta-band" style={{ backgroundImage: `linear-gradient(rgba(0,25,49,.72), rgba(0,25,49,.72)), url(${asset('assets/img/background/cta-v1-bg.jpg')})` }}>
        <div className="cta-band__icon">GP</div>
        <h2>Have any query<br />Contact us</h2>
        <a className="button button--solid" href="/contact">Contact Us <span>-&gt;</span></a>
      </section>

      <section className="blog-preview">
        <div className="blog-preview__top">
          <SectionTitle kicker="Recent Blog Post" title="Latest Articles" />
          <a className="text-link" href="/insights">All Article <span>-&gt;</span></a>
        </div>
        <div className="article-grid">
          {articles.map((article) => (
            <article className="article-card" key={article.title}>
              <img src={article.image} alt="" loading="lazy" />
              <time>{article.date}</time>
              <h3>{article.title}</h3>
              <a href="/insights">Read More -&gt;</a>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
