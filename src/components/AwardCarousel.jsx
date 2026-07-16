import { useEffect, useRef, useState } from 'react'

const AUTO_ADVANCE_MS = 5000
const SLOT = 160

function pickVisible(width) {
  if (width >= 1200) return 5
  if (width >= 992) return 4
  if (width >= 768) return 3
  if (width >= 575) return 2
  return 1
}

function useVisibleCount() {
  const [visible, setVisible] = useState(() => (typeof window === 'undefined' ? 5 : pickVisible(window.innerWidth)))

  useEffect(() => {
    const onResize = () => setVisible(pickVisible(window.innerWidth))
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return visible
}

function AwardCarousel({ awards }) {
  const total = awards.length
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const visible = useVisibleCount()
  const timerRef = useRef(null)

  useEffect(() => {
    if (paused || total <= visible) return undefined
    timerRef.current = setInterval(() => {
      setIndex((current) => (current + 1) % total)
    }, AUTO_ADVANCE_MS)
    return () => clearInterval(timerRef.current)
  }, [paused, total, visible])

  if (total === 0) return null

  const tripled = [...awards, ...awards, ...awards]
  const activePos = total + index
  const translateX = -(activePos * SLOT)

  return (
    <div
      className="award-strip"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="award-strip__viewport" style={{ width: visible * SLOT }}>
        <div className="award-strip__track" style={{ transform: `translateX(${translateX}px)` }}>
          {tripled.map((award, i) => {
            const isVisible = i >= activePos && i < activePos + visible
            return (
              <div className="award-strip__item" key={i} aria-hidden={!isVisible} tabIndex={isVisible ? 0 : -1}>
                <div className="award-strip__flip">
                  <div className="award-strip__face award-strip__face--front">
                    <img src={award} alt="" loading="lazy" />
                  </div>
                  <div className="award-strip__face award-strip__face--back">
                    <img src={award} alt="" loading="lazy" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AwardCarousel
