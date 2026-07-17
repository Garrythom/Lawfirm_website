import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ArrowIcon from './ArrowIcon'

function HeroSlider({ slides }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)

  // Auto-rotate every 6s. Pauses on hover. Cleans up on unmount to avoid leaks.
  useEffect(() => {
    if (paused || slides.length <= 1) return undefined
    timerRef.current = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timerRef.current)
  }, [paused, slides.length])

  const active = slides[index]

  return (
    <section
      className="home-hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="home-hero__copy">
        <h1>{active.title}</h1>
        <p>{active.copy}</p>
        <Link className="text-link" to="/contact">
          Get a free consultation <span aria-hidden="true"><ArrowIcon /></span>
        </Link>
        {slides.length > 1 && (
          <div className="hero-dots" role="tablist" aria-label="Hero slides">
            {slides.map((slide, i) => (
              <button
                key={slide.title}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show slide ${i + 1}`}
                className={`hero-dot ${i === index ? 'hero-dot--active' : ''}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        )}
      </div>
      <div
        className="home-hero__image"
        style={{ backgroundImage: `url(${active.image})` }}
      >
        {slides.map((slide, i) => (
          i !== index && (
            <div
              key={slide.title}
              className="home-hero__image-layer"
              style={{ backgroundImage: `url(${slide.image})` }}
              aria-hidden="true"
            />
          )
        ))}
      </div>
    </section>
  )
}

export default HeroSlider
