import type { LabelHTMLAttributes } from 'react'

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>

export function Label({ className = '', ...props }: LabelProps) {
  return (
    <label
      className={`block text-xs font-medium tracking-wide text-zinc-400 uppercase ${className}`}
      {...props}
    />
  )
}
