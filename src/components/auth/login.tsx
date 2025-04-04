'use client'
import React, { useId, useState } from 'react'

import { ResponsiveDialog } from '@/components/others/responsive-dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { EyeIcon, EyeOffIcon } from 'lucide-react'

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

  return (
    <ResponsiveDialog title={title} description={desc} open={open} onOpenChange={onOpenChange}>
      <div className='mb-2'>
        <label className={`text-sm`}>Email</label>
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
      <Button className='cursor-pointer w-full'>Continue 💪</Button>
    </ResponsiveDialog>
  )
}

export default Login
