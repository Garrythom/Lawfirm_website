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
            <article className="article-card" key={item.id}>
              <img src={item.image} alt="" loading="lazy" />
              <time>{item.date}</time>
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Insights
