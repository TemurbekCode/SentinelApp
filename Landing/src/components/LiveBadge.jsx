export default function LiveBadge({ children }) {
  return (
    <span className="badge-live">
      <i aria-hidden="true" />
      {children}
    </span>
  )
}
