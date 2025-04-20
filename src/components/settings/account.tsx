'use client'
import { useState } from 'react'
import { authClient } from '@/lib/auth-client'
import { Mars, Calendar, Ruler, PersonStanding } from 'lucide-react'

import { ResponsiveDialog } from '@/components/others/responsive-dialog'
import { Button } from '@/components/form/button'

import Image from 'next/image'
import MaleBg from '@/images/male-bg.jpg'

const Account = ({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) => {
  const { data: session } = authClient.useSession()
  const info = [
    { label: 'Gender', value: 'Male', icon: <Mars size={24} className='opacity-75' /> },
    { label: 'Age', value: '26 Y', icon: <Calendar size={24} className='opacity-75' /> },
    { label: 'Height', value: '176 cm', icon: <Ruler size={24} className='opacity-75' /> },
    { label: 'Weight', value: '72.5 kg', icon: <PersonStanding size={24} className='opacity-75' /> },
  ]
  return (
    <ResponsiveDialog title='Account' description='Update your information' open={open} onOpenChange={setOpen}>
      <div className='p-3 pb-0 dark:bg-black rounded-sm flex gap-5 items-center my-2 border'>
        <Image src={MaleBg} alt='zeus' className='h-20 w-20 dark:filter-none invert' priority placeholder='blur' blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=' />
        <div>
          <div className='h-6 text-lg bg-gradient-to-br from-black to-black[0.5] dark:from-white dark:to-white[0.5] bg-clip-text grad-text'>{session?.user?.name}</div>
          <div className='opacity-50 font-[family-name:var(--font-geist-mono)] text-sm'>{session?.user?.email}</div>
        </div>
      </div>
      <div className='w-full grid md:grid-cols-2 gap-2'>
        {info.map(({ label, value, icon }) => (
          <div key={label} className='flex items-center gap-5 rounded-sm p-2 cursor-pointer bg-secondary border hover:bg-background/50'>
            <div className='p-3 bg-background rounded-sm'>{icon}</div>
            <div>
              <div className='text-sm text-neutral-500 dark:text-neutral-400 font-[family-name:var(--font-geist-mono)]'>{label}</div>
              <div className='text-sm opacity-90'>{value}</div>
            </div>
          </div>
        ))}
      </div>
      <Button className='cursor-pointer w-full mt-2' text='Update Account' />
    </ResponsiveDialog>
  )
}

export default Account
