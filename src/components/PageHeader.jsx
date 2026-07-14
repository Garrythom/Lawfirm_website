function PageHeader({ title, crumb, image }) {
  return (
    <section className="page-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(0,25,49,.78), rgba(0,25,49,.35)), url(${image})` }}>
      <div className="page-hero__inner">
        <div className="breadcrumb"><span></span> Home / {crumb}</div>
        <h1>{title}</h1>
      </div>
    </section>
  )
}

export default PageHeader
