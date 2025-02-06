"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const factsList = [
    "Full-stack developer, React & TailwindCSS expert.",
    "Built production-ready web apps seamlessly.",
    "Passionate data geek, science enthusiast.",
    "Business and marketing analysis pro.",
    "I love exploring trends in tech and data.",
    "I have a knack for finding the perfect balance between creativity and functionality in my work.",
    "Tea keeps my code running! ☕"
]

export function RandomFactsSection() {
    return (
        <div className="px-4 sm:px-8 md:px-20 py-8 md:py-12 w-full bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                <motion.div
                    className="w-full max-w-[500px] mx-auto"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <img
                        loading="lazy"
                        src="https://firebasestorage.googleapis.com/v0/b/ventura-brandbuilderbattle.appspot.com/o/Portfolio-website%2FTechie.png?alt=media&token=45e153ff-71fa-49c2-a42e-b01ac4c2d565"
                        alt="Profile visualization"
                        className="w-full h-auto object-contain"
                    />
                </motion.div>

                <motion.div
                    className="w-full"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="space-y-6">
                        <motion.h1
                            className="text-2xl md:text-3xl font-bold text-center md:text-left"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            Random Facts
                        </motion.h1>
                        <div className="space-y-4">
                            {factsList.map((fact, index) => (
                                <motion.p
                                    key={index}
                                    className="text-base md:text-xl font-light leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                                >
                                    {fact}
                                </motion.p>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}