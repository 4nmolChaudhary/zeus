'use client'
import { useState } from 'react'

import { Settings as SettingsIcon, Palette, TimerReset, UserCog, Weight, LogOut } from 'lucide-react'
import { ResponsiveDialog } from '@/components/others/responsive-dialog'

import { startCase } from 'lodash'

import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
// import ThemeToggle from '@/components/others/theme-toggle'
const Settings = () => {
  const [open, setOpen] = useState(false)
  const items = ['appearance', 'restTimer', 'units', 'account', 'logOut', 'credit']
  const router = useRouter()
  const icons = {
    [items[0]]: <Palette size={24} className='cursor-pointer mb-2 opacity-75' />,
    [items[1]]: <TimerReset size={24} className='cursor-pointer mb-2 opacity-75' />,
    [items[2]]: <Weight size={24} className='cursor-pointer mb-2 opacity-75' />,
    [items[3]]: <UserCog size={24} className='cursor-pointer mb-2 opacity-75' />,
    [items[4]]: <LogOut size={24} className='cursor-pointer mb-2 opacity-75' />,
  }
  const logOut = async () => await authClient.signOut({ fetchOptions: { onSuccess: () => router.push('/') } })
  const openGithub = () => window.open('https://github.com/4nmolChaudhary', '_')
  const handleClick = (type: string) => {
    if (type === 'logOut') return logOut()
    if (type === 'credit') return openGithub()
    console.log(type)
  }
  return (
    <div>
      <SettingsIcon size={18} className='cursor-pointer mr-2' onClick={() => setOpen(true)} />
      <ResponsiveDialog title='Settings' description='Update your preferences' open={open} onOpenChange={setOpen}>
        <div className='grid grid-cols-2 md:grid-cols-4 mt-3 gap-2'>
          {items?.map((item, index) => (
            <div onClick={() => handleClick(item)} key={item} className={`flex items-center flex-col justify-center rounded-sm py-2 cursor-pointer ${index === 5 ? 'md:col-span-3 col-span-2' : 'md:aspect-square'} ${index === 4 ? `md:col-span-1 col-span-2 bg-rose-900 border border-rose-600 hover:bg-rose-600/50` : `bg-secondary border hover:bg-background/50`}`}>
              {index !== 5 ? (
                <>
                  {icons[item]}
                  <span className='text-sm opacity-80'>{startCase(item)}</span>
                </>
              ) : (
                <div className='md:block flex items-center'>
                  <div className='opacity-70 text-xs mr-2'>Built with 💗 by</div>
                  <div className='opacity-80 text-sm'>Anmol Chaudhary</div>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* <ThemeToggle /> */}
      </ResponsiveDialog>
    </div>
  )
}

export default Settings
