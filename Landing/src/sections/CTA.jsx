import Reveal from '../components/Reveal'
import LaunchButton from '../components/LaunchButton'

export default function CTA() {
  return (
    <section className="section" aria-labelledby="cta-title">
      <Reveal className="wrap">
        <div className="cta">
          <div className="sec-tag">Ready when you are</div>
          <h2 id="cta-title">See it watching.</h2>
          <p>Open the live demo — inject a failure, watch the alerts fire, then watch Sentinel recover. Two minutes, no setup.</p>
          <LaunchButton size="xl">Get started → launch Sentinel</LaunchButton>
          {/* TEMP: remove when auth ships */}
          <p className="cta-note">Register & accounts coming soon — the demo needs no signup.</p>
        </div>
      </Reveal>
    </section>
  )
}
