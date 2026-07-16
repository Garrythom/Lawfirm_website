import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import ServiceCarousel from '../components/ServiceCarousel'
import ReviewCarousel from '../components/ReviewCarousel'
import HeroSlider from '../components/HeroSlider'
import StatList from '../components/StatList'
import RevealOnScroll from '../components/RevealOnScroll'
import { asset, featureCards, heroSlides, reviews, services, stats } from '../data/siteData'
import { blogPosts } from '../data/insightsData'

function Home() {
  return (
    <>
      <HeroSlider slides={heroSlides} />

      <RevealOnScroll as="section" className="feature-band patterned">
        <SectionTitle kicker="Welcome to Pacific Gate" title="Best Law Firm" align="center" />
        <div className="feature-grid">
          {featureCards.map(([lineOne, lineTwo], index) => (
            <article className="feature-card" key={lineOne}>
              <img
                className="feature-card__shape"
                src={asset('assets/img/shape/feauture-v1-shape1.png')}
                alt=""
                aria-hidden="true"
              />
              <img
                className="feature-card__icon"
                src={`/clone-assets/assets/img/icon/feauture-v1-icon${index + 1}.png`}
                alt=""
                aria-hidden="true"
              />
              <h3>{lineOne}<br />{lineTwo}</h3>
            </article>
          ))}
        </div>
      </RevealOnScroll>

      <section className="about-snapshot">
        <div>
          <SectionTitle kicker="About Pacific Gate" title="Your Global Legal Shield in Finance" />
          <p>
            In an era of rapidly evolving global finance and increasingly sophisticated criminal methods, Pacific Gate
            Law Firm, founded in the State of Washington in 1993, specializes in providing top-tier defense against
            financial crime, AML compliance, and cross-border asset recovery for multinational corporations, financial
            institutions, and high-net-worth individuals. We bring together former regulators, seasoned trial attorneys,
            and financial investigation experts, dedicated to resolving our clients&rsquo; most critical legal risks and
            safeguarding assets worldwide.
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
        <StatList items={stats} />
      </section>

      <section className="why-panel">
        <img
          className="why-panel__shape"
          src={asset('assets/img/shape/why-choose-v1-shape1.png')}
          alt=""
          aria-hidden="true"
        />
        <img src={asset('assets/img/resource/why-choose-v1-img1.jpg')} alt="" />
        <div>
          <SectionTitle kicker="Our Strengths" title="Why Global Clients Choose Our Firm" />
          <p>
            We deliver more than legal advice. We provide strategic solutions grounded in deep industry insight,
            technological edge, and an uncompromising commitment to achieving your objectives in the most complex
            cross-border financial disputes.
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
                <h3>
                  <Link to={`/services/${service.id}`} style={{ color: 'inherit' }}>{service.headline}</Link>
                </h3>
                <p>{service.summary}</p>
              </div>
              <Link to={`/services/${service.id}`}>Learn More -&gt;</Link>
            </article>
          ))}
        </div>
        <img src={asset('assets/img/background/services-v1-bg.jpg')} alt="" />
      </section>

      <section className="services-preview patterned">
        <SectionTitle kicker="Our Practice Areas" title="Expert Legal Services Across Key Financial Disciplines" />
        <ServiceCarousel services={services} />
      </section>

      <section className="reviews-section">
        <SectionTitle kicker="Our Testimonials" title="Reviews" align="center" />
        <ReviewCarousel reviews={reviews} />
      </section>

      <section className="cta-band" style={{ backgroundImage: `linear-gradient(rgba(0,25,49,.72), rgba(0,25,49,.72)), url(${asset('assets/img/background/cta-v1-bg.jpg')})` }}>
        <div className="cta-band__icon">
          <img src="https://www.gp-dm.com/assets/img/icon/sec-title-img1.png" alt="" />
        </div>
        <h2>Have any query<br />Contact us</h2>
        <a className="button button--solid" href="/contact">Contact Us <span>-&gt;</span></a>
      </section>

      <section className="blog-preview">
        <div className="blog-preview__top">
          <SectionTitle kicker="Recent Blog Post" title="Latest Articles" />
          <Link className="text-link" to="/insights/blog">All Article <span>-&gt;</span></Link>
        </div>
        <div className="article-grid">
          {blogPosts.slice(0, 2).map((post) => (
            <article className="article-card" key={post.id}>
              <img src={post.image} alt="" loading="lazy" />
              <time>{post.date}</time>
              <h3>{post.title}</h3>
              <Link to={`/insights/blog/${post.id}`}>Read More -&gt;</Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
