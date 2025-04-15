'use client'
import { useState } from 'react'

import { ResponsiveDialog } from '@/components/others/responsive-dialog'
import { Button } from '@/components/ui/button'

const Units = ({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) => {
  const [weight, setWeight] = useState(1)
  const [length, setLength] = useState(0)

  return (
    <ResponsiveDialog title='Units' description='Change the way you measure' open={open} onOpenChange={setOpen}>
      <div className='mt-2 flex justify-center flex-col gap-2'>
        <div className='flex items-center justify-between'>
          <div className='text-neutral-500 dark:text-neutral-400'>Weight</div>
          <div className='flex items-center gap-1 p-2'>
            <Button className='cursor-pointer' onClick={() => setWeight(1)} variant={weight === 1 ? 'default' : 'ghost'}>
              kg
            </Button>
            <Button className='cursor-pointer' onClick={() => setWeight(0)} variant={weight === 0 ? 'default' : 'ghost'}>
              lbs
            </Button>
          </div>
        </div>
        <div className='flex items-center justify-between mt-2'>
          <div className='text-neutral-500 dark:text-neutral-400'>Length</div>
          <div className='flex items-center gap-1 p-2'>
            <Button className='cursor-pointer'>meters</Button>
            <Button className='cursor-pointer' variant='ghost'>
              feets
            </Button>
          </div>
        </div>
      </div>
    </ResponsiveDialog>
  )
}

export default Units
