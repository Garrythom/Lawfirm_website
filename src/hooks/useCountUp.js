import { useEffect, useRef, useState } from 'react'

// Animates a number from 0 to `target` over `duration` ms when `start` flips
// true. Parses the target string ("935+", "326k+") to preserve any suffix.
export function useCountUp(target, { start = false, duration = 1400 } = {}) {
  const [display, setDisplay] = useState('0')
  const startedRef = useRef(false)

  useEffect(() => {
    if (!start || startedRef.current) return
    startedRef.current = true

    const match = String(target).match(/^([\d,.]+)([a-zA-Z+]*)$/)
    if (!match) {
      setDisplay(target)
      return
    }
    const numeric = parseFloat(match[1].replace(/,/g, ''))
    const suffix = match[2]
    if (Number.isNaN(numeric)) {
      setDisplay(target)
      return
    }

    const startTime = performance.now()
    let frame
    const step = (now) => {
      const progress = Math.min(1, (now - startTime) / duration)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const value = Math.floor(numeric * eased)
      const formatted = match[1].includes('.') ? value.toFixed(1) : value.toString()
      setDisplay(formatted + suffix)
      if (progress < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [start, target, duration])

  return display
}
