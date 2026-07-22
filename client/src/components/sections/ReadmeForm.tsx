import type { FormEvent } from 'react'
import type { ReadmeFormData, ReadmeSections } from '../../types/readme'
import { Input } from '../ui/Input'
import { Textarea } from '../ui/Textarea'
import { Select } from '../ui/Select'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'

type ReadmeFormProps = {
  value: ReadmeFormData
  onChange: (next: ReadmeFormData) => void
  onGenerate: () => void
  isGenerating?: boolean
}

const sectionLabels: { key: keyof ReadmeSections; label: string }[] = [
  { key: 'badges', label: 'Badges' },
  { key: 'features', label: 'Features' },
  { key: 'installation', label: 'Installation' },
  { key: 'usage', label: 'Usage' },
  { key: 'contributing', label: 'Contributing' },
  { key: 'license', label: 'License' },
]

export function ReadmeForm({ value, onChange, onGenerate, isGenerating }: ReadmeFormProps) {
  function patch(partial: Partial<ReadmeFormData>) {
    onChange({ ...value, ...partial })
  }

  function toggleSection(key: keyof ReadmeSections) {
    onChange({
      ...value,
      sections: { ...value.sections, [key]: !value.sections[key] },
    })
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    onGenerate()
  }

  return (
    <Card className="p-6 sm:p-8">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white">Project details</h2>
        <p className="mt-1 text-sm text-zinc-500">
          Fill in the basics. Preview updates when you generate—no API calls yet.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          label="Repository URL"
          placeholder="https://github.com/you/your-repo"
          value={value.repoUrl}
          onChange={(e) => patch({ repoUrl: e.target.value })}
        />
        <div className="grid gap-5 sm:grid-cols-2">
          <Input
            label="Project name"
            placeholder="RepoScribe"
            value={value.projectName}
            onChange={(e) => patch({ projectName: e.target.value })}
          />
          <Input
            label="License"
            placeholder="MIT"
            value={value.license}
            onChange={(e) => patch({ license: e.target.value })}
          />
        </div>
        <Textarea
          label="Description"
          placeholder="What does this project do? Who is it for?"
          value={value.description}
          onChange={(e) => patch({ description: e.target.value })}
        />
        <Input
          label="Tech stack"
          hint="Comma-separated list"
          placeholder="React, TypeScript, Node.js"
          value={value.techStack}
          onChange={(e) => patch({ techStack: e.target.value })}
        />
        <Select
          label="Tone"
          value={value.tone}
          onChange={(e) => patch({ tone: e.target.value as ReadmeFormData['tone'] })}
        >
          <option value="professional">Professional</option>
          <option value="friendly">Friendly</option>
          <option value="minimal">Minimal</option>
        </Select>
        <fieldset>
          <legend className="mb-3 block text-xs font-medium tracking-wide text-zinc-400 uppercase">
            Include sections
          </legend>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {sectionLabels.map(({ key, label }) => {
              const checked = value.sections[key]
              return (
                <label
                  key={key}
                  className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors ${
                    checked
                      ? 'border-indigo-500/40 bg-indigo-500/10 text-zinc-100'
                      : 'border-white/10 bg-white/[0.02] text-zinc-400 hover:border-white/15'
                  }`}
                >
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={checked}
                    onChange={() => toggleSection(key)}
                  />
                  <span
                    className={`h-3.5 w-3.5 rounded border ${
                      checked ? 'border-indigo-400 bg-indigo-500' : 'border-zinc-600 bg-transparent'
                    }`}
                    aria-hidden
                  />
                  {label}
                </label>
              )
            })}
          </div>
        </fieldset>
        <Button type="submit" size="lg" className="w-full" disabled={isGenerating}>
          {isGenerating ? 'Generating…' : 'Generate preview'}
        </Button>
      </form>
    </Card>
  )
}
