'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeNav, setActiveNav] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)

      // Update active nav
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        if (window.scrollY >= sectionTop - 200) {
          current = section.id
        }
      })
      setActiveNav(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerHeight = 80
      const targetPos = element.offsetTop - headerHeight
      window.scrollTo({ top: targetPos, behavior: 'smooth' })
    }
  }

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full flex justify-between items-center px-5 sm:px-8 py-5 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/85 backdrop-blur-[16px] shadow-sm shadow-white/5'
            : 'bg-transparent'
        }`}
      >
        <a href="#home" className="flex items-center">
          <img
            src="/assets/logo.png"
            alt="Buddhika Fernando"
            className="h-10 w-auto object-contain drop-shadow-lg"
          />
        </a>

        <nav className="hidden lg:flex space-x-8 text-sm uppercase tracking-widest text-gray-400">
          {navItems.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`custom-nav relative pb-1 transition ${
                activeNav === id
                  ? 'text-white after:w-full'
                  : 'hover:text-white after:w-0 hover:after:w-full'
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-accent after:transition-all`}
            >
              {label}
            </button>
          ))}
        </nav>

        <MobileMenu navItems={navItems} scrollToSection={scrollToSection} />
      </header>
    </>
  )
}
