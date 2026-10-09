import Logo from './Logo'
import { handleLaunch, LAUNCH_ROUTE } from '../utils/navigation'
import { FOOTER_LINKS } from '../data/landing'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-in">
          <div className="foot-brand">
            <Logo />
            <p>
              <b>sen·ti·nel</b> — a guard who keeps watch. A monitoring dashboard that watches your systems and warns before they fail.
            </p>
          </div>
          <nav className="foot-links" aria-label="Footer">
            {FOOTER_LINKS.map((group) => (
              <div key={group.title}>
                <h4>{group.title}</h4>
                {group.links.map((l) =>
                  l.launch ? (
                    <a key={l.label} href={LAUNCH_ROUTE} onClick={(e) => { e.preventDefault(); handleLaunch() }}>{l.label}</a>
                  ) : (
                    <a key={l.label} href={l.href}>{l.label}</a>
                  ),
                )}
              </div>
            ))}
          </nav>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Sentinel — portfolio project</span>
          {/* TEMP: remove this line once a real backend/auth is connected */}
          <span>All data simulated in-browser · no real backend connected</span>
        </div>
      </div>
    </footer>
  )
}
