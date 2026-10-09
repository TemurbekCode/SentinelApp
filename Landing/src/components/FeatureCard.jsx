import { memo } from 'react'
import Icon from './Icon'

function FeatureCard({ icon, title, description }) {
  return (
    <article className="card">
      <div className="card-icon">
        <Icon name={icon} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

export default memo(FeatureCard)
