'use client'
import { useTheme } from 'next-themes'
import { MoonStar, Sun } from 'lucide-react'

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme()
  const isDarkTheme = theme === 'dark'

  const changeTheme = (theme: string) => {
    let metaTag = document.querySelector('meta[name="theme-color"]')
    if (!metaTag) {
      metaTag = document.createElement('meta')
      metaTag.setAttribute('name', 'theme-color')
      document.head.appendChild(metaTag)
    }
    const color = theme === 'dark' ? 'oklch(0.269 0 0)' : 'oklch(1 0 0)'
    metaTag.setAttribute('content', color)
    setTheme(theme)
  }
  if (isDarkTheme) return <Sun onClick={() => changeTheme('light')} size={18} className='cursor-pointer mr-2' />
  return <MoonStar onClick={() => changeTheme('dark')} size={18} className='cursor-pointer mr-2' />
}

export default ThemeToggle
