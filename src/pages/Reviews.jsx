import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import { asset, AVATAR_GRADIENTS } from '../data/siteData'
import { allReviews } from '../data/insightsData'

const TRUNCATE_LENGTH = 200

function ReviewCard({ review }) {
  const [expanded, setExpanded] = useState(false)
  const isLong = review.text.length > TRUNCATE_LENGTH

  return (
    <article className="review-card">
      <div className="review-card__header">
        <div className="review-card__avatar" style={{ background: AVATAR_GRADIENTS[review.colorClass] }}>
          {review.initials}
        </div>
        <div>
          <h5 className="review-card__name">{review.name}</h5>
          <p className="review-card__date">{review.date}</p>
        </div>
      </div>
      <div className="review-card__rating">
        <img className="review-card__stars" src={asset('assets/img/icon/stars-5.png')} alt="5 stars" />
        <span className="review-card__verified"><span aria-hidden="true">&#10003;</span> Verified</span>
      </div>
      <div className="review-card__content">
        <p className="review-card__text">
          {expanded || !isLong ? review.text : `${review.text.slice(0, TRUNCATE_LENGTH)}`}
          {isLong && !expanded && (
            <>
              &hellip;{' '}
              <button type="button" className="review-card__toggle" onClick={() => setExpanded(true)}>
                See more
              </button>
            </>
          )}
        </p>
        {isLong && expanded && (
          <button type="button" className="review-card__toggle review-card__toggle--less" onClick={() => setExpanded(false)}>
            See less
          </button>
        )}
      </div>
    </article>
  )
}

function Reviews() {
  return (
    <>
      <PageHeader title="Reviews" crumb="Reviews" image={asset('assets/img/background/reviews_bg.jpg')} />
      <section className="review-list patterned">
        <SectionTitle kicker="What Our Customers Say" title="Reviews" align="center" />
        <div className="review-grid">
          {allReviews.map((review, index) => (
            <ReviewCard review={review} key={`${review.name}-${index}`} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Reviews
