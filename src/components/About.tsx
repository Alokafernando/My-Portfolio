import { motion } from 'framer-motion'
import { MdDownload } from 'react-icons/md'

export default function About() {
  return (
    <section id="about" className="w-full py-20 sm:py-28 px-5 sm:px-8 xl:px-20 border-t border-muted/20 bg-gradient-to-b from-background to-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-secondary uppercase tracking-widest text-sm font-mono mb-4">About Me</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Who I Am</h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-14 items-center">
          {/* Text content */}
          <motion.div
            className="space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <p>
              I'm <span className="text-white font-semibold">Aloka Fernando</span>, a dedicated{' '}
              <span className="text-secondary font-medium">Full Stack Developer</span> based in Colombo, Sri Lanka. With a{' '}
              <span className="text-white">Diploma in Software Engineering</span> and currently pursuing my{' '}
              <span className="text-white italic">Undergraduate studies</span>, I bridge the gap between academic excellence and practical software solutions.
            </p>

            <p>
              I specialize in crafting scalable and secure digital experiences using{' '}
              <span className="text-secondary font-medium">Java, Spring Boot, React, and TypeScript</span>. Whether it's a high-performance backend or a modern, responsive frontend, I focus on building{' '}
              <span className="text-white font-medium">user-friendly web and mobile applications</span> that solve real-world problems.
            </p>

            <p>
              My passion lies in combining innovation with practical, impactful solutions. I thrive on exploring new technologies and continuously refining my craft to deliver{' '}
              <span className="italic text-white/90">modern software that makes a difference</span>.
            </p>

            {/* Contact info */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 pt-8 border-t border-muted/30">
              <div className="flex flex-col">
                <span className="text-white font-bold text-xs uppercase tracking-wider mb-1">Email</span>
                <span className="text-gray-400 text-sm font-mono">buddhikafernando19@gmail.com</span>
              </div>
              <div className="hidden lg:block w-px h-12 bg-white/20" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-xs uppercase tracking-wider mb-1">Phone</span>
                <span className="text-gray-400 text-sm font-mono">+9476 426 7067</span>
              </div>
              <div className="hidden lg:block w-px h-12 bg-white/20" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-xs uppercase tracking-wider mb-1">Location</span>
                <span className="text-gray-400 text-sm font-mono">Moratuwa, Sri Lanka</span>
              </div>
            </div>

            {/* Resume button */}
            <motion.a
              href="/assets/resume/BUDDHIKA-FERNANDO.pdf"
              download="Aloka-Fernando-Resume.pdf"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 transition-all duration-300 px-8 py-3 rounded-full font-semibold text-sm sm:text-base text-white w-fit mt-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
              <MdDownload size={20} />
            </motion.a>
          </motion.div>

          {/* Photo section */}
          <motion.div
            className="relative flex w-full max-w-xs mx-auto lg:max-w-sm lg:ml-auto"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="relative w-full pt-[125%] rounded-2xl overflow-hidden border border-muted/40 shadow-2xl group">
              <img
                src="/assets/about.png"
                alt="Aloka Fernando"
                className="absolute top-0 left-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Animated rings */}
            <motion.div
              className="absolute -bottom-4 -right-4 w-24 h-24 border border-secondary/20 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-8 -right-8 w-36 h-36 border border-secondary/10 rounded-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            />

            {/* Background blur */}
            <div className="absolute -z-10 w-72 h-72 bg-secondary/10 blur-[120px] -bottom-10 -right-10 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
