"use client"

import { motion } from "framer-motion"
import { useMainContext } from "@/app/context/MainContext"

export function Experience() {
  const { AllData } = useMainContext()

  return (
    <section id="experience" >
      <div className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-[#F5F0E8]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-fit mx-auto text-center mb-16"
          >
            <p className="text-lg text-zinc-700">
              My professional journey
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-black">
              EXPERIENCE
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-black to-transparent opacity-20"></div>
          </motion.div>

          <div className="space-y-6">
            {AllData.experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ exp, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 hover:border-[#FF4820] hover:shadow-xl transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-2xl font-black text-black mb-1">{exp.title}</h3>
          <p className="text-lg text-zinc-700 font-medium">{exp.company}</p>
        </div>
        <span className="text-sm font-semibold text-[#FF4820] mt-2 md:mt-0 px-4 py-2 bg-[#FF4820]/10 rounded-full">
          {exp.period}
        </span>
      </div>
      <p className="text-zinc-700 mb-4 leading-relaxed">{exp.description}</p>
      <div className="flex flex-wrap gap-2">
        {exp.skills.map((skill, skillIndex) => (
          <span
            key={skillIndex}
            className="px-3 py-1 bg-gradient-to-br from-[#F5F0E8] to-[#FFD7C4] text-sm font-medium rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}