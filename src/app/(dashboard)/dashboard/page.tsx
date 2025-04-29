'use client'
import React from 'react'

import { authClient } from '@/lib/auth-client'
import { UserCog } from 'lucide-react'

const Page = () => {
  const date = new Date().toDateString().split(' ')
  const { data: session } = authClient.useSession()

  return (
    <div className='h-full w-full py-3 px-4 relative'>
      <div className='flex items-center justify-between border border-blue-500 bg-blue-50 dark:bg-blue-950/20 mb-6 rounded-sm p-2'>
        <div className='flex items-center gap-3'>
          <div className='p-2 bg-blue-50/10 rounded-sm'>
            <UserCog className='text-blue-600' size={18} />
          </div>
          <div>
            <div className='text-blue-800 dark:text-blue-200 text-sm'>Complete your profile</div>
            <p className='text-xs text-blue-600 dark:text-blue-300 font-light font-[family-name:var(--font-geist-mono)] opacity-75'>You are almost there, complete your profile to get started!</p>
          </div>
        </div>

        {/* <div className="flex items-center gap-2">
          <Button size="sm" onClick={onComplete} className="bg-blue-600 hover:bg-blue-700 text-white">
            Complete
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDismiss}
            className="text-blue-600 hover:text-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 p-1 h-auto"
          >
            <X className="h-4 w-4" />
          </Button>
        </div> */}
      </div>
      <div className='flex justify-between items-center'>
        <div>
          <div className='text-sm text-neutral-500 dark:text-neutral-400 font-[family-name:var(--font-geist-mono)]'>Welcome,</div>
          <div className='text-sm opacity-90'>{session?.user?.name}</div>
        </div>
        <div className='flex flex-col items-end'>
          <div className='text-sm text-neutral-500 dark:text-neutral-400 font-[family-name:var(--font-geist-mono)]'>🌤️Today</div>
          <div className='text-sm opacity-90 ml-1'>{`${date[2]} ${date[1]}, ${date[3]}`}</div>
        </div>
      </div>
    </div>
  )
}

export default Page
