import { Link } from 'react-router-dom'

function PageHeader({ title, crumb, image, crumbLead = 'Home', crumbLeadPath = '/' }) {
  return (
    <section className="page-hero">
      <img
        className="page-hero__shape page-hero__shape--1"
        src="/clone-assets/assets/img/shape/page-header-shape1.png"
        alt=""
        aria-hidden="true"
      />
      <img
        className="page-hero__shape page-hero__shape--2"
        src="/clone-assets/assets/img/shape/page-header-shape2.png"
        alt=""
        aria-hidden="true"
      />
      <div className="page-hero__photo" style={{ backgroundImage: `url(${image})` }} />
      <div className="page-hero__inner">
        <div className="breadcrumb"><span></span> <Link to={crumbLeadPath}>{crumbLead}</Link> <em>/</em> {crumb}</div>
        <h1>{title}</h1>
      </div>
    </section>
  )
}

export default PageHeader
