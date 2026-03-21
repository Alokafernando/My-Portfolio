import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaTelegram, FaArrowRight } from 'react-icons/fa'

export default function Contact() {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Alokafernando', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/buddhika-fernando-73606131a/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:buddhikafernando19@gmail.com', label: 'Email' },
    { icon: FaTelegram, href: 'https://t.me/Alokafernando', label: 'Telegram' },
  ]

  return (
    <section id="contact" className="w-full py-20 sm:py-28 px-5 sm:px-8 xl:px-20 border-t border-muted/20 bg-gradient-to-b from-background via-background to-muted/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-secondary uppercase tracking-widest text-sm font-mono mb-4">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            I'm always open to new opportunities and interesting projects. Feel free to reach out and let's create something amazing together.
          </p>
        </motion.div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.a
            href="mailto:buddhikafernando19@gmail.com"
            className="group bg-muted/20 border border-primary/20 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Email</h3>
                <p className="text-gray-400">buddhikafernando19@gmail.com</p>
              </div>
              <FaArrowRight className="text-primary group-hover:translate-x-2 transition-transform" size={24} />
            </div>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/buddhika-fernando-73606131a/"
            className="group bg-muted/20 border border-primary/20 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">LinkedIn</h3>
                <p className="text-gray-400">Connect with me professionally</p>
              </div>
              <FaArrowRight className="text-primary group-hover:translate-x-2 transition-transform" size={24} />
            </div>
          </motion.a>
        </div>

        {/* Social Links */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-gray-400 mb-8 uppercase tracking-widest text-sm">Follow Me</p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, i) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 bg-muted/20 border border-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-all duration-300"
                  whileHover={{ scale: 1.2, y: -5 }}
                >
                  <Icon size={24} />
                </motion.a>
              )
            })}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-16 pt-8 border-t border-muted/20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-gray-400 text-sm">
            Designed & Built by <span className="text-primary font-semibold">Aloka Fernando</span> • 2024
          </p>
        </motion.div>
      </div>
    </section>
  )
}
