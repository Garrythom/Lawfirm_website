function SectionTitle({ kicker, title, align = 'left', inverted = false }) {
  return (
    <div className={`section-title section-title--${align} ${inverted ? 'section-title--inverted' : ''}`}>
      <div className="section-title__kicker">
        <img
          className="section-title__mark"
          src="https://www.gp-dm.com/assets/img/icon/sec-title-img1.png"
          alt=""
          aria-hidden="true"
        />
        <span>{kicker}</span>
      </div>
      <h2>{title}</h2>
    </div>
  )
}

export default SectionTitle
