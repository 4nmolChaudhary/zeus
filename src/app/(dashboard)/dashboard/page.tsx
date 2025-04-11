'use client'
import React from 'react'

const Page = () => {
  const date = new Date().toDateString().split(' ')
  return (
    <div className='h-full w-full py-3 px-4'>
      <div className='flex justify-between items-center'>
        <div>
          <div className='text-sm text-neutral-500 dark:text-neutral-400 font-[family-name:var(--font-geist-mono)]'>Welcome,</div>
          <div className='text-sm opacity-90'>Anmol Chaudhary</div>
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
