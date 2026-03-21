import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'Finance Tracker App',
    description: 'A smart web platform for managing income and expenses with interactive analytics, secure OTP authentication, and AI-powered OCR receipt scanning.',
    image: '/assets/project-Finance-Tracker.png',
    github: 'https://github.com/Alokafernando/Smart-Personal-Finance-Tracker-Fe',
    live: '#',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with product catalog, shopping cart, secure checkout, and admin dashboard for inventory management.',
    image: '/assets/project-Finance-Tracker.png',
    github: '#',
    live: '#',
  },
  {
    title: 'Social Media App',
    description: 'Real-time social networking platform with user profiles, posts, comments, likes, and notifications using WebSocket technology.',
    image: '/assets/project-Finance-Tracker.png',
    github: '#',
    live: '#',
  },
]

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="projects" className="w-full py-20 sm:py-28 px-5 sm:px-8 xl:px-20 border-t border-muted/20 bg-gradient-to-b from-background to-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-secondary uppercase tracking-widest text-sm font-mono mb-4">My Portfolio</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Featured Work</h2>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-muted/20 rounded-2xl border border-muted/40 overflow-hidden hover:border-primary/50 transition-all duration-500 group hover:-translate-y-2"
              variants={itemVariants}
            >
              {/* Project Image */}
              <div className="overflow-hidden h-48 sm:h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Project Info */}
              <div className="p-5">
                <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-5 text-xs sm:text-sm leading-relaxed">{project.description}</p>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-muted/40 hover:bg-white hover:text-black rounded-lg text-xs font-bold transition-all duration-300"
                  >
                    <FaGithub size={12} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 border border-primary text-primary hover:bg-primary hover:text-background rounded-lg text-xs font-bold transition-all duration-300"
                  >
                    <FaExternalLinkAlt size={12} />
                    Live
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
