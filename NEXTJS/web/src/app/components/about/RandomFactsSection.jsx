"use client"

import React from "react"
import { motion } from "framer-motion"
import { Brain, Code2, Coffee, Sparkles, Award, TrendingUp } from "lucide-react"

const factsList = [
    { icon: Code2, text: "Full-stack developer, React & Next.js expert" },
    { icon: Sparkles, text: "Built production-ready web apps seamlessly" },
    { icon: Brain, text: "Passionate data geek, science enthusiast" },
    { icon: TrendingUp, text: "Business and marketing analysis pro" },
    { icon: Award, text: "I love exploring trends in tech and data" },
    { icon: Coffee, text: "Tea keeps my code running! ☕" }
]

function RandomFactsSection() {
    return (
        <div className="py-20 px-6 md:px-12 lg:px-20 bg-black">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl text-white font-black mb-4">
                        RANDOM <span className="text-orange-500">FACTS</span>
                    </h2>
                    <p className="text-lg text-gray-400">
                        A few things about me
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {factsList.map((fact, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-orange-500 transition-all duration-300"
                        >
                            <fact.icon className="w-8 h-8 mb-4 text-orange-500" />
                            <p className="text-base leading-relaxed text-gray-300">
                                {fact.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RandomFactsSection