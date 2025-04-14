'use client'

import type React from 'react'
import { Button } from '@/components/form/button'

import { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface TimerInputProps {
  onChange?: (minutes: number, seconds: number) => void
  className?: string
}

export default function TimerInput({ onChange, className }: TimerInputProps) {
  const [minutes, setMinutes] = useState(5)
  const [seconds, setSeconds] = useState(0)
  const [isDraggingMinutes, setIsDraggingMinutes] = useState(false)
  const [isDraggingSeconds, setIsDraggingSeconds] = useState(false)
  const minutesRef = useRef<HTMLDivElement>(null)
  const secondsRef = useRef<HTMLDivElement>(null)
  const startYRef = useRef(0)
  const startValueRef = useRef(0)

  // Notify parent component when values change
  useEffect(() => {
    onChange?.(minutes, seconds)
  }, [minutes, seconds, onChange])

  // Handle start of drag
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent, isMinutes: boolean) => {
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY
    startYRef.current = clientY
    startValueRef.current = isMinutes ? minutes : seconds

    if (isMinutes) {
      setIsDraggingMinutes(true)
    } else {
      setIsDraggingSeconds(true)
    }
  }

  // Handle drag movement
  const handleDrag = (e: MouseEvent | TouchEvent) => {
    if (!isDraggingMinutes && !isDraggingSeconds) return

    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY
    const deltaY = startYRef.current - clientY
    const sensitivity = 5 // pixels per unit change

    if (isDraggingMinutes) {
      const newValue = Math.max(0, Math.min(99, startValueRef.current + Math.round(deltaY / sensitivity)))
      setMinutes(newValue)
    } else if (isDraggingSeconds) {
      const newValue = Math.max(0, Math.min(59, startValueRef.current + Math.round(deltaY / sensitivity)))
      setSeconds(newValue)
    }
  }

  // Handle end of drag
  const handleDragEnd = () => {
    setIsDraggingMinutes(false)
    setIsDraggingSeconds(false)
  }

  // Add and remove event listeners
  useEffect(() => {
    if (isDraggingMinutes || isDraggingSeconds) {
      window.addEventListener('mousemove', handleDrag)
      window.addEventListener('touchmove', handleDrag)
      window.addEventListener('mouseup', handleDragEnd)
      window.addEventListener('touchend', handleDragEnd)
    }

    return () => {
      window.removeEventListener('mousemove', handleDrag)
      window.removeEventListener('touchmove', handleDrag)
      window.removeEventListener('mouseup', handleDragEnd)
      window.removeEventListener('touchend', handleDragEnd)
    }
  }, [isDraggingMinutes, isDraggingSeconds])

  return (
    <>
      <div className={cn('flex flex-col items-center select-none', className)}>
        <div className='flex items-center justify-center gap-1 text-4xl font-bold'>
          <div ref={minutesRef} className={cn('relative w-16 h-16 flex items-center justify-center rounded-lg transition-colors overflow-hidden', isDraggingMinutes ? 'bg-primary/10' : 'hover:bg-muted cursor-ns-resize')} onMouseDown={e => handleDragStart(e, true)} onTouchStart={e => handleDragStart(e, true)}>
            <div className='absolute top-1 left-0 right-0 text-sm text-center text-muted-foreground font-[family-name:var(--font-geist-mono)] opacity-50'>{minutes < 99 ? (minutes + 1).toString().padStart(2, '0') : '00'}</div>
            <div>{minutes.toString().padStart(2, '0')}</div>
            <div className='absolute bottom-1 left-0 right-0 text-sm text-center text-muted-foreground font-[family-name:var(--font-geist-mono)] opacity-50'>{minutes > 0 ? (minutes - 1).toString().padStart(2, '0') : '99'}</div>
          </div>
          <span className='mx-1'>:</span>
          <div ref={secondsRef} className={cn('relative w-16 h-16 flex items-center justify-center rounded-lg transition-colors overflow-hidden', isDraggingSeconds ? 'bg-primary/10' : 'hover:bg-muted cursor-ns-resize')} onMouseDown={e => handleDragStart(e, false)} onTouchStart={e => handleDragStart(e, false)}>
            <div className='absolute top-1 left-0 right-0 text-sm text-center text-muted-foreground font-[family-name:var(--font-geist-mono)] opacity-50'>{seconds < 59 ? (seconds + 1).toString().padStart(2, '0') : '00'}</div>
            <div>{seconds.toString().padStart(2, '0')}</div>
            <div className='absolute bottom-1 left-0 right-0 text-sm text-center text-muted-foreground font-[family-name:var(--font-geist-mono)] opacity-50'>{seconds > 0 ? (seconds - 1).toString().padStart(2, '0') : '59'}</div>
          </div>
        </div>

        <div className='flex gap-4 mt-4 opacity-50 font-[family-name:var(--font-geist-mono)] text-sm uppercase'>
          <div className='text-center'>
            <div>min</div>
          </div>
          <div className='text-center'>
            <div>sec</div>
          </div>
        </div>
      </div>
      <Button type='submit' className='cursor-pointer w-full' text='Update Timer' loadingText='Setting Timer...' />
    </>
  )
}
