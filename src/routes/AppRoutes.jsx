import { Route, Routes } from 'react-router-dom'
import SiteLayout from '../layouts/SiteLayout'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Insights from '../pages/Insights'
import Services from '../pages/Services'
import Team from '../pages/Team'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="team" element={<Team />} />
        <Route path="insights" element={<Insights />} />
        <Route path="blog" element={<Insights />} />
        <Route path="reviews" element={<Insights />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
