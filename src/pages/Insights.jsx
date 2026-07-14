import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import { articles, asset, reviews } from '../data/siteData'

function Insights() {
  return (
    <>
      <PageHeader title="Insights" crumb="Insights" image={asset('assets/img/background/about_bg.jpg')} />
      <section className="blog-preview insights-page">
        <div className="blog-preview__top">
          <SectionTitle kicker="Recent Blog Post" title="Latest Articles" />
        </div>
        <div className="article-grid">
          {articles.map((article) => (
            <article className="article-card" key={article.title}>
              <img src={article.image} alt="" loading="lazy" />
              <time>{article.date}</time>
              <h3>{article.title}</h3>
              <a href="/insights">Read More <span aria-hidden="true">-&gt;</span></a>
            </article>
          ))}
        </div>
      </section>
      <section className="review-list patterned">
        <SectionTitle kicker="Our Testimonials" title="Client Reviews" align="center" />
        <div className="review-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.name}>
              <span>{review.initials}</span>
              <p>{review.text}</p>
              <strong>{review.name}</strong>
              <small>{review.date}</small>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Insights
