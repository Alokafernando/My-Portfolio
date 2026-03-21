'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import { projects } from '@/lib/projects'

export default function Projects() {
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
      id="projects"
      className="bg-black text-white py-20 sm:py-28 px-5 sm:px-8 xl:px-20 border-t border-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          <p className="text-accent uppercase tracking-widest text-sm font-mono">My Portfolio</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
            <span className="heading-line" ref={headingRef}>
              Featured Work
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="group relative bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-accent transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              variants={staggerItem}
            >
              {/* Shine effect */}
              <div className="absolute -top-1/2 -left-1/2 w-4/5 h-96 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none rounded-full blur-3xl"></div>

              {/* Image */}
              <div className="relative overflow-hidden rounded-t-2xl h-48 sm:h-52 bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-5 text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.sourceCode}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-gray-800 hover:bg-white hover:text-black rounded-lg text-[10px] sm:text-xs font-bold transition-all duration-300 text-center"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    SOURCE
                  </a>
                  <a
                    href={project.liveDemo}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 border border-accent text-accent hover:bg-accent hover:text-black rounded-lg text-[10px] sm:text-xs font-bold transition-all duration-300 text-center"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    DEMO
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
