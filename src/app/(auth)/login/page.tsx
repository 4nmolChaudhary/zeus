'use client'
import React, { useId, useState } from 'react'

import Image from 'next/image'
import LoginHero from '@/images/login-hero.png'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { EyeIcon, EyeOffIcon } from 'lucide-react'

const Page = () => {
  const id = useId()
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => setIsVisible(prevState => !prevState)

  return (
    <div className='h-full w-full flex flex-col items-center justify-start pt-16'>
      <div className='px-8'>
        <div className='h-20 aspect-square aspect inline-block z-10 bg-gradient-to-b from-black to-black[0.3] dark:from-white/[0.4] dark:to-transparent relative border w-max rounded-sm overflow-hidden'>
          <Image src={LoginHero} alt='zeus' className='w-16' priority placeholder='blur' blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=' />
          <div className='grain w-full h-full absolute top-0 left-0'></div>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-xl md:text-2xl font-medium tracking-tight bg-gradient-to-br from-black to-black[0.3] dark:from-white dark:to-white[0.5] bg-clip-text grad-text'>Login to Zeus</h2>
          <div className='mb-2 text-sm font-[family-name:var(--font-geist-mono)] opacity-50'>Enter your email below to login to your account</div>
        </div>
        <div>
          <label className={`text-sm`}>Email</label>
          <Input placeholder='john@email.com' />
        </div>
        <div className='mt-2'>
          <label className={`text-sm`}>Password</label>
          <div className='relative'>
            <Input id={id} className='pe-9' placeholder='Password' type={isVisible ? 'text' : 'password'} />
            <button className='text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50' type='button' onClick={toggleVisibility} aria-label={isVisible ? 'Hide password' : 'Show password'} aria-pressed={isVisible} aria-controls='password'>
              {isVisible ? <EyeOffIcon size={16} aria-hidden='true' /> : <EyeIcon size={16} aria-hidden='true' />}
            </button>
          </div>
        </div>
        <Button className='mt-4 cursor-pointer w-full'>Continue 💪</Button>
      </div>
    </div>
  )
}

export default Page
