"use client"

import { Github, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { useMainContext } from '@/app/context/MainContext'

export function Projects() {
  const { AllData } = useMainContext()

  return (
    <section id="projects">
      <div className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative text-center mb-16 w-fit mx-auto"
          >
            <p className="text-lg text-zinc-700">
              Some of my recent work
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-black">
              FEATURED PROJECTS
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-black to-transparent opacity-20"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AllData.projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section >
  )
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group flex flex-col justify-between bg-gradient-to-br from-[#F5F0E8] to-white p-6 rounded-2xl border border-gray-200 hover:border-[#FF4820] hover:shadow-xl transition-all duration-300"
    >
      <div>
        <h3 className="text-2xl font-black mb-3 text-black">{project.title}</h3>
        <p className="text-zinc-700 mb-4 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 bg-white text-sm font-medium rounded-full border border-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-black hover:text-[#FF4820] transition-colors font-semibold"
        >
          <Github size={18} /> Code
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-black hover:text-[#FF4820] transition-colors font-semibold"
          >
            <ExternalLink size={18} /> Demo
          </a>
        )}
      </div>
    </motion.div>
  )
}