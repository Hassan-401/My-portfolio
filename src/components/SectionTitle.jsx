import Icon from './Icons.jsx'

export default function SectionTitle({ icon, title, subtitle }) {
  return (
    <div className="section-title">
      <span className="section-title__icon">
        <Icon name={icon} size={22} />
      </span>
      <h2>{title}</h2>
      <span className="section-title__bar" />
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
    </div>
  )
}
