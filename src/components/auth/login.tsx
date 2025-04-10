'use client'
import React, { useId, useState, useEffect } from 'react'

import { ResponsiveDialog } from '@/components/others/responsive-dialog'
import { Button } from '@/components/form/button'
import { TextInput } from '@/components/form/text-input'
import { toast } from 'sonner'

import { EyeIcon, EyeOffIcon } from 'lucide-react'

import { authClient } from '@/lib/auth-client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { loginSchema } from '@/schemas/auth'
import { DASHBOARD } from '@/constants/routes'

type LoginProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  onRegister: React.MouseEventHandler<HTMLButtonElement>
}
const title = 'Login to Zeus'
const desc = 'Enter your email below to login to your account'

const Login = ({ open, onOpenChange, onRegister }: LoginProps) => {
  const id = useId()
  const [isVisible, setIsVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const toggleVisibility = () => setIsVisible(prevState => !prevState)

  const { register, handleSubmit, formState, reset } = useForm({ resolver: zodResolver(loginSchema), defaultValues: { email: '', password: '' } })
  const { errors } = formState

  useEffect(() => {
    reset()
    return () => {}
  }, [reset])
  //
  const onError = ({ error }: { error: { code?: string; message: string } }) => {
    toast.error(error?.message || 'Something went wrong !')
    setLoading(false)
  }
  const onSubmit = async (payload: { email: string; password: string }) => await authClient.signIn.email({ ...payload, callbackURL: DASHBOARD }, { onRequest: () => setLoading(true), onError })

  return (
    <ResponsiveDialog title={title} description={desc} open={open} onOpenChange={onOpenChange}>
      <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
        <TextInput error={errors.email} {...register('email')} label='Email' placeholder='john@email.com' autoComplete='new-password' containerClasses='mt-2' />
        <TextInput error={errors.password} {...register('password')} id={id} label='Password' placeholder='*********' autoComplete='new-password' type={isVisible ? 'text' : 'password'} containerClasses='relative mb-4'>
          <button className='text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute top-2.5 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50' type='button' onClick={toggleVisibility} aria-label={isVisible ? 'Hide password' : 'Show password'} aria-pressed={isVisible} aria-controls='password'>
            {isVisible ? <EyeOffIcon size={16} aria-hidden='true' /> : <EyeIcon size={16} aria-hidden='true' />}
          </button>
        </TextInput>
        <Button type='submit' className='cursor-pointer w-full' text='Continue 💪' loading={loading} loadingText='Signing In...' />
        <p className='mb-1 mt-3 text-center text-sm text-neutral-500 dark:text-neutral-400'>
          <span>
            {`Don't have an account?`}
            <button onClick={onRegister} type='button' className='font-medium ml-1 cursor-pointer text-neutral-700 underline-offset-2 outline-hidden hover:underline focus:underline dark:text-neutral-300'>
              Register
            </button>
          </span>
        </p>
      </form>
    </ResponsiveDialog>
  )
}

export default Login
