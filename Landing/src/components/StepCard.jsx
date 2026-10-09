import { memo } from 'react'

function StepCard({ number, title, description }) {
  return (
    <article className="step">
      <span className="step-num" aria-hidden="true">{number}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

export default memo(StepCard)
