import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Stats from './sections/Stats'
import Features from './sections/Features'
import Monitors from './sections/Monitors'
import HowItWorks from './sections/HowItWorks'
import Metrics from './sections/Metrics'
import CTA from './sections/CTA'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#features">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Monitors />
        <HowItWorks />
        <Metrics />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
