'use client'
import { useState } from 'react'
import useDialogState from '@/hooks/use-dialog-state'
import { useForm } from 'react-hook-form'

import { authClient } from '@/lib/auth-client'
import { Mars, Calendar, Ruler, PersonStanding, UserPen } from 'lucide-react'

import { TextInput } from '@/components/form/text-input'
import { ButtonGroup } from '@/components/form/button-group'
import { ResponsiveDialog } from '@/components/others/responsive-dialog'
import { Button } from '@/components/form/button'

import Image from 'next/image'
import MaleBg from '@/images/male-bg.jpg'

interface FormData {
  firstName: string
  lastName: string
  height: string
  weight: string
  age: string
}

const Account = ({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) => {
  const { data: session } = authClient.useSession()
  const { isOpen: isEditOpen, onOpenChange } = useDialogState()
  const { register, handleSubmit } = useForm<FormData>({ defaultValues: {} })

  const info = [
    { label: 'Gender', value: 'Male', icon: <Mars size={24} className='opacity-75' /> },
    { label: 'Age', value: '26 Y', icon: <Calendar size={24} className='opacity-75' /> },
    { label: 'Height', value: '176 cm', icon: <Ruler size={24} className='opacity-75' /> },
    { label: 'Weight', value: '72.5 kg', icon: <PersonStanding size={24} className='opacity-75' /> },
  ]
  const options = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ]
  const [gender, setGender] = useState(options[0])
  const onSubmit = async (payload: FormData) => console.log(payload)

  return (
    <ResponsiveDialog title='Account' description='Update your information' open={open} onOpenChange={setOpen}>
      <div className='p-3 pb-0 dark:bg-black rounded-sm flex gap-5 items-center my-2 border relative'>
        <Image src={MaleBg} alt='zeus' className='h-20 w-20 dark:filter-none invert' priority placeholder='blur' blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=' />
        <div>
          <div className='h-6 text-lg bg-gradient-to-br from-black to-black[0.5] dark:from-white dark:to-white[0.5] bg-clip-text grad-text'>{session?.user?.name}</div>
          <div className='opacity-50 font-[family-name:var(--font-geist-mono)] text-sm'>{session?.user?.email}</div>
        </div>
        <div onClick={onOpenChange} className='p-3 rounded-full bg-secondary cursor-pointer hover:opacity-75 absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2'>
          <UserPen size={24} className='opacity-75' />
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
      <ResponsiveDialog title='Edit Account' description='Update your personal information' open={isEditOpen} onOpenChange={onOpenChange}>
        <form className='w-full flex flex-col md:grid md:grid-cols-2 gap-2' onSubmit={handleSubmit(onSubmit)}>
          <TextInput {...register('firstName')} label='First Name' placeholder='John' />
          <TextInput {...register('lastName')} label='Last Name' placeholder='Doe' />
          <TextInput {...register('height')} label='Height(cm)' placeholder='176' type='number' />
          <TextInput {...register('weight')} label='Weight(kg)' placeholder='72.5' type='number' />
          <TextInput {...register('age')} label='Age' placeholder='24' type='number' />
          <ButtonGroup selected={gender} onValueChange={setGender} options={options} label='Gender' />
          <Button type='submit' className='cursor-pointer w-full col-span-2' text='Update Account' />
        </form>
      </ResponsiveDialog>
    </ResponsiveDialog>
  )
}

export default Account
