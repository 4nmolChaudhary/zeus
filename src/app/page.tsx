'use client'
import { Button } from '@/components/ui/button'

import Image from 'next/image'
import Hero from '@/images/hero.png'

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-items-center w-full font-[family-name:var(--font-inter-tight)]'>
      <div style={{ backgroundSize: '22.05px auto', backgroundPosition: 'top left', opacity: '0.1' }} className='absolute h-full top-0 right-0 left-0 -z-1 bg-repeat bg-[url(https://framerusercontent.com/images/zkZcqLYKrbf3IcoLGmkQF4odXvY.svg)]'></div>
      <div className='absolute w-full top-0 right-0 left-0 z-10 border-b h-16'></div>
      <main className='flex justify-center h-screen w-full'>
        <div className='lg:w-[948px] bg-white border-x w-full flex flex-col justify-start items-center z-10'>
          <div className='h-16 w-full flex items-center text-sm text-center sm:text-left py-4 px-2 border-b font-semibold'>⚡ZEUS</div>
          <div className='w-full flex flex-col gap-3 justify-center items-center' style={{ backgroundSize: '14px 14px', backgroundImage: `linear-gradient(to right,#f6f6f6 1px,transparent 1px),linear-gradient(to bottom,#f6f6f6 1px,transparent 1px)` }}>
            <h2 className='text-6xl font-semibold mt-10'>Ultimate Workout Logging</h2>
            <div className='px-2 mb-2 text-sm text-center font-[family-name:var(--font-geist-mono)]'>A powerful fitness companion designed to track, analyze, and optimize your training progress. Simple, intuitive, and built to help you achieve your fitness goals.</div>
            <Button className='mb-4 cursor-pointer'>Start Now 🔥</Button>
            <Image src={Hero} alt='zeus' className='w-full' priority placeholder='blur' blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=' />
          </div>
        </div>
      </main>
    </div>
  )
}

