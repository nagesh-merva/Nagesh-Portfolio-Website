"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useMainContext } from '@/app/context/MainContext'

export function Testimonials() {
  const { AllData } = useMainContext()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % AllData.testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const paginate = (newDirection) => {
    setDirection(newDirection)
    setCurrentIndex((prev) => (prev + newDirection + AllData.testimonials.length) % AllData.testimonials.length)
  }

  return (
    <section id="testimonials">
      <div className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-[#F5F0E8]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-black">
              WHAT PEOPLE SAY
            </h2>
            <p className="text-lg text-zinc-700">
              Testimonials from clients and colleagues
            </p>
          </motion.div>

          <div className="relative">
            <div className="relative bg-white p-8 md:p-12 rounded-2xl border border-gray-200 shadow-xl min-h-[340px] flex items-center">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="absolute w-11/12 px-8"
                >
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-[#FF4820]">
                      <img
                        src={AllData.testimonials[currentIndex].image}
                        alt={AllData.testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center md:text-left">
                      <p className="text-lg md:text-xl italic text-zinc-700 mb-4 leading-relaxed">
                        "{AllData.testimonials[currentIndex].text}"
                      </p>
                      <p className="font-black text-lg text-black">
                        {AllData.testimonials[currentIndex].name}
                      </p>
                      <p className="text-zinc-600 font-medium">
                        {AllData.testimonials[currentIndex].role}
                      </p>
                      <p className="text-zinc-500">
                        {AllData.testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={() => paginate(-1)}
              className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-[#FF4820] hover:bg-[#FF4820] hover:text-white transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-[#FF4820] hover:bg-[#FF4820] hover:text-white transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>

            <div className="flex justify-center gap-2 mt-6">
              {AllData.testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-[#FF4820] w-8" : "bg-gray-300"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
