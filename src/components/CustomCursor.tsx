'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorRingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only show cursor on desktop
    if (window.matchMedia('(pointer: coarse)').matches) {
      return
    }

    const cursor = cursorRef.current
    const cursorRing = cursorRingRef.current
    if (!cursor || !cursorRing) return

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.left = mouseX + 'px'
      cursor.style.top = mouseY + 'px'
    }

    const animateCursor = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      cursorRing.style.left = ringX + 'px'
      cursorRing.style.top = ringY + 'px'
      requestAnimationFrame(animateCursor)
    }

    document.addEventListener('mousemove', handleMouseMove)
    animateCursor()

    const handleHoverEnter = () => {
      cursor.classList.add('hover')
      cursorRing.classList.add('hover')
    }

    const handleHoverLeave = () => {
      cursor.classList.remove('hover')
      cursorRing.classList.remove('hover')
    }

    const hoverElements = document.querySelectorAll('a, button, .magnetic, .stat-card')
    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverEnter)
      el.addEventListener('mouseleave', handleHoverLeave)
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverEnter)
        el.removeEventListener('mouseleave', handleHoverLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        id="cursor"
        ref={cursorRef}
        className="fixed w-2.5 h-2.5 bg-accent rounded-full pointer-events-none z-[9999] hidden lg:block"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        id="cursor-ring"
        ref={cursorRingRef}
        className="fixed w-9 h-9 border-[1.5px] border-accent/50 rounded-full pointer-events-none z-[9998] hidden lg:block"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  )
}
