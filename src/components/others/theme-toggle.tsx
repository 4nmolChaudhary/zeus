'use client'
import { useTheme } from 'next-themes'
import { MoonStar, Sun } from 'lucide-react'

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme()
  const isDarkTheme = theme === 'dark'
  if (isDarkTheme) return <Sun onClick={() => setTheme('light')} size={18} className='cursor-pointer mr-2' />
  return <MoonStar onClick={() => setTheme('dark')} size={18} className='cursor-pointer mr-2' />
}

export default ThemeToggle
