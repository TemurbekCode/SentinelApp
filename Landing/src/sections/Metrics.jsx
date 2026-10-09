import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import MetricsTable from '../components/MetricsTable'
import { METRICS } from '../data/landing'

export default function Metrics() {
  return (
    <section className="section flush-top" id="metrics" aria-labelledby="metrics-title">
      <Reveal className="wrap">
        <SectionHeading
          id="metrics-title"
          tag="Metrics"
          title="The numbers that matter."
          description="A live view of the kind of data Sentinel surfaces — from cluster health down to single-node response times."
        />
        <MetricsTable rows={METRICS} />
      </Reveal>
    </section>
  )
}
