import { memo, useEffect, useState } from 'react'
import MiniChart from './MiniChart'
import useReducedMotion from '../hooks/useReducedMotion'
import { MOCK_STATS, MOCK_ROWS } from '../data/landing'

// Own state so only the three numbers re-render, not the whole preview.
function StatValue({ base, unit, jitter, color, animate }) {
  const [value, setValue] = useState(base)
  useEffect(() => {
    if (!animate) { setValue(base); return }
    const id = setInterval(() => {
      setValue(base + Math.round((Math.random() * 2 - 1) * jitter))
    }, 2600)
    return () => clearInterval(id)
  }, [base, jitter, animate])
  return <b style={{ color }}>{value}{unit}</b>
}

function DashboardPreview() {
  const reduced = useReducedMotion()
  return (
    <div
      className="mock"
      role="img"
      aria-label="Preview of the Sentinel dashboard: CPU 42%, memory 68%, response 120 milliseconds, three servers listed, one with a memory warning."
    >
      <div aria-hidden="true">
        <div className="mock-bar"><i /><i /><i /><span className="mock-title">sentinel / dashboard</span></div>
        <div className="mock-stats">
          {MOCK_STATS.map((s) => (
            <div className="mstat" key={s.label}>
              <span>{s.label}</span>
              <StatValue {...s} animate={!reduced} />
            </div>
          ))}
        </div>
        <MiniChart />
        <div className="mock-rows">
          {MOCK_ROWS.map((r) => (
            <div className="mrow" key={r.name}>
              <span className={`dot ${r.status}`} />
              <b>{r.name}</b>
              <span className="val">{r.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default memo(DashboardPreview)
