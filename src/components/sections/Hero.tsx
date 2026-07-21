import { Container } from '../layout/Container'
import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgb(94_106_210/0.25),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.03)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
        aria-hidden
      />
      <Container className="relative py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300">
            AI-ready README workflow
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-gradient sm:text-5xl lg:text-6xl">
            Ship polished READMEs in minutes
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            RepoScribe turns repository context into clear, consistent documentation.
            Describe your project once—preview a production-ready README instantly.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#generator"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-white px-5 text-sm font-medium text-zinc-950 shadow-[0_0_0_1px_rgb(255_255_255/0.1)] transition-colors hover:bg-zinc-200"
            >
              Generate README
            </a>
            <Button variant="secondary" size="lg">
              View example
            </Button>
          </div>
          <dl className="mt-14 grid grid-cols-3 gap-4 border-t border-white/5 pt-10 sm:gap-8">
            {[
              { label: 'Setup time', value: '< 2 min' },
              { label: 'Sections', value: '12+' },
              { label: 'Export', value: 'Markdown' },
            ].map((item) => (
              <div key={item.label}>
                <dt className="text-xs text-zinc-500">{item.label}</dt>
                <dd className="mt-1 text-sm font-medium text-zinc-200">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}
