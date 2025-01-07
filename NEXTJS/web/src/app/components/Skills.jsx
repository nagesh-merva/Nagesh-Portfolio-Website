"use client"

import { motion } from "framer-motion"

export function Skills() {
  const skills = {
    'Data Science': [
      { name: 'Python', level: 90 },
      { name: 'Data Visualisation', level: 85 },
      { name: 'Data Analysis', level: 88 },
      { name: 'SQL', level: 85 }
    ],
    'Web Development': [
      { name: 'React', level: 92 },
      { name: 'Flask', level: 88 },
      { name: 'TypeScript', level: 85 },
      { name: 'MongoDB', level: 82 }
    ],
    'Tools & Technologies': [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 35 },
      { name: 'Panda', level: 45 },
      { name: 'Scikit-learn', level: 55 }
    ]
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const progressVariants = {
    hidden: { width: 0 },
    visible: (custom) => ({
      width: `${custom}%`,
      transition: { duration: 1, ease: "easeInOut" },
    }),
  }

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold font-montserrat mb-12 text-center"
        >
          Skills
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Object.entries(skills).map(([category, categorySkills]) => (
            <motion.div
              key={category}
              className="bg-white p-6 rounded-lg shadow-md"
              variants={cardVariants}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold font-montserrat mb-6">{category}</h3>
              <div className="space-y-4">
                {categorySkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-roboto">{skill.name}</span>
                      <span className="text-sm text-gray-500 font-roboto">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-black rounded-full"
                        custom={skill.level}
                        variants={progressVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: 0.5, }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}