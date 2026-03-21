'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import ParticleCanvas from './ParticleCanvas'
import { heroTitle, fadeInUp } from '@/lib/animations'

export default function Hero() {
  const typeWriterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const text = 'Full Stack Developer • Java • Spring Boot • React'
    let i = 0

    const typeWriter = () => {
      if (typeWriterRef.current && i <= text.length) {
        typeWriterRef.current.innerHTML = text.slice(0, i)
        if (i < text.length) {
          typeWriterRef.current.innerHTML += '<span class="type-cursor"></span>'
        }
        i++
        setTimeout(typeWriter, 45)
      }
    }

    const timer = setTimeout(() => {
      typeWriter()
    }, 1800)

    return () => clearTimeout(timer)
  }, [])

  const socialLinks = [
    { href: 'https://github.com/Alokafernando', label: 'GitHub', icon: 'github' },
    { href: 'https://www.linkedin.com/in/buddhika-fernando-73606131a/', label: 'LinkedIn', icon: 'linkedin' },
    { href: '#', label: 'Instagram', icon: 'instagram' },
    { href: 'mailto:buddhikafernando19@gmail.com', label: 'Email', icon: 'email' },
    { href: 'https://t.me/Alokafernando', label: 'Telegram', icon: 'telegram' },
  ]

  const renderSocialIcon = (icon: string) => {
    const icons: Record<string, JSX.Element> = {
      github: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
      linkedin: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      instagram: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
      email: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <polyline points="3 7 12 13 21 7" />
        </svg>
      ),
      telegram: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9.999 15.2l-.4 4.3c.6 0 .9-.3 1.2-.6l2.8-2.7 5.8 4.2c1.1.6 1.9.3 2.2-1l4-18.6c.4-1.7-.6-2.4-1.7-2l-23 8.8c-1.6.6-1.6 1.5-.3 1.9l5.9 1.8 13.7-8.6c.6-.4 1.2-.2.8.2" />
        </svg>
      ),
    }
    return icons[icon] || null
  }

  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex flex-col items-center bg-black w-full max-w-[100vw]">
      <ParticleCanvas />

      {/* Hero background image */}
      <div className="absolute top-0 left-0 w-full h-4/5 pointer-events-none z-0 overflow-hidden">
        <img
          src="/assets/hero-section.png"
          alt="Buddhika Fernando"
          className="h-full w-auto max-w-full mx-auto object-contain object-top filter grayscale brightness-105 contrast-125 opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
      </div>

      {/* Floating badges */}
      <motion.div
        className="absolute top-1/4 right-5 sm:right-10 lg:right-12 hidden lg:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="bg-gray-900/85 border border-gray-700 rounded-lg px-3 py-2 text-xs font-bold backdrop-blur-sm">
          <span className="text-accent mr-2">⚡</span> Spring Boot
        </div>
      </motion.div>

      <motion.div
        className="absolute top-2/5 right-5 sm:right-8 lg:right-10 hidden lg:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      >
        <div className="bg-gray-900/85 border border-gray-700 rounded-lg px-3 py-2 text-xs font-bold backdrop-blur-sm">
          <span className="text-accent mr-2">⚛</span> React
        </div>
      </motion.div>

      <motion.div
        className="absolute top-3/5 right-5 sm:right-10 lg:right-12 hidden lg:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      >
        <div className="bg-gray-900/85 border border-gray-700 rounded-lg px-3 py-2 text-xs font-bold backdrop-blur-sm">
          <span className="text-accent mr-2">☕</span> Java
        </div>
      </motion.div>

      {/* Desktop Social Sidebar */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-5 z-20">
        <div className="w-0.5 h-20 bg-gradient-to-b from-accent to-transparent"></div>
        {socialLinks.map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            aria-label={link.label}
            className="text-gray-500 hover:text-accent transition-all hover:scale-125 hover:-translate-y-1"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * (i + 2) }}
          >
            {renderSocialIcon(link.icon)}
          </motion.a>
        ))}
        <div className="w-0.5 h-20 bg-gradient-to-t from-accent to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-end w-full px-4 pb-16 md:pb-20 min-h-screen">
        <motion.h1
          className="select-none mt-28 sm:mt-36 lg:mt-44 text-center w-full"
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="block font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-none tracking-tighter glitch"
            custom={0}
            variants={heroTitle}
            data-text="Hi there"
          >
            Hi there
          </motion.span>
          <motion.span
            className="block font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-none tracking-tighter mt-2"
            custom={1}
            variants={heroTitle}
          >
            I am Buddhika<span className="inline-block w-1.5 h-1.5 bg-accent ml-1 mb-1 rounded-sm animate-pulse-dot"></span>
          </motion.span>
        </motion.h1>

        <motion.div className="mt-5 text-center" initial="hidden" animate="visible" variants={fadeInUp}>
          <p
            ref={typeWriterRef}
            className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-widest min-h-[20px] sm:min-h-[24px]"
            id="hero-subtitle"
          ></p>
        </motion.div>

        {/* Mobile social row */}
        <motion.div
          className="flex gap-6 mt-8 lg:hidden justify-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              aria-label={link.label}
              className="text-gray-500 hover:text-accent transition-all hover:scale-125 hover:-translate-y-1"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7">{renderSocialIcon(link.icon)}</div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
