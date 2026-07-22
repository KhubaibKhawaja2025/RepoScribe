import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { FeaturesSection } from './components/sections/FeaturesSection'
import { GeneratorSection } from './components/sections/GeneratorSection'
import { Footer } from './components/layout/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main id="main-content">
        <Hero />
        <FeaturesSection />
        <GeneratorSection />
      </main>
      <Footer />
    </div>
  )
}
