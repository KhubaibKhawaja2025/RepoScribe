import { useCallback, useState } from 'react'
import { Container } from '../layout/Container'
import { ReadmeForm } from './ReadmeForm'
import { OutputPreview } from './OutputPreview'
import { defaultReadmeForm } from '../../types/readme'
import { generateMockReadme } from '../../lib/generateMockReadme'

export function GeneratorSection() {
  const [form, setForm] = useState(defaultReadmeForm)
  const [preview, setPreview] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleGenerate = useCallback(() => {
    setIsGenerating(true)
    setCopied(false)
    window.setTimeout(() => {
      setPreview(generateMockReadme(form))
      setIsGenerating(false)
    }, 450)
  }, [form])

  const handleCopy = useCallback(async () => {
    if (!preview) return
    try {
      await navigator.clipboard.writeText(preview)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }, [preview])

  return (
    <section id="generator" className="py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            README generator
          </h2>
          <p className="mt-3 text-sm text-zinc-500 sm:text-base">
            Configure your README, then preview the output. Backend integration comes next.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
          <ReadmeForm
            value={form}
            onChange={setForm}
            onGenerate={handleGenerate}
            isGenerating={isGenerating}
          />
          <OutputPreview markdown={preview} onCopy={handleCopy} copied={copied} />
        </div>
      </Container>
    </section>
  )
}
