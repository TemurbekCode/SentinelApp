import Icon from './Icon'

export default function Logo({ href = '#top', onClick }) {
  return (
    <a className="logo" href={href} onClick={onClick} aria-label="Sentinel — back to top">
      <Icon name="shield" />
      <b>SENTINEL</b>
    </a>
  )
}
