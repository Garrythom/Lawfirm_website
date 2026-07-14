function SectionTitle({ kicker, title, align = 'left', inverted = false }) {
  return (
    <div className={`section-title section-title--${align} ${inverted ? 'section-title--inverted' : ''}`}>
      <div className="section-title__kicker">
        <span className="section-title__mark" aria-hidden="true">GP</span>
        <span>{kicker}</span>
      </div>
      <h2>{title}</h2>
    </div>
  )
}

export default SectionTitle
