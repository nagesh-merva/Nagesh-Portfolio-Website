"use client"

import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { motion } from "framer-motion"


function Hero() {
  return (
    <div className="min-h-[90svh] bg-gradient-to-b from-[#F5F0E8] via-[#F5E5D8] to-[#FF8B6A] relative overflow-hidden flex items-center">
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight text-black uppercase"
          >
            DATA SCIENTIST &
            <span className="block text-[#FF4820]">FULL STACK DEVELOPER</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-black mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Transforming data into insights and building robust web applications.
            Passionate about creating impactful solutions through code and analytics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-black rounded-full font-bold text-black hover:bg-black hover:text-white transition-all duration-300"
            >
              View Resume
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-[#FF4820] transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center gap-6"
          >
            <a href="https://github.com/nagesh-merva" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/nagesh-merva-8b2b57289" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
              <Linkedin size={20} />
            </a>
            <a href="mailto:officialnagesh.merva@gmail.com" className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
              <Mail size={20} />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button className="text-sm font-semibold text-black flex items-center gap-2 hover:opacity-70 transition-opacity">
          SCROLL TO SEE WORK
          <ArrowDown size={16} className="animate-bounce" />
        </button>
      </motion.div>
    </div>
  )
}

export default Hero