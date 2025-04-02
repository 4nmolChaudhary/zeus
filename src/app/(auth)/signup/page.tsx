'use client'
import React from 'react'

import Image from 'next/image'
import LoginHero from '@/images/login-hero.png'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const Page = () => {
  return (
    <div className='h-full w-full flex flex-col items-center justify-center'>
      <div className='px-8'>
        <div className='h-20 aspect-square aspect inline-block z-10 bg-gradient-to-b from-black to-black[0.3] dark:from-white/[0.4] dark:to-transparent relative border w-max rounded-sm overflow-hidden'>
          <Image src={LoginHero} alt='zeus' className='w-16' priority placeholder='blur' blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=' />
          <div className='grain w-full h-full absolute top-0 left-0'></div>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-xl md:text-2xl font-medium tracking-tight bg-gradient-to-br from-black to-black[0.3] dark:from-white dark:to-white[0.5] bg-clip-text grad-text'>Sign Up to Zeus</h2>
          <div className='mb-2 text-sm font-[family-name:var(--font-geist-mono)] opacity-50'>Enter your email below to create to your account</div>
        </div>
        <div>
          <label className={`text-sm`}>Email</label>
          <Input placeholder='john@email.com' />
        </div>
        <Button className='mt-4 cursor-pointer w-full'>Continue 💪</Button>
      </div>
    </div>
  )
}

export default Page
