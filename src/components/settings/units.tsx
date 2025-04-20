'use client'
import { useState } from 'react'

import { ResponsiveDialog } from '@/components/others/responsive-dialog'
import { Button } from '@/components/form/button'
import { Check } from 'lucide-react'

import { Unit } from '@/types/preferences'

const Units = ({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) => {
  const [units, setUnits] = useState({ weight: 0, length: 0 })
  const values: Unit[] = [
    { type: 'weight', label: 'kg', value: 0 },
    { type: 'weight', label: 'lbs', value: 1 },
    { type: 'length', label: 'meter', value: 0 },
    { type: 'length', label: 'feets', value: 1 },
  ]
  const handleUnitChange = (unit: Unit) => setUnits({ ...units, [unit.type]: unit.value })
  const onSubmit = () => {
    console.log(units)
  }

  return (
    <ResponsiveDialog title='Units' description='Change the way you measure' open={open} onOpenChange={setOpen}>
      <div className='mt-2 flex justify-center flex-col gap-2'>
        <div className='grid grid-cols-2 md:grid-cols-4 mt-3 gap-2'>
          <div className='text-sm opacity-80 col-span-2'>Weight</div>
          <div className='text-sm opacity-80 col-span-2'>Length</div>
          {values?.map(unit => (
            <div onClick={() => handleUnitChange(unit)} key={unit?.label} className={`flex items-center flex-col justify-center rounded-sm py-2 cursor-pointer md:aspect-square bg-secondary border hover:bg-background/50 relative`}>
              {unit?.label}
              {units[unit.type] === unit.value && <Check size={18} className='opacity-75 absolute right-2 top-2' />}
            </div>
          ))}
        </div>
        <Button onClick={onSubmit} className='cursor-pointer w-full' text='Update Settings' />
      </div>
    </ResponsiveDialog>
  )
}

export default Units
