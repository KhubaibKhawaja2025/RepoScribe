import { Button } from '../ui/Button'
import { Card } from '../ui/Card'

type OutputPreviewProps = {
  markdown: string | null
  onCopy?: () => void
  copied?: boolean
}

export function OutputPreview({ markdown, onCopy, copied }: OutputPreviewProps) {
  const isEmpty = !markdown

  return (
    <Card glow className="flex min-h-[32rem] flex-col overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs font-medium text-zinc-500">README.md</span>
        </div>
        <Button
          variant="secondary"
          size="sm"
          type="button"
          onClick={onCopy}
          disabled={isEmpty}
        >
          {copied ? 'Copied' : 'Copy markdown'}
        </Button>
      </div>
      <div className="flex-1 overflow-auto p-5 sm:p-6">
        {isEmpty ? (
          <div className="flex h-full min-h-64 flex-col items-center justify-center text-center">
            <p className="text-sm font-medium text-zinc-400">No preview yet</p>
            <p className="mt-2 max-w-xs text-sm text-zinc-600">
              Complete the form and click Generate preview to see your README here.
            </p>
          </div>
        ) : (
          <pre className="font-mono text-[13px] leading-relaxed whitespace-pre-wrap text-zinc-300">
            {markdown}
          </pre>
        )}
      </div>
    </Card>
  )
}
