import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

const VISIBLE_MS = 500

function Preloader() {
  const { pathname } = useLocation()
  const [active, setActive] = useState(true)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
    } else {
      setActive(true)
    }
    const timer = setTimeout(() => setActive(false), VISIBLE_MS)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <div className={`preloader ${active ? '' : 'preloader--hidden'}`} aria-hidden="true">
      <div className="loader">
        <div className="loader-outter"></div>
        <div className="loader-inner"></div>
      </div>
    </div>
  )
}

export default Preloader
