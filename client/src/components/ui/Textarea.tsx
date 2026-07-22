import type { TextareaHTMLAttributes } from 'react'
import { Label } from './Label'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string
  hint?: string
}

export function Textarea({ label, hint, id, className = '', ...props }: TextareaProps) {
  const textareaId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="space-y-2">
      {label ? <Label htmlFor={textareaId}>{label}</Label> : null}
      <textarea
        id={textareaId}
        className={`min-h-28 w-full resize-y rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 transition-colors focus:border-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 ${className}`}
        {...props}
      />
      {hint ? <p className="text-xs text-zinc-500">{hint}</p> : null}
    </div>
  )
}
