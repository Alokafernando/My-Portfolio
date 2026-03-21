'use client'

import { useState } from 'react'

interface MobileMenuProps {
  navItems: Array<{ label: string; id: string }>
  scrollToSection: (id: string) => void
}

export default function MobileMenu({ navItems, scrollToSection }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (id: string) => {
    scrollToSection(id)
    setIsOpen(false)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hamburger lg:hidden z-[1001] flex flex-col gap-1.5 bg-none border-none p-1"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-x-1 translate-y-2' : ''
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-x-1 -translate-y-2' : ''
          }`}
        ></span>
      </button>

      <div
        className={`fixed inset-0 bg-black/97 backdrop-blur-[24px] z-[998] flex flex-col items-center justify-center gap-10 lg:hidden transition-all duration-350 ${
          isOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-5'
        }`}
      >
        {navItems.map(({ label, id }) => (
          <button
            key={id}
            onClick={() => handleNavClick(id)}
            className="text-4xl sm:text-5xl font-bold uppercase tracking-wider text-gray-400 hover:text-accent transition-colors duration-300 hover:translate-x-2"
          >
            {label}
          </button>
        ))}
      </div>
    </>
  )
}
