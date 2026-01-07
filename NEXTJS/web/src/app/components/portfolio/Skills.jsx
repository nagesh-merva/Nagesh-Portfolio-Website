"use client"

import { motion } from "framer-motion"
import { useMainContext } from "@/app/context/MainContext"

export function Skills() {
  const { AllData } = useMainContext()

  return (
    <section id="skills" >
      <div className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-fit mx-auto text-center mb-16"
          >
            <p className="text-lg text-zinc-700">
              Technologies I work with
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-black">
              SKILLS
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-black to-transparent opacity-20"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AllData.skills.map((category, index) => (
              <SkillCategory key={index} category={category} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillCategory({ category, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="bg-gradient-to-br from-[#F5F0E8] to-white p-6 rounded-2xl border border-gray-200 hover:border-[#FF4820] hover:shadow-xl transition-all duration-300"
    >
      <h3 className="text-2xl font-black mb-6 text-black">{category.title}</h3>
      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <div key={skillIndex}>
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-black">{skill.name}</span>
              <span className="text-sm text-zinc-600 font-medium">{skill.skill_level}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.skill_level}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + skillIndex * 0.1, duration: 0.8 }}
                className="h-full bg-gradient-to-r from-[#FF4820] to-[#FF8B6A] rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
