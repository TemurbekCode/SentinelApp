import Reveal from '../components/Reveal'
import StatsStrip from '../components/StatsStrip'
import { STATS } from '../data/landing'

export default function Stats() {
  return (
    <Reveal className="wrap stats" aria-label="Sentinel at a glance">
      <StatsStrip items={STATS} />
    </Reveal>
  )
}
