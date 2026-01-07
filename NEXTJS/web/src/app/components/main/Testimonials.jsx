"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useMainContext } from "@/app/context/MainContext"

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const { AllData } = useMainContext()

  if (!AllData.testimonials || AllData.testimonials.length === 0) {
    return null
  }

  const testimonials = AllData.testimonials
  const active = testimonials[activeIndex]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextSlide = () =>
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  const prevSlide = () =>
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))

  return (
    <section
      id="testimonials"
      className="py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-white"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-3 md:mb-4">
            WHAT PEOPLE SAY
          </h2>
          <p className="text-sm sm:text-base text-zinc-600">
            Real feedback from clients and collaborators
          </p>
        </motion.div>

        <div className="max-w-3xl gap-6 md:gap-8 items-center mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 relative"
          >
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -50) {
                  nextSlide()
                } else if (info.offset.x > 50) {
                  prevSlide()
                }
              }}
              className="bg-gradient-to-br from-[#F5F0E8] to-[#FFF0EB] rounded-3xl p-8 sm:p-10 md:p-12 border-2 border-[#FF4820]/20 min-h-[320px] sm:min-h-[380px] flex flex-col justify-between"
            >
              <div className="flex gap-1 mb-6 md:mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-[#FF4820] text-[#FF4820]"
                  />
                ))}
              </div>

              <p className="text-lg sm:text-xl md:text-2xl text-black font-medium mb-6 md:mb-8 leading-relaxed italic">
                "{active.text}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-[#FF4820]/20">
                <div className="relative">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-3 border-[#FF4820]">
                    <img
                      src={active.image}
                      alt={active.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-black text-base sm:text-lg text-black">
                    {active.name}
                  </h4>
                  <p className="text-zinc-700 font-medium text-sm">
                    {active.role}
                  </p>
                  {active.company && (
                    <p className="text-zinc-500 text-xs sm:text-sm">
                      {active.company}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>

            <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 w-full justify-between px-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white border shadow hover:bg-gray-100"
              >
                <ChevronLeft className="w-5 h-5 text-black" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white border shadow hover:bg-gray-100"
              >
                <ChevronRight className="w-5 h-5 text-black" />
              </button>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mt-8 md:mt-12 lg:hidden"
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${activeIndex === index ? "bg-[#FF4820] w-8" : "bg-gray-300"
                }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}