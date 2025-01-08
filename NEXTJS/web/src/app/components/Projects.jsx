"use client"

import { Github, ExternalLink } from 'lucide-react'
import { motion, stagger } from 'framer-motion'

export function Projects() {
  const projects = [
    {
      title: 'Marketing Analysis Dashboard',
      description: 'Interactive dashboard for visualizing complex Marketing Campaigns and Anaylsing data',
      tags: ['Python', 'Excel', 'Kaggle', 'Data Analysis'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: "SEO tool using Llama 3.2",
      description: 'A SEO tool powered by Llama 3.2, which generates blogs, rank your website seo, and help you optimize & organise your seo.',
      tags: ['TailwindcCss', 'ReactJS', 'MongoDB', 'GENAI'],
      github: 'https://github.com/nagesh-merva/scribz',
      demo: 'https://example.com'
    },
    {
      title: 'CROB Platform',
      description: 'Full-stack e-commerce solution with real-time order management and tracking. integrated Razorpay Payment gateway.',
      tags: ['TailwindcCss', 'JavaScript', 'MongoDB', 'Razorpay'],
      github: 'https://github.com/nagesh-merva/CROB',
      demo: 'https://www.crob.shop'
    },
    {
      title: 'Food Order App',
      description: 'Full-stack Food order and live order tracking, with Admin Dashboard.',
      tags: ['Reactjs', 'TailwindCss', 'SocketIO', 'Flask'],
      github: 'https://github.com/nagesh-merva/Food-Order-App',
      demo: 'https://example.com'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-4xl font-bold font-montserrat mb-12 text-center">Featured Projects</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}>
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold font-montserrat mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 font-roboto">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-sm font-roboto rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-gray-600"
                  >
                    <Github size={20} /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-gray-600"
                  >
                    <ExternalLink size={20} /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section >
  )
}