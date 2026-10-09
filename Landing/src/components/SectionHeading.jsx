export default function SectionHeading({ tag, title, description, id }) {
  return (
    <div className="section-heading">
      <div className="sec-tag">{tag}</div>
      <h2 id={id}>{title}</h2>
      {description && <p className="sec-sub">{description}</p>}
    </div>
  )
}
