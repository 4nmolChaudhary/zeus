'use client'
import { useState } from 'react'

import { Settings as SettingsIcon, Palette, TimerReset, UserCog, Weight } from 'lucide-react'
import { ResponsiveDialog } from '@/components/others/responsive-dialog'

import { startCase } from 'lodash'

import ThemeToggle from '@/components/others/theme-toggle'
const Settings = () => {
  const [open, setOpen] = useState(false)
  const items = ['appearance', 'restTimer', 'units', 'account']
  const icons = {
    [items[0]]: <Palette size={24} className='cursor-pointer mb-2 opacity-75' />,
    [items[1]]: <TimerReset size={24} className='cursor-pointer mb-2 opacity-75' />,
    [items[2]]: <Weight size={24} className='cursor-pointer mb-2 opacity-75' />,
    [items[3]]: <UserCog size={24} className='cursor-pointer mb-2 opacity-75' />,
  }
  return (
    <div>
      <SettingsIcon size={18} className='cursor-pointer mr-2' onClick={() => setOpen(true)} />
      <ResponsiveDialog title='Settings' description='Update your preferences' open={open} onOpenChange={setOpen}>
        <div className='grid grid-cols-2 md:grid-cols-4 mt-3 gap-2'>
          {items?.map(item => (
            <div key={item} className='flex items-center flex-col justify-center bg-secondary border rounded-sm py-2 aspect-square cursor-pointer hover:bg-background/50'>
              {icons[item]}
              <span className='text-sm opacity-80'>{startCase(item)}</span>
            </div>
          ))}
        </div>
        {/* <ThemeToggle /> */}
      </ResponsiveDialog>
    </div>
  )
}

export default Settings
