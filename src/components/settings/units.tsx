'use client'
import { useState } from 'react'

import { ResponsiveDialog } from '@/components/others/responsive-dialog'
import { Button } from '@/components/ui/button'
import { LucideBellDot } from 'lucide-react'

const Units = ({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) => {
  const [weight, setWeight] = useState(1)
  const [length, setLength] = useState(0)
  const units = ['kg', 'lbs', 'meter', 'feets']

  return (
    <ResponsiveDialog title='Units' description='Change the way you measure' open={open} onOpenChange={setOpen}>
      <div className='mt-2 flex justify-center flex-col gap-2'>
        <div className='grid grid-cols-2 md:grid-cols-4 mt-3 gap-2'>
          <div className='text-sm opacity-80 col-span-2'>Weight</div>
          <div className='text-sm opacity-80 col-span-2'>Length</div>
          {units?.map((unit, index) => (
            <div onClick={() => console.log(unit)} key={unit} className={`flex items-center flex-col justify-center rounded-sm py-2 cursor-pointer md:aspect-square bg-secondary border hover:bg-background/50`}>
              {unit}
            </div>
          ))}
        </div>
      </div>
    </ResponsiveDialog>
  )
}

export default Units
