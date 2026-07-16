import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AVATAR_GRADIENTS } from '../data/siteData'

const AUTO_ADVANCE_MS = 5000
const EXIT_MS = 1400
const SLOT = 100 // avatar width (72px) + track gap (28px)

function ReviewCarousel({ reviews }) {
  const total = reviews.length
  const [index, setIndex] = useState(0)
  const [displayIndex, setDisplayIndex] = useState(0)
  const [quotePhase, setQuotePhase] = useState('idle') // idle | exit | enter
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)
  const exitTimerRef = useRef(null)
  const rafIds = useRef([])

  const goTo = (nextIndex) => {
    const normalized = ((nextIndex % total) + total) % total
    if (normalized === index) return
    setIndex(normalized)
    setQuotePhase('exit')
    clearTimeout(exitTimerRef.current)
    exitTimerRef.current = setTimeout(() => {
      setDisplayIndex(normalized)
      setQuotePhase('enter')
      const raf1 = requestAnimationFrame(() => {
        const raf2 = requestAnimationFrame(() => setQuotePhase('idle'))
        rafIds.current.push(raf2)
      })
      rafIds.current.push(raf1)
    }, EXIT_MS)
  }

  useEffect(() => {
    if (paused || total <= 1) return undefined
    timerRef.current = setInterval(() => goTo(index + 1), AUTO_ADVANCE_MS)
    return () => clearInterval(timerRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, index, total])

  useEffect(() => () => {
    clearTimeout(exitTimerRef.current)
    rafIds.current.forEach((id) => cancelAnimationFrame(id))
  }, [])

  if (total === 0) return null

  const active = reviews[displayIndex]
  const tripled = [...reviews, ...reviews, ...reviews]
  const activePos = total + index
  const translateX = SLOT * (1 - activePos)

  return (
    <div
      className="review-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button type="button" className="review-carousel__nav" onClick={() => goTo(index - 1)} aria-label="Previous review">
        <span aria-hidden="true">&larr;</span>
      </button>

      <div className="review-carousel__body">
        <div className="review-orbs-viewport">
          <div
            className="review-orbs"
            role="tablist"
            aria-label="Client testimonials"
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {tripled.map((review, i) => {
              const isActive = i === activePos
              const isMiddleCopy = i >= total && i < total * 2
              return (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={review.name}
                  aria-hidden={!isMiddleCopy}
                  tabIndex={isMiddleCopy ? 0 : -1}
                  className={`review-orbs__avatar ${isActive ? 'review-orbs__avatar--active' : ''}`}
                  style={{ background: AVATAR_GRADIENTS[review.colorClass] }}
                  onClick={() => goTo(i % total)}
                >
                  {review.initials}
                </button>
              )
            })}
          </div>
        </div>

        <div className={`review-carousel__card ${quotePhase !== 'idle' ? `review-carousel__card--${quotePhase}` : ''}`}>
          <blockquote className="review-carousel__quote">{active.text}</blockquote>
          <div className="stars" aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <p className="review-author">{active.name}</p>
          <span className="review-date">{active.date}</span>
        </div>

        <div>
          <Link className="button button--solid" to="/insights/reviews">
            Learn More <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>
      </div>

      <button type="button" className="review-carousel__nav" onClick={() => goTo(index + 1)} aria-label="Next review">
        <span aria-hidden="true">&rarr;</span>
      </button>
    </div>
  )
}

export default ReviewCarousel
