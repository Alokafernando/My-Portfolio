import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeNav, setActiveNav] = useState('home')

  const navLinks = ['home', 'about', 'skills', 'projects', 'contact']

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

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

  const handleNavClick = (link: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(link)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full flex justify-between items-center px-5 sm:px-8 py-5 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-primary/10' : 'bg-transparent'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <a href="#home" className="flex items-center z-50">
          <img src="/assets/logo.png" alt="Logo" className="h-10 w-auto object-contain drop-shadow-lg" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 text-sm uppercase tracking-widest">
          {navLinks.map((link) => (
            <motion.button
              key={link}
              onClick={() => handleNavClick(link)}
              className={`relative pb-1 transition-colors ${
                activeNav === link ? 'text-primary' : 'text-gray-400 hover:text-primary'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {link}
              {activeNav === link && (
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-primary"
                  layoutId="underline"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                />
              )}
            </motion.button>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden z-50 flex flex-col gap-1.5"
          aria-label="Toggle menu"
        >
          <motion.span
            className="w-6 h-0.5 bg-primary block"
            animate={isMenuOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
          />
          <motion.span className="w-6 h-0.5 bg-primary block" animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }} />
          <motion.span className="w-6 h-0.5 bg-primary block" animate={isMenuOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }} />
        </button>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        className="fixed top-20 left-0 w-full bg-background/95 backdrop-blur-md z-40 lg:hidden border-b border-primary/10"
        initial={{ height: 0 }}
        animate={{ height: isMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
      >
        <nav className="flex flex-col items-center gap-6 py-8">
          {navLinks.map((link) => (
            <motion.button
              key={link}
              onClick={() => handleNavClick(link)}
              className={`text-sm uppercase tracking-widest transition-colors ${
                activeNav === link ? 'text-primary' : 'text-gray-400'
              }`}
              whileHover={{ scale: 1.1 }}
            >
              {link}
            </motion.button>
          ))}
        </nav>
      </motion.div>
    </>
  )
}
