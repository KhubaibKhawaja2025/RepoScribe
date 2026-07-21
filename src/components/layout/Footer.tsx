import { Container } from './Container'

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-zinc-600">
          © {new Date().getFullYear()} RepoScribe. All rights reserved.
        </p>
        <p className="text-xs text-zinc-600">AI-powered README generation coming soon.</p>
      </Container>
    </footer>
  )
}