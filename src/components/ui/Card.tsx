import type { HTMLAttributes } from 'react'

type CardProps = HTMLAttributes<HTMLDivElement> & {
  glow?: boolean
}

export function Card({ glow = false, className = '', ...props }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-white/10 bg-[#111113]/80 backdrop-blur-sm ${glow ? 'glow-border' : ''} ${className}`}
      {...props}
    />
  )
}
