import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import FeatureCard from '../components/FeatureCard'
import { FEATURES } from '../data/landing'

export default function Features() {
  return (
    <section className="section" id="features" aria-labelledby="features-title">
      <div className="wrap">
        <Reveal>
          <SectionHeading
            id="features-title"
            tag="Features"
            title="Everything a watchman needs."
            description="Built around one loop: stream → detect → alert → log. No noise, no clutter — just the state of your systems, honestly presented."
          />
        </Reveal>
        <div className="grid3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 80}>
              <FeatureCard {...f} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
