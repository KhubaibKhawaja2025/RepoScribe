import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { FeaturesSection } from './components/sections/FeaturesSection'
import { GeneratorSection } from './components/sections/GeneratorSection'
import { Container } from './components/layout/Container'

function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-zinc-600">
          © {new Date().getFullYear()} RepoScribe. All rights reserved.
        </p>
        <p className="text-xs text-zinc-600">Frontend preview — API coming soon.</p>
      </Container>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeaturesSection />
        <GeneratorSection />
      </main>
      <Footer />
    </div>
  )
}
