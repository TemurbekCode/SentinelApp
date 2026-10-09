// Renders <a> when href is given, otherwise <button>.
export default function Button({ variant = 'default', size, href, onClick, children, className = '', ...rest }) {
  const cls = ['btn', variant !== 'default' && variant, size, className].filter(Boolean).join(' ')
  if (href) {
    return (
      <a className={cls} href={href} onClick={onClick} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={cls} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}
