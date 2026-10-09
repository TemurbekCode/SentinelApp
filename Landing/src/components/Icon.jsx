import { memo } from 'react'

const PATHS = {
  shield: (<><path d="M12 2l8 3v6c0 5-3.5 9.6-8 11-4.5-1.4-8-6-8-11V5l8-3z" /><path d="M9 12l2 2 4-4" /></>),
  bolt: <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />,
  bell: (<><path d="M18 8a6 6 0 10-12 0c0 7-3 8-3 8h18s-3-1-3-8" /><path d="M13.7 21a2 2 0 01-3.4 0" /></>),
  chart: <path d="M3 3v18h18M7 15l4-5 3 3 5-8" />,
  list: (<><path d="M8 6h13M8 12h13M8 18h13" /><path d="M3.5 6h.01M3.5 12h.01M3.5 18h.01" /></>),
  server: (<><rect x="3" y="4" width="18" height="7" rx="2" /><rect x="3" y="13" width="18" height="7" rx="2" /><path d="M7 7.5h.01M7 16.5h.01" /></>),
  sliders: (<><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1" /></>),
  globe: (<><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3.5 3 14 0 18M12 3c-3 3.5-3 14 0 18" /></>),
  code: <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12" />,
  database: (<><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></>),
  layers: (<><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5" /></>),
  clock: (<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></>),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
}

function Icon({ name, className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  )
}

export default memo(Icon)
