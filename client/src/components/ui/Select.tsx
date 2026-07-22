import type { SelectHTMLAttributes } from 'react'
import { Label } from './Label'

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string
}

export function Select({ label, id, className = '', children, ...props }: SelectProps) {
  const selectId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="space-y-2">
      {label ? <Label htmlFor={selectId}>{label}</Label> : null}
      <select
        id={selectId}
        className={`h-10 w-full appearance-none rounded-lg border border-white/10 bg-white/[0.03] px-3 text-sm text-zinc-100 transition-colors focus:border-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 ${className}`}
        {...props}
      >
        {children}
      </select>
    </div>
  )
}
