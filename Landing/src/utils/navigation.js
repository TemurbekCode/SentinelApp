// Single place that decides where "Launch demo" / "Get started" go.
// Today: the standalone simulated dashboard (put sentinel.html into /public).
// Later: swap for React Router, e.g. navigate('/auth') or '/login'.
export const LAUNCH_ROUTE = '/sentinel.html'

export const handleLaunch = () => {
  window.location.assign(LAUNCH_ROUTE)
}
