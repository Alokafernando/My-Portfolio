import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import ParticleCanvas from './ParticleCanvas'
import { FaGithub, FaLinkedin, FaEnvelope, FaTelegram } from 'react-icons/fa'

export default function Hero() {
  const typeWriterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const text = 'Full Stack Developer • Java • Spring Boot • React'
    let i = 0

    const typeWriter = () => {
      if (typeWriterRef.current && i <= text.length) {
        typeWriterRef.current.textContent = text.slice(0, i)
        i++
        setTimeout(typeWriter, 45)
      }
    }

    const timer = setTimeout(() => {
      typeWriter()
    }, 1800)

    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const socialLinks = [
    { href: 'https://github.com/Alokafernando', label: 'GitHub', icon: FaGithub },
    { href: 'https://www.linkedin.com/in/buddhika-fernando-73606131a/', label: 'LinkedIn', icon: FaLinkedin },
    { href: 'mailto:buddhikafernando19@gmail.com', label: 'Email', icon: FaEnvelope },
    { href: 'https://t.me/Alokafernando', label: 'Telegram', icon: FaTelegram },
  ]

  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex flex-col items-center pt-20 sm:pt-24">
      <ParticleCanvas />

      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <img src="/assets/hero-section.png" alt="Hero" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* Floating tech badges - hidden on mobile */}
      <motion.div
        className="absolute top-1/4 right-5 sm:right-10 lg:right-12 hidden lg:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="bg-background/60 backdrop-blur-md border border-primary/20 rounded-lg px-3 py-2 text-xs font-bold">
          <span className="text-primary mr-2">⚡</span> Spring Boot
        </div>
      </motion.div>

      <motion.div
        className="absolute top-2/5 right-5 sm:right-8 lg:right-10 hidden lg:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
      >
        <div className="bg-background/60 backdrop-blur-md border border-primary/20 rounded-lg px-3 py-2 text-xs font-bold">
          <span className="text-primary mr-2">⚛</span> React
        </div>
      </motion.div>

      <motion.div
        className="absolute top-3/5 right-5 sm:right-10 lg:right-12 hidden lg:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 3 }}
      >
        <div className="bg-background/60 backdrop-blur-md border border-primary/20 rounded-lg px-3 py-2 text-xs font-bold">
          <span className="text-primary mr-2">☕</span> Java
        </div>
      </motion.div>

      {/* Desktop Social Sidebar */}
      <motion.div
        className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-5 z-20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="w-0.5 h-20 bg-gradient-to-b from-primary to-transparent" />
        {socialLinks.map((link, i) => {
          const Icon = link.icon
          return (
            <motion.a
              key={i}
              href={link.href}
              aria-label={link.label}
              className="text-gray-400 hover:text-primary transition-all"
              whileHover={{ scale: 1.3, y: -2 }}
            >
              <Icon size={24} />
            </motion.a>
          )
        })}
        <div className="w-0.5 h-20 bg-gradient-to-t from-primary to-transparent" />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center w-full px-4 pb-16 md:pb-20 min-h-screen gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="select-none text-center w-full" variants={itemVariants}>
          <motion.span
            className="block font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight text-primary animate-glitch"
            animate={{ x: [0, -2, 2, -2, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
          >
            Hi there
          </motion.span>
          <motion.span className="block font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight mt-2">
            I am Aloka<motion.span className="text-primary animate-float" style={{ display: 'inline-block', marginLeft: '0.5em' }}>
              ·
            </motion.span>
          </motion.span>
        </motion.h1>

        <motion.div className="mt-5 text-center" variants={itemVariants}>
          <p ref={typeWriterRef} className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest min-h-[20px] font-mono" />
        </motion.div>

        {/* Mobile social row */}
        <motion.div className="lg:hidden flex items-center gap-6" variants={itemVariants}>
          {socialLinks.map((link, i) => {
            const Icon = link.icon
            return (
              <motion.a
                key={i}
                href={link.href}
                aria-label={link.label}
                className="text-gray-400 hover:text-primary transition-all"
                whileHover={{ scale: 1.3, y: -2 }}
              >
                <Icon size={28} />
              </motion.a>
            )
          })}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-3">
          <p className="text-xs text-gray-400 uppercase tracking-widest">Scroll to explore</p>
          <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}
