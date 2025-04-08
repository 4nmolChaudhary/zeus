'use client'
import { useEffect, useState, useRef } from 'react'

import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useTheme } from 'next-themes'

import Hero from '@/images/hero.png'
import Logo from '@/images/icon.png'
import { Button } from '@/components/ui/button'

import Login from '@/components/auth/login'
import Register from '@/components/auth/register'

const ThemeToggle = dynamic(() => import('@/components/others/theme-toggle'), { ssr: false })

export default function Home() {
  const { theme } = useTheme()
  const ref = useRef(null)
  const [backgroundImage, setBackgroundImage] = useState('none')
  const [drawerType, setDrawerType] = useState<'login' | 'register' | 'none'>('none')
  const isDarkTheme = theme === 'dark'
  useEffect(() => {
    setBackgroundImage(`linear-gradient(to right,${isDarkTheme ? '#313131' : '#f6f6f6'} 1px,transparent 1px),linear-gradient(to bottom,${isDarkTheme ? '#313131' : '#f6f6f6'} 1px,transparent 1px)`)
    return () => {}
  }, [isDarkTheme])

  return (
    <div className='flex min-h-screen flex-col items-center justify-items-center w-full font-[family-name:var(--font-inter-tight)]'>
      <div style={{ backgroundSize: '22.05px auto', backgroundPosition: 'top left', opacity: '0.1' }} className='absolute h-full top-0 right-0 left-0 -z-1 bg-repeat bg-[url(https://framerusercontent.com/images/zkZcqLYKrbf3IcoLGmkQF4odXvY.svg)]'></div>
      <div className='absolute w-full top-0 right-0 left-0 z-10 border-b h-16'></div>
      <main className='flex justify-center h-screen w-full'>
        <div ref={ref} className='lg:w-[948px] border-x w-full flex flex-col justify-start items-center z-10'>
          <div suppressHydrationWarning={true} className='h-16 w-full flex items-center justify-between text-sm text-center sm:text-left py-4 px-2 border-b font-semibold bg-background/10 backdrop-blur-3xl'>
            <div className='flex items-center'>
              <Image src={Logo} alt='zeus' className='w-6 h-6 mr-1' priority placeholder='blur' blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=' />
              <div>ZEUS</div>
            </div>
            <ThemeToggle />
          </div>
          <div className='w-full flex flex-col gap-10 justify-between items-center' style={{ backgroundSize: '14px 14px', backgroundImage }}>
            <div className='w-full flex flex-col gap-3 justify-center items-center'>
              <h2 className='text-3xl md:text-6xl font-medium mt-10 tracking-tight h-16 bg-gradient-to-br from-black to-black[0.3] dark:from-white dark:to-white[0.5] bg-clip-text grad-text'>Ultimate Workout Logging</h2>
              <div className='px-2 mb-2 text-sm text-center font-[family-name:var(--font-geist-mono)] opacity-75'>A powerful fitness companion designed to track, analyze, and optimize your training progress. Simple, intuitive, and built to help you achieve your fitness goals.</div>
              <Button onClick={() => setDrawerType('login')} className='mb-4 cursor-pointer'>
                Start Now 🔥
              </Button>
            </div>
            <Image src={Hero} alt='zeus' className='w-full' priority placeholder='blur' blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=' />
          </div>
          <div className='px-2 py-6 mb-2 text-sm text-center font-[family-name:var(--font-geist-mono)] opacity-75'>Track every session, stay consistent, and see real progress. For free. Forever.</div>
        </div>
        <Login open={['login'].includes(drawerType)} onRegister={() => setDrawerType('register')} onOpenChange={() => setDrawerType('none')} />
        <Register open={['register'].includes(drawerType)} onLogin={() => setDrawerType('login')} onOpenChange={() => setDrawerType('none')} />
      </main>
    </div>
  )
}

