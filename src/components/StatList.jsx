import { useScrollReveal } from '../hooks/useScrollReveal'
import { useCountUp } from '../hooks/useCountUp'

function StatItem({ value, label, icon }) {
  const [ref, visible] = useScrollReveal({ threshold: 0.4 })
  const display = useCountUp(value, { start: visible })
  return (
    <div className="stat-list__item" ref={ref}>
      <img className="stat-list__icon" src={icon} alt="" aria-hidden="true" />
      <span>{visible ? display : '0'}</span>
      <p>{label}</p>
    </div>
  )
}

export default function StatList({ items }) {
  return (
    <div className="stat-list">
      {items.map((stat, index) => (
        <StatItem
          key={stat.label}
          value={stat.value}
          label={stat.label}
          icon={`/clone-assets/assets/img/icon/counter-v1-icon${index + 1}.png`}
        />
      ))}
    </div>
  )
}
