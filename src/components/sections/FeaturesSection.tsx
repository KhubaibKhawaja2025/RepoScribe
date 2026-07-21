import { Container } from '../layout/Container'

const features = [
  {
    title: 'Structured by default',
    description: 'Consistent headings, install steps, and usage blocks every time.',
  },
  {
    title: 'Repo-aware context',
    description: 'Pull in names, stack, and links from your repository metadata.',
  },
  {
    title: 'Export-ready markdown',
    description: 'Copy or download clean Markdown ready for GitHub.',
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="border-b border-white/5 py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Documentation that matches your product
          </h2>
          <p className="mt-3 text-sm text-zinc-500 sm:text-base">
            Built for teams who care about first impressions and developer experience.
          </p>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-3">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-white/15"
            >
              <h3 className="text-sm font-medium text-zinc-100">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
