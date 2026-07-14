import { useEffect, useRef, useState } from 'react'

function ReviewCarousel({ reviews }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    if (paused || reviews.length <= 1) return undefined
    timerRef.current = setInterval(() => {
      setIndex((current) => (current + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(timerRef.current)
  }, [paused, reviews.length])

  const active = reviews[index]

  return (
    <div
      className="review-orbs-wrap"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="review-orbs" role="tablist" aria-label="Client testimonials">
        {reviews.map((review, i) => (
          <button
            key={review.name}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={review.name}
            className={i === index ? 'review-orbs__active' : ''}
            onClick={() => setIndex(i)}
          >
            {review.initials}
          </button>
        ))}
      </div>
      <blockquote>{active.text}</blockquote>
      <div className="stars">*****</div>
      <p className="review-author">{active.name}</p>
      <span className="review-date">{active.date}</span>
    </div>
  )
}

export default ReviewCarousel
