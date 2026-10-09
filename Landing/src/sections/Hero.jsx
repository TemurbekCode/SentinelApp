import LiveBadge from '../components/LiveBadge'
import LaunchButton from '../components/LaunchButton'
import Button from '../components/Button'
import DashboardPreview from '../components/DashboardPreview'

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div>
          <div className="fade-up" style={{ '--d': '0ms' }}>
            <LiveBadge>LIVE · SIMULATED STREAM</LiveBadge>
          </div>
          <h1 id="hero-title" className="fade-up" style={{ '--d': '80ms' }}>
            Your infrastructure,<br />under <span className="accent">constant watch.</span>
          </h1>
          <p className="lede fade-up" style={{ '--d': '160ms' }}>
            Sentinel is a real-time monitoring dashboard that watches your servers, services and APIs — tracks CPU, memory, response times and errors, and warns you the moment something crosses the line. A sentinel never blinks.
          </p>
          <div className="hero-cta fade-up" style={{ '--d': '240ms' }}>
            <LaunchButton size="lg">Get started — launch the demo</LaunchButton>
            <Button variant="ghost" size="lg" href="#features">Explore features</Button>
          </div>
          <p className="hero-note fade-up" style={{ '--d': '300ms' }}>
            No signup, no install — opens instantly. <b>Portfolio demo:</b> all data is simulated in the browser.
          </p>
        </div>
        <div className="fade-up preview-wrap" style={{ '--d': '200ms' }}>
          <DashboardPreview />
        </div>
      </div>
    </section>
  )
}
