import { Container } from './Container'
import { Button } from '../ui/Button'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Generator', href: '#generator' },
  { label: 'Docs', href: '#generator' },
]

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2.5">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm font-semibold text-white shadow-[inset_0_1px_0_0_rgb(255_255_255/0.06)]">
        R
      </span>
      <span className="text-sm font-semibold tracking-tight text-white">RepoScribe</span>
    </a>
  )
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#09090b]/80 backdrop-blur-xl">
      <Container className="flex h-14 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-md px-3 py-1.5 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Sign in
          </Button>
          <a
            href="#generator"
            className="inline-flex h-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 px-3 text-xs font-medium text-zinc-100 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.04)] transition-colors hover:bg-white/10"
          >
            Get started
          </a>
        </div>
      </Container>
    </header>
  )
}
