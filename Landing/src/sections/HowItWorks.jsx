import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import StepCard from '../components/StepCard'
import { STEPS } from '../data/landing'

export default function HowItWorks() {
  return (
    <section className="section flush-top" id="how" aria-labelledby="how-title">
      <div className="wrap">
        <Reveal>
          <SectionHeading
            id="how-title"
            tag="How it works"
            title="Stream. Detect. Alert."
            description="In production, agents would stream metrics from your infrastructure. In this portfolio version, a realistic simulated feed drives the exact same pipeline."
          />
        </Reveal>
        <ol className="steps">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 100}>
              <StepCard number={String(i + 1).padStart(2, '0')} {...s} />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
