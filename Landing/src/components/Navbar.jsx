import { useCallback, useEffect, useState } from 'react'
import Logo from './Logo'
import Icon from './Icon'
import LaunchButton from './LaunchButton'
import useScrolled from '../hooks/useScrolled'
import { NAV_LINKS } from '../data/landing'

export default function Navbar() {
  const scrolled = useScrolled(10)
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])

  // Escape closes; resizing to desktop closes. Listeners exist only while open.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth > 940 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <header className={`nav${scrolled || open ? ' scrolled' : ''}`}>
      <nav className="wrap nav-in" aria-label="Primary">
        <Logo onClick={close} />
        <ul className="nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>
        <LaunchButton className="nav-cta">Launch demo →</LaunchButton>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </nav>

      <div id="mobile-menu" className={`mobile-menu${open ? ' open' : ''}`}>
        <ul className="wrap mobile-menu-in">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={close} tabIndex={open ? 0 : -1}>{l.label}</a>
            </li>
          ))}
          <li>
            <LaunchButton className="mobile-cta" onClick={close} tabIndex={open ? 0 : -1}>
              Launch demo →
            </LaunchButton>
          </li>
        </ul>
      </div>
    </header>
  )
}
