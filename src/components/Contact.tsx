'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

export default function Contact() {
  const headingRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
        }
      })
    }, { threshold: 0.5 })

    if (headingRef.current) {
      observer.observe(headingRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const contactLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/Alokafernando',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/buddhika-fernando-73606131a/',
      icon: 'linkedin',
    },
    {
      label: 'Email',
      href: 'mailto:buddhikafernando19@gmail.com',
      icon: 'email',
    },
    {
      label: 'Telegram',
      href: 'https://t.me/Alokafernando',
      icon: 'telegram',
    },
  ]

  const renderIcon = (icon: string) => {
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
    <section
      id="contact"
      className="bg-black text-white py-20 sm:py-28 px-5 sm:px-8 xl:px-20 border-t border-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          <p className="text-accent uppercase tracking-widest text-sm font-mono mb-4">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="heading-line" ref={headingRef}>
              Let&apos;s Connect
            </span>
          </h2>
          <p className="text-gray-400 mt-6 text-base sm:text-lg max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center flex-wrap max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          {contactLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-lg border border-gray-700 hover:border-accent bg-gray-900/30 hover:bg-gray-900/70 transition-all duration-300 group"
              whileHover={{ y: -4 }}
            >
              <div className="text-gray-400 group-hover:text-accent transition-colors duration-300">
                {renderIcon(link.icon)}
              </div>
              <span className="font-semibold text-sm sm:text-base group-hover:text-accent transition-colors duration-300">
                {link.label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16 sm:mt-20 pt-8 sm:pt-12 border-t border-gray-900"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          <p className="text-gray-500 text-sm sm:text-base">
            &copy; {new Date().getFullYear()} Buddhika Fernando. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs sm:text-sm mt-2">
            Built with <span className="text-accent">♥</span> using React, Next.js & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </section>
  )
}
