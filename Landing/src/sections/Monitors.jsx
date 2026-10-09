import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Icon from '../components/Icon'
import { MONITORS } from '../data/landing'

export default function Monitors() {
  return (
    <section className="section flush-top" id="monitors" aria-labelledby="monitors-title">
      <Reveal className="wrap">
        <SectionHeading
          id="monitors-title"
          tag="Coverage"
          title="What Sentinel watches."
          description="Conceptually built for a company’s whole digital footprint — one dashboard, every layer."
        />
        <ul className="chips">
          {MONITORS.map(({ icon, label }) => (
            <li className="chip" key={label}>
              <Icon name={icon} />
              {label}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
