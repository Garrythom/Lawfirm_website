import { useEffect, useRef, useState } from 'react'
import ServiceCard from './ServiceCard'

function useVisibleCount() {
  const [count, setCount] = useState(() => (typeof window === 'undefined' ? 4 : pickCount(window.innerWidth)))

  useEffect(() => {
    const onResize = () => setCount(pickCount(window.innerWidth))
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return count
}

function pickCount(width) {
  if (width >= 992) return 4
  if (width >= 575) return 3
  if (width >= 375) return 2
  return 1
}

function ServiceCarousel({ services }) {
  const [start, setStart] = useState(0)
  const [paused, setPaused] = useState(false)
  const visible = useVisibleCount()
  const timerRef = useRef(null)

  useEffect(() => {
    if (paused || services.length <= visible) return undefined
    timerRef.current = setInterval(() => {
      setStart((current) => (current + 1) % services.length)
    }, 5000)
    return () => clearInterval(timerRef.current)
  }, [paused, services.length, visible])

  const slice = Array.from({ length: Math.min(visible, services.length) }, (_, i) => services[(start + i) % services.length])

  const goPrev = () => setStart((current) => (current - 1 + services.length) % services.length)
  const goNext = () => setStart((current) => (current + 1) % services.length)

  return (
    <div
      className="service-carousel-wrap"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="service-carousel">
        {slice.map((service) => <ServiceCard key={service.id} service={service} />)}
      </div>
      <div className="carousel-nav">
        <button type="button" className="carousel-nav__button" onClick={goPrev} aria-label="Previous services">
          &lt;
        </button>
        <button type="button" className="carousel-nav__button" onClick={goNext} aria-label="Next services">
          &gt;
        </button>
      </div>
    </div>
  )
}

export default ServiceCarousel
