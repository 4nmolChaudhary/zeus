import React from 'react'

import Image from 'next/image'

import Logo from '@/images/icon.png'
import Settings from '@/components/settings/settings'

const DashboardLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-items-center w-full font-[family-name:var(--font-inter-tight)]'>
      <div style={{ backgroundSize: '22.05px auto', backgroundPosition: 'top left', opacity: '0.1' }} className='absolute h-full top-0 right-0 left-0 -z-1 bg-repeat bg-[url(https://framerusercontent.com/images/zkZcqLYKrbf3IcoLGmkQF4odXvY.svg)]'></div>
      <div className='absolute w-full top-0 right-0 left-0 z-10 border-b h-16'></div>
      <main className='flex justify-center h-screen w-full'>
        <div className='lg:w-[948px] border-x w-full flex flex-col justify-start items-center z-10 bg-white dark:bg-[#232323]'>
          <div suppressHydrationWarning={true} className='h-16 w-full flex items-center justify-between text-sm text-center sm:text-left py-4 px-2 border-b font-semibold bg-white dark:bg-[#232323]'>
            <div className='flex items-center'>
              <Image src={Logo} alt='zeus' className='w-6 h-6 mr-1' priority placeholder='blur' blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=' />
              <div>ZEUS</div>
            </div>
            <Settings />
          </div>
          <div className='w-full h-[94%] flex flex-col gap-10 justify-between items-center'>
            <div className='w-full h-full'>{children}</div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DashboardLayout
