export default function StatsStrip({ items }) {
  return (
    <ul className="strip">
      {items.map(({ value, label }) => (
        <li className="cell" key={label}>
          <b>{value}</b>
          <span>{label}</span>
        </li>
      ))}
    </ul>
  )
}
