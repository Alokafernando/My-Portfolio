'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, slideInLeft, slideInRight } from '@/lib/animations'

export default function About() {
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

  return (
    <section
      id="about"
      className="bg-black text-white py-20 sm:py-28 px-5 sm:px-8 xl:px-20 border-t border-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div className="mb-12 sm:mb-16" initial="hidden" whileInView="visible" variants={fadeInUp}>
          <p className="text-accent uppercase tracking-widest text-sm font-mono">About Me</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
            <span className="heading-line" ref={headingRef}>
              Who I Am
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-14 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-8 text-gray-300 text-base sm:text-lg leading-relaxed"
            initial="hidden"
            whileInView="visible"
            variants={slideInLeft}
          >
            <div className="space-y-5">
              <p>
                I&apos;m <span className="text-white font-semibold">Buddhika Fernando</span>, a dedicated{' '}
                <span className="text-accent font-medium">Full Stack Developer</span> based in Colombo, Sri
                Lanka. With a <span className="text-white">Diploma in Software Engineering</span> and currently
                pursuing my <span className="text-white italic">Undergraduate studies</span>, I bridge the gap
                between academic excellence and practical software solutions.
              </p>
              <p>
                I specialize in crafting scalable and secure digital experiences using{' '}
                <span className="text-accent font-medium">Java, Spring Boot, React, and TypeScript</span>.
                Whether it&apos;s a high-performance backend or a modern, responsive frontend, I focus on
                building <span className="text-white font-medium">user-friendly web and mobile applications</span> that solve real-world problems.
              </p>
              <p>
                My passion lies in combining innovation with practical, impactful solutions. I thrive on
                exploring new technologies and continuously refining my craft to deliver{' '}
                <span className="italic text-white/90">modern software that makes a difference</span>.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5 pt-8 border-t border-gray-800">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-white font-bold italic text-[10px] uppercase tracking-wider mb-1">
                  E-mail
                </span>
                <span className="text-gray-400 text-xs sm:text-sm font-mono italic">
                  buddhikafernando19@gmail.com
                </span>
              </div>
              <div className="hidden lg:block w-px bg-white/20 h-10"></div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-white font-bold italic text-[10px] uppercase tracking-wider mb-1">
                  Phone
                </span>
                <span className="text-gray-400 text-xs sm:text-sm font-mono italic">+9476 426 7067</span>
              </div>
              <div className="hidden lg:block w-px bg-white/20 h-10"></div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-white font-bold italic text-[10px] uppercase tracking-wider mb-1">
                  Location
                </span>
                <span className="text-gray-400 text-xs sm:text-sm font-mono italic">
                  Moratuwa, Sri Lanka
                </span>
              </div>
            </div>

            {/* Resume Button */}
            <div className="pt-4">
              <motion.a
                href="/assets/resume/BUDDHIKA-FERNANDO.pdf"
                download="Buddhika-Fernando-Resume.pdf"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 px-8 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                Resume
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            className="flex w-full max-w-[260px] sm:max-w-xs lg:max-w-sm z-20 mx-auto lg:mx-0 lg:justify-end"
            initial="hidden"
            whileInView="visible"
            variants={slideInRight}
          >
            <div className="relative w-full pt-[125%] rounded-2xl overflow-hidden border border-gray-800 shadow-2xl group">
              <img
                src="/assets/about.png"
                alt="Buddhika Fernando"
                className="absolute top-0 left-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Ping animations */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-accent/20 rounded-full animate-ping pointer-events-none" style={{ animationDuration: '3s' }}></div>
            <div className="absolute -bottom-8 -right-8 w-36 h-36 border border-accent/10 rounded-full animate-ping pointer-events-none" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>

            <div className="absolute -z-10 w-72 h-72 bg-accent/10 blur-3xl -bottom-10 -right-10 pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
