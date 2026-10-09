export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'What it watches', href: '#monitors' },
  { label: 'How it works', href: '#how' },
  { label: 'Metrics', href: '#metrics' },
]

export const MOCK_STATS = [
  { label: 'CPU', base: 42, unit: '%', jitter: 3, color: 'var(--blue)' },
  { label: 'Memory', base: 68, unit: '%', jitter: 2, color: 'var(--violet)' },
  { label: 'Response', base: 120, unit: 'ms', jitter: 8, color: 'var(--green)' },
]

export const MOCK_ROWS = [
  { name: 'EU-Production-01', value: 'CPU 42% · 120 ms', status: 'ok' },
  { name: 'EU-API-Gateway', value: '1,240 req/min · healthy', status: 'ok' },
  { name: 'DB-Replica', value: 'memory 77% · warning', status: 'warn' },
]

export const STATS = [
  { value: '6', label: 'servers tracked' },
  { value: '5', label: 'services watched' },
  { value: '60-tick', label: 'rolling history' },
  { value: '0', label: 'backend required' },
]

export const FEATURES = [
  { icon: 'bolt', title: 'Real-time metrics', description: 'Live-updating CPU, memory, request rate, response time and error rate — with pause/resume whenever you need a frozen snapshot.' },
  { icon: 'bell', title: 'Threshold alerts', description: 'Define warning and critical limits once. Cross them and Sentinel raises a severity-tagged alert — then auto-resolves it when the system recovers.' },
  { icon: 'chart', title: 'Time-series charts', description: 'Cluster-wide trends plus per-server drill-downs. Every chart is backed by a rolling 60-tick history buffer, not random numbers.' },
  { icon: 'list', title: 'Full activity log', description: 'Every state transition is recorded with a timestamp — alerts, acknowledgements, recoveries, configuration changes. Audit trail included.' },
  { icon: 'server', title: 'Server & service detail', description: 'Click any node for a focused view: its metrics, its chart, its alerts — plus a “force failure” switch to rehearse incidents safely.' },
  { icon: 'sliders', title: 'Limits you control', description: 'Thresholds, tick rate and filters are all adjustable from Settings — changes apply instantly across every server and service.' },
]

export const MONITORS = [
  { icon: 'globe', label: 'Websites & web apps' },
  { icon: 'server', label: 'Servers' },
  { icon: 'code', label: 'APIs' },
  { icon: 'database', label: 'Databases' },
  { icon: 'layers', label: 'Background services' },
  { icon: 'clock', label: 'Application health & uptime' },
]

export const STEPS = [
  { title: 'Stream metrics', description: 'Every tick, servers and services report CPU, memory, latency and errors. History rolls into a 60-tick buffer for trend charts.' },
  { title: 'Detect anomalies', description: 'Each metric is compared against your warning and critical thresholds. Status is derived — never hardcoded — so the UI always reflects the data.' },
  { title: 'Alert & log', description: 'Threshold crossings raise severity-tagged alerts, notify you, and land in the activity log. Recovery auto-resolves the alert.' },
]

// tone → text color token; pill → status badge (healthy | warning | critical)
export const METRICS = [
  { signal: 'System health', example: 'Healthy / Warning / Critical — derived across all nodes', reading: 'healthy', pill: 'healthy' },
  { signal: 'CPU · cluster avg', example: '42%', reading: '42%', tone: 'blue' },
  { signal: 'Memory · cluster avg', example: '68%', reading: '68%', tone: 'violet' },
  { signal: 'Requests', example: 'API gateway throughput', reading: '1,240 req/min', tone: 'green' },
  { signal: 'Response time', example: 'p50 across web tier', reading: '120 ms', tone: 'green' },
  { signal: 'Error rate', example: '5xx share of all requests', reading: '0.8%', tone: 'amber' },
  { signal: 'Uptime', example: 'Worst node, derived from incident time', reading: '99.98%' },
  { signal: 'Alerts', example: 'Warning & critical, ack-able and resolvable', reading: '3 active', pill: 'warning' },
]

export const FOOTER_LINKS = [
  { title: 'Product', links: [
    { label: 'Features', href: '#features' },
    { label: 'Metrics', href: '#metrics' },
    { label: 'Live demo', launch: true },
  ] },
  { title: 'Project', links: [
    { label: 'How it works', href: '#how' },
    { label: 'Coverage', href: '#monitors' },
    { label: 'Back to top', href: '#top' },
  ] },
]
