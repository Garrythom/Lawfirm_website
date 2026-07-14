import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import { asset } from '../data/siteData'
import { allReviews } from '../data/insightsData'

function Reviews() {
  return (
    <>
      <PageHeader title="Reviews" crumb="Reviews" image={asset('assets/img/background/reviews_bg.jpg')} />
      <section className="review-list patterned">
        <SectionTitle kicker="What Our Customers Say" title="Reviews" align="center" />
        <div className="review-grid">
          {allReviews.map((review, index) => (
            <article className="review-card" key={`${review.name}-${index}`}>
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

export default Reviews
