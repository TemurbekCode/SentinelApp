import { memo } from 'react'

// Decorative line chart used inside the dashboard preview.
// pathLength=100 lets the draw animation work regardless of real path length.
function MiniChart() {
  return (
    <svg className="mini-chart" viewBox="0 0 400 130" aria-hidden="true" focusable="false">
      <g stroke="#1a2436">
        <line x1="0" y1="30" x2="400" y2="30" />
        <line x1="0" y1="65" x2="400" y2="65" />
        <line x1="0" y1="100" x2="400" y2="100" />
      </g>
      <path
        className="draw"
        pathLength="100"
        d="M0,88 C30,80 45,60 70,66 S115,92 140,84 S190,50 220,58 S270,90 300,80 S355,40 400,52"
        fill="none" stroke="#38bdf8" strokeWidth="2.4" strokeLinecap="round"
      />
      <path
        className="draw draw-2"
        pathLength="100"
        d="M0,70 C40,74 60,58 90,62 S150,78 180,72 S240,48 270,56 S330,74 400,64"
        fill="none" stroke="#a78bfa" strokeWidth="2.4" strokeLinecap="round" opacity=".85"
      />
    </svg>
  )
}

export default memo(MiniChart)
