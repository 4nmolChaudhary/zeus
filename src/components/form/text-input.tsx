import React from 'react'
import { Input } from '@/components/ui/input'

import { cn } from '@/lib/utils'

type Error = {
  message?: string
}

type TextInputProps = React.ComponentProps<'input'> & {
  className?: string
  type?: string
  label?: string
  error?: Error
  containerClasses?: string
  children?: React.ReactNode
}

export const TextInput = ({ className, containerClasses, label, type = 'text', children, ...props }: TextInputProps) => {
  return (
    <div className={cn('mb-2 file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground bg-secondary dark:bg-input/30 border-input w-full min-w-0 rounded-xs border pt-2 pb-1 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm aria-invalid:border-destructive', containerClasses)}>
      <label className={`text-sm ml-3 font-[family-name:var(--font-geist-mono)] font-semibold opacity-50`}>{label}</label>
      <Input type={type} {...props} className='py-0' />
      {children}
    </div>
  )
}
