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

const AUTO_ADVANCE_MS = 5000
const TRANSITION_MS = 300

function ServiceCarousel({ services }) {
  const [start, setStart] = useState(0)
  const [displayStart, setDisplayStart] = useState(0)
  const [direction, setDirection] = useState('next') // next | prev
  const [phase, setPhase] = useState('idle') // idle | exit | enter
  const [paused, setPaused] = useState(false)
  const visible = useVisibleCount()
  const timerRef = useRef(null)
  const exitTimerRef = useRef(null)
  const rafIds = useRef([])

  const goTo = (nextStart, dir) => {
    const normalized = ((nextStart % services.length) + services.length) % services.length
    if (normalized === start) return
    setDirection(dir)
    setStart(normalized)
    setPhase('exit')
    clearTimeout(exitTimerRef.current)
    exitTimerRef.current = setTimeout(() => {
      setDisplayStart(normalized)
      setPhase('enter')
      const raf1 = requestAnimationFrame(() => {
        const raf2 = requestAnimationFrame(() => setPhase('idle'))
        rafIds.current.push(raf2)
      })
      rafIds.current.push(raf1)
    }, TRANSITION_MS)
  }

  const goPrev = () => goTo(start - 1, 'prev')
  const goNext = () => goTo(start + 1, 'next')

  useEffect(() => {
    if (paused || services.length <= visible) return undefined
    timerRef.current = setInterval(() => goTo(start + 1, 'next'), AUTO_ADVANCE_MS)
    return () => clearInterval(timerRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, services.length, visible, start])

  useEffect(() => () => {
    clearTimeout(exitTimerRef.current)
    rafIds.current.forEach((id) => cancelAnimationFrame(id))
  }, [])

  const slice = Array.from(
    { length: Math.min(visible, services.length) },
    (_, i) => services[(displayStart + i) % services.length],
  )

  const phaseClass = phase !== 'idle' ? `service-carousel--${phase}-${direction}` : ''

  return (
    <div
      className="service-carousel-wrap"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={`service-carousel ${phaseClass}`}>
        {slice.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            icon={`/clone-assets/assets/img/icon/service-icon-${service.number}.png`}
          />
        ))}
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
