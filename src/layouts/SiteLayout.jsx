import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Preloader from '../components/Preloader'

function SiteLayout() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 245)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <button
        className={`scroll-top ${visible ? 'scroll-top--visible' : ''}`}
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ^
      </button>
    </>
  )
}

export default SiteLayout
