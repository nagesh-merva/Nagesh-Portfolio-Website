"use client"

import { Github, Linkedin, Mail } from 'lucide-react'
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-16">
      <motion.div
        className="container mx-auto px-4 py-16 text-center"
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
        <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-6">
          Data Scientist & Full Stack Developer
        </h1>
        <p className="text-xl text-gray-600 font-roboto mb-8 max-w-2xl mx-auto">
          Transforming data into insights and building robust web applications.
          Passionate about creating impactful solutions through code and analytics.
        </p>
        <motion.div
          className="flex justify-center gap-4 mb-12"
        >
          <motion.a
            href="/resume.pdf"
            className="px-6 py-3 border-2 border-black rounded-lg font-roboto hover:bg-black hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 150 }} animate={{ y: 0 }} transition={{ type: "spring" }}
          >
            View Resume
          </motion.a>
          <motion.a
            href="/contact"
            className="px-6 py-3 bg-black text-white rounded-lg font-roboto hover:bg-gray-800 transition-colors"
            initial={{ y: 150 }} animate={{ y: 0 }} transition={{ type: "spring" }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
        <div className="flex justify-center gap-6">
          <motion.a href="https://github.com/nagesh-merva" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600" animate={{ scale: 1.2 }}>
            <Github size={24} />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/nagesh-merva-8b2b57289" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600" animate={{ scale: 1.2 }}>
            <Linkedin size={24} />
          </motion.a>
          <motion.a href="mailto:officialnagesh.merva@gmail.com" className="hover:text-gray-600" animate={{ scale: 1.2 }}>
            <Mail size={24} />
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}