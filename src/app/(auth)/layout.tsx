import React from 'react'

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-items-center w-full font-[family-name:var(--font-inter-tight)]'>
      <div style={{ backgroundSize: '22.05px auto', backgroundPosition: 'top left', opacity: '0.1' }} className='absolute h-full top-0 right-0 left-0 -z-1 bg-repeat bg-[url(https://framerusercontent.com/images/zkZcqLYKrbf3IcoLGmkQF4odXvY.svg)]'></div>
      <div className='absolute w-full top-0 right-0 left-0 z-10 border-b h-16'></div>
      <main className='flex justify-center h-screen w-full'>
        <div className='lg:w-[948px] border-x w-full flex flex-col justify-start items-center z-10'>
          <div className='h-16 w-full flex items-center justify-between text-sm text-center sm:text-left py-4 px-2 border-b font-semibold'>
            <div>⚡ZEUS</div>
          </div>
          <div className='w-full flex flex-col gap-10 justify-between items-center'>
            <div className='w-full flex flex-col gap-3 justify-center items-center'>{children}</div>
          </div>
          <div className='px-2 py-7 mb-2 text-sm text-center font-[family-name:var(--font-geist-mono)]'>Track every session, stay consistent, and see real progress. For free. Forever.</div>
        </div>
      </main>
    </div>
  )
}

export default AuthLayout
