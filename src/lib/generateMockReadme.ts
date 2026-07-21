import type { ReadmeFormData } from '../types/readme'

function parseStack(raw: string): string[] {
  return raw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
}

function repoSlug(repoUrl: string, projectName: string): string {
  if (!repoUrl.trim()) return projectName.trim() || 'my-project'
  try {
    const path = new URL(repoUrl).pathname.replace(/^\//, '').replace(/\.git$/, '')
    const parts = path.split('/').filter(Boolean)
    return (parts[parts.length - 1] ?? projectName) || 'my-project'
  } catch {
    return projectName.trim() || 'my-project'
  }
}

export function generateMockReadme(data: ReadmeFormData): string {
  const name = data.projectName.trim() || 'My Project'
  const slug = repoSlug(data.repoUrl, name)
  const stack = parseStack(data.techStack)
  const desc =
    data.description.trim() ||
    (data.tone === 'friendly'
      ? `Hey! ${name} is a project we're building to solve real problems.`
      : data.tone === 'minimal'
        ? `${name}.`
        : `${name} is a modern software project built for clarity and maintainability.`)

  const lines: string[] = []

  lines.push(`# ${name}`)
  lines.push('')

  if (data.sections.badges) {
    lines.push(
      '![License](https://img.shields.io/badge/license-MIT-blue.svg)',
      '![Build](https://img.shields.io/badge/build-passing-brightgreen.svg)',
      stack.length > 0
        ? `![Stack](https://img.shields.io/badge/stack-${encodeURIComponent(stack[0]!)}-555555.svg)`
        : '',
    )
    lines.push('')
  }

  lines.push(desc)
  lines.push('')

  if (data.sections.features) {
    lines.push('## Features')
    lines.push('')
    if (data.tone === 'minimal') {
      lines.push('- Core functionality')
      lines.push('- Simple setup')
    } else {
      lines.push('- Clear project structure and documentation')
      lines.push('- Fast local development workflow')
      lines.push('- Production-ready defaults')
      if (stack.length) {
        lines.push(`- Built with ${stack.join(', ')}`)
      }
    }
    lines.push('')
  }

  if (data.sections.installation) {
    lines.push('## Installation')
    lines.push('')
    lines.push('```bash')
    lines.push(`git clone ${data.repoUrl.trim() || `https://github.com/you/${slug}.git`}`)
    lines.push(`cd ${slug}`)
    lines.push('npm install')
    lines.push('```')
    lines.push('')
  }

  if (data.sections.usage) {
    lines.push('## Usage')
    lines.push('')
    lines.push('```bash')
    lines.push('npm run dev')
    lines.push('```')
    lines.push('')
    lines.push(
      data.tone === 'friendly'
        ? 'Open the URL shown in your terminal and start hacking.'
        : 'Start the development server and open the local URL in your browser.',
    )
    lines.push('')
  }

  if (data.sections.contributing) {
    lines.push('## Contributing')
    lines.push('')
    lines.push('Contributions are welcome. Please open an issue before submitting large changes.')
    lines.push('')
  }

  if (data.sections.license) {
    lines.push('## License')
    lines.push('')
    lines.push(`Distributed under the ${data.license || 'MIT'} License.`)
  }

  return lines.filter((line) => line !== undefined).join('\n').trimEnd()
}
