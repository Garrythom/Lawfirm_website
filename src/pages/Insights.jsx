import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import { asset } from '../data/siteData'
import { caseStudies } from '../data/insightsData'

function Insights() {
  return (
    <>
      <PageHeader title="Case Studies" crumb="Case Studies" image={asset('assets/img/background/case_studies_bg.jpg')} />
      <section className="blog-preview insights-page">
        <SectionTitle kicker="Some Case" title="Case Studies" align="center" />
        <div className="article-grid article-grid--full">
          {caseStudies.map((item) => (
            <article className="article-card article-card--case" key={item.id}>
              <Link className="article-card__media" to={`/insights/case-studies/${item.id}`} aria-label={`Read ${item.title}`}>
                <img src={item.image} alt="" loading="lazy" />
                <span className="article-card__overlay-icon" aria-hidden="true">
                  <span>&#8599;</span>
                </span>
              </Link>
              <div className="article-card__body">
                <time>{item.date}</time>
                <h3>
                  <Link to={`/insights/case-studies/${item.id}`} style={{ color: 'inherit' }}>{item.title}</Link>
                </h3>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Insights
