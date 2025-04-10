'use client'
import { useState } from 'react'

import { Settings as SettingsIcon } from 'lucide-react'
import { ResponsiveDialog } from '@/components/others/responsive-dialog'

import ThemeToggle from '@/components/others/theme-toggle'
const Settings = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <SettingsIcon size={18} className='cursor-pointer mr-2' onClick={() => setOpen(true)} />
      <ResponsiveDialog title='Settings' description='Update your preferences' open={open} onOpenChange={setOpen}>
        <ThemeToggle />
      </ResponsiveDialog>
    </div>
  )
}

export default Settings
