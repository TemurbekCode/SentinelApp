import Button from './Button'
import { LAUNCH_ROUTE, handleLaunch } from '../utils/navigation'

// Every "Launch demo / Get started" button goes through here,
// so wiring React Router / auth later is a one-file change.
export default function LaunchButton({ children, onClick: extraOnClick, ...props }) {
  const onClick = (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return
    e.preventDefault()
    extraOnClick?.(e)
    handleLaunch()
  }
  return (
    <Button variant="primary" href={LAUNCH_ROUTE} {...props} onClick={onClick}>
      {children}
    </Button>
  )
}
