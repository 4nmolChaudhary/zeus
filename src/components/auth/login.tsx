'use client'
import React, { useId, useState } from 'react'

import { ResponsiveDialog } from '@/components/others/responsive-dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { EyeIcon, EyeOffIcon } from 'lucide-react'

import { authClient } from '@/lib/auth-client'

type LoginProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}
const title = 'Login to Zeus'
const desc = 'Enter your email below to login to your account'

const Login = ({ open, onOpenChange }: LoginProps) => {
  const id = useId()
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => setIsVisible(prevState => !prevState)

  const handleSubmit = async () => {
    console.log('login')
    const { data, error } = await authClient.signUp.email(
      { email: 'john@email.com', password: 'test@123', name: 'John Doe' },
      {
        onRequest: ctx => {
          console.log(ctx)
        },
        onSuccess: ctx => {
          console.log(ctx)
        },
        onError: ctx => {
          console.log(ctx)
        },
      }
    )
    console.log(data, error)
  }

  return (
    <ResponsiveDialog title={title} description={desc} open={open} onOpenChange={onOpenChange}>
      <div className='mb-2 file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full min-w-0 rounded-xs border bg-transparent pt-2 pb-1 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm aria-invalid:border-destructive'>
        <label className={`text-sm ml-3 font-[family-name:var(--font-geist-mono)] font-semibold opacity-50`}>Email</label>
        <Input placeholder='john@email.com' autoComplete='new-password' />
      </div>
      <div className='mb-4'>
        <label className={`text-sm`}>Password</label>
        <div className='relative'>
          <Input id={id} className='pe-9' placeholder='Password' autoComplete='new-password' type={isVisible ? 'text' : 'password'} />
          <button className='text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50' type='button' onClick={toggleVisibility} aria-label={isVisible ? 'Hide password' : 'Show password'} aria-pressed={isVisible} aria-controls='password'>
            {isVisible ? <EyeOffIcon size={16} aria-hidden='true' /> : <EyeIcon size={16} aria-hidden='true' />}
          </button>
        </div>
      </div>
      <Button onClick={handleSubmit} className='cursor-pointer w-full'>
        Continue 💪
      </Button>
    </ResponsiveDialog>
  )
}

export default Login
