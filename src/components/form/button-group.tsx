import React from 'react'
import { cn } from '@/lib/utils'

type Props = React.ComponentProps<'input'> & {
  label?: string
  containerClasses?: string
  options: { label: string; value: string | number }[]
  value: { label: string; value: string | number }
  onChange: () => void
}

export const ButtonGroup = ({ containerClasses, label, options, value, onChange }: Props) => {
  return (
    <div className={cn('mb-2 w-full min-w-0 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm aria-invalid:border-destructive', containerClasses)}>
      <label className={`text-sm font-[family-name:var(--font-geist-mono)] font-semibold opacity-50`}>{label}</label>
      <div className={`grid grid-cols-${options.length} gap-1 items-center border h-10 w-full min-w-0 rounded-xs bg-transparent p-1 text-base`}>
        {options.map(d => (
          <div className='text-sm text-center cursor-pointer rounded-xs bg-primary text-primary-foreground px-3 py-1.5' key={d.value}>
            {d.label}
          </div>
        ))}
      </div>
    </div>
  )
}
