'use client'
import { useState } from 'react'

import { ResponsiveDialog } from '@/components/others/responsive-dialog'
import TimerInput from '@/components/others/input-timer'

const RestTimer = ({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) => {
  const [minutes, setMinutes] = useState(5)
  const [seconds, setSeconds] = useState(0)

  const handleTimerChange = (mins: number, secs: number) => {
    setMinutes(mins)
    setSeconds(secs)
  }

  return (
    <ResponsiveDialog title='Rest Timer' description='Change how much to rest between sets' open={open} onOpenChange={setOpen}>
      <div className='mt-2 flex justify-center flex-col gap-2'>
        <TimerInput onChange={handleTimerChange} />
      </div>
    </ResponsiveDialog>
  )
}

export default RestTimer
