'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import { skills } from '@/lib/skills'

export default function Skills() {
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
      id="skills"
      className="bg-black text-white py-20 sm:py-28 px-5 sm:px-8 xl:px-20 border-t border-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div className="mb-12 sm:mb-16" initial="hidden" whileInView="visible" variants={fadeInUp}>
          <p className="text-accent uppercase tracking-widest text-sm font-mono">My Tech Stack</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
            <span className="heading-line" ref={headingRef}>
              Technologies I Work With
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="group relative p-3 sm:p-4 lg:p-5 rounded-lg border border-gray-800 bg-gray-900/40 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2.5 hover:shadow-lg hover:shadow-accent/10 cursor-default"
              variants={staggerItem}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/7 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
              <div className="relative z-10 flex flex-col items-center">
                <img
                  src={skill.src}
                  alt={skill.name}
                  className={`w-7 h-7 sm:w-8 sm:h-8 lg:w-12 lg:h-12 mb-2 sm:mb-2.5 transition-all duration-300 group-hover:scale-110 ${
                    skill.inv ? 'invert brightness-200 group-hover:invert group-hover:brightness-100' : 'grayscale group-hover:grayscale-0'
                  }`}
                />
                <span className="text-[0.6rem] sm:text-[0.7rem] lg:text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-white text-center line-clamp-2">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
