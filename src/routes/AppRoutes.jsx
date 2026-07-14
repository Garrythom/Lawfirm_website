import { Route, Routes } from 'react-router-dom'
import SiteLayout from '../layouts/SiteLayout'
import About from '../pages/About'
import Blog from '../pages/Blog'
import BlogDetail from '../pages/BlogDetail'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Insights from '../pages/Insights'
import Reviews from '../pages/Reviews'
import ServiceDetail from '../pages/ServiceDetail'
import Services from '../pages/Services'
import Team from '../pages/Team'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:id" element={<ServiceDetail />} />
        <Route path="team" element={<Team />} />
        <Route path="insights" element={<Insights />} />
        <Route path="insights/blog" element={<Blog />} />
        <Route path="insights/blog/:id" element={<BlogDetail />} />
        <Route path="insights/reviews" element={<Reviews />} />
        <Route path="blog" element={<Blog />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
