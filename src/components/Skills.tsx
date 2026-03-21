import { motion } from 'framer-motion'

const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'] },
  { category: 'Backend', items: ['Java', 'Spring Boot', 'Node.js', 'Express', 'RESTful APIs', 'Microservices'] },
  { category: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'Prisma', 'ORM'] },
  { category: 'Tools & Others', items: ['Git', 'Docker', 'AWS', 'Linux', 'CI/CD', 'Figma'] },
]

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="w-full py-20 sm:py-28 px-5 sm:px-8 xl:px-20 border-t border-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-secondary uppercase tracking-widest text-sm font-mono mb-4">My Tech Stack</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Technologies I Work With</h2>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              className="bg-muted/10 border border-primary/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-primary font-bold text-lg mb-4">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((item, i) => (
                  <li key={i} className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
