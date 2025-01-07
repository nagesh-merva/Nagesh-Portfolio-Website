"use client"

import { motion } from "framer-motion"

export function Experience() {
  const experiences = [
    {
      title: 'Frontend Developer intern',
      company: 'ICS Engineers',
      period: 'Dec 2025 - Jan 2025',
      description: 'Built an Portfolio website for the company with Admin dashboard, Optimized frotend and developed clean-componentized React code.',
      skills: ['React', 'Python-Flask-SocketIo', 'MongoDB', 'Tailwindcss']
    },
    {
      title: 'Full Stack Developer',
      company: 'ClickBatemedia',
      period: 'July 2024 - Nov 2024',
      description: 'Built and maintained web application - Food order and Delivery app for the Agency Client which helped them increase revenue by 23% then Zomato.',
      skills: ['React', 'Python-Flask-SocketIo', 'MongoDB', 'Tailwindcss']
    }
  ]

  return (
    <section id="experience" className="py-10 md:py-20 px-4 md:px-40">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-3xl md:text-4xl font-bold font-montserrat mb-8 md:mb-12 text-center">
          Experience
        </motion.h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}>
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold font-montserrat">{exp.title}</h3>
                    <p className="text-gray-600 font-roboto text-sm md:text-base">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 font-roboto mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="mb-4 font-roboto text-sm md:text-base">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 md:px-3 py-1 bg-gray-100 text-xs md:text-sm font-roboto rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}