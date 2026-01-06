"use client"

import React from "react"
import { motion } from "framer-motion"

export default function AboutMainSection() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#F5F0E8] via-[#F5E5D8] to-[#FF8B6A] relative overflow-hidden">
            <div className="h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-12 md:py-20 gap-8">
                <motion.div
                    className="flex-1 z-10"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="max-w-2xl">
                        <motion.h1
                            className="text-5xl md:text-6xl lg:text-7xl font-black text-black mb-6 tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            ABOUT<span className="text-[#FF4820]">.</span>
                        </motion.h1>

                        <motion.p
                            className="text-2xl md:text-3xl font-medium text-zinc-700 mb-6 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            I'm a Developer and Data Scientist based in vibrant Goa, India
                        </motion.p>

                        <motion.p
                            className="text-lg md:text-xl font-light text-black leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            I love transforming ideas into seamless digital experiences and uncovering insights hidden in data.
                            When I'm not coding or analyzing, you'll find me exploring local cafes, embarking on new adventures,
                            or soaking up the sunset by the beach.
                        </motion.p>
                    </div>
                </motion.div>
                <motion.div
                    className="flex-1 z-10 flex items-end justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="absolute bottom-0 w-full max-w-lg h-[400px] md:h-[500px]">
                        <img
                            src="/nagesh.png"
                            alt="Developer and Data Scientist profile"
                            className="w-full h-full object-contain object-bottom grayscale"
                        />
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-black/20 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
            />
        </div>
    )
}
