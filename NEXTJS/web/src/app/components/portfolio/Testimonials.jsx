"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useMainContext } from '@/app/context/MainContext'

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const { AllData } = useMainContext()

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
  };

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
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What People Say
          </motion.span>
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-white/90 backdrop-blur-sm m-[2px] p-8 rounded-2xl shadow-lg">
            <div className="min-h-[300px] flex items-center justify-center">
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
                  className="absolute w-full px-5 "
                >
                  <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                    <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 aspect-square">
                      <img
                        src={AllData.testimonials[currentIndex].image}
                        alt={AllData.testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm md:text-lg font-roboto mb-4 md:mb-6 italic text-gray-700">"{AllData.testimonials[currentIndex].text}"</p>
                      <p className="font-montserrat font-bold text-base md:text-lg">{AllData.testimonials[currentIndex].name}</p>
                      <p className="font-roboto text-sm md:text-base text-gray-600">{AllData.testimonials[currentIndex].role}</p>
                      <p className="font-roboto text-sm md:text-base text-gray-500">{AllData.testimonials[currentIndex].company}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 opacity-30" />
          </div>
          <button
            aria-label="Previous Testimonial"
            className="absolute left-4 md:-left-20 lg:-left-32 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            aria-label="Next Testimonial"
            className="absolute right-4 md:-right-20 lg:-right-32 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
            onClick={() => paginate(1)}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="flex justify-center gap-2 mt-4">
            {AllData.testimonials.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
