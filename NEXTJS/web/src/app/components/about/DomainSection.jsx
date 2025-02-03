"use client"

import React from "react"
import { motion } from "framer-motion"

export default function DomainSection() {
    const profileData = {
        scientist: {
            title: "Data Scientist",
            skills: [
                "Data Analysis",
                "Machine Learning Models",
                "Python & Pandas",
                "Visualizing Insights",
                "Training AI to behave",
                "Obsessed with patterns",
            ],
        },
        developer: {
            title: "Developer",
            skills: [
                "Web Development",
                "Responsive Design",
                "HTML / CSS",
                "JavaScript / React.js",
                "Debugging (aka solving mysteries)",
                "Fuelled by tea",
            ],
        },
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                duration: 0.5
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <motion.div
            className="px-4 sm:px-8 md:px-20 pt-12 md:pt-20 pb-8 md:pb-11 w-full bg-zinc-100"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
        >
            <div className="flex flex-col md:flex-row gap-8 md:gap-5 items-center">
                <motion.div
                    className="w-full md:w-[31%] order-2 md:order-1"
                    variants={itemVariants}
                >
                    <div className="flex flex-col text-center md:text-left">
                        <motion.div
                            className="text-2xl md:text-3xl font-bold font-montserrat mb-4"
                            variants={itemVariants}
                        >
                            {profileData.scientist.title}
                        </motion.div>
                        <div className="text-lg md:text-xl font-extralight font-roboto space-y-3">
                            {profileData.scientist.skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    transition={{ delay: 0.6 * index }}
                                    className="transition-all duration-300 hover:text-purple-600"
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className="w-full md:w-[38%] order-1 md:order-2 px-4"
                    variants={itemVariants}
                >
                    <img
                        loading="lazy"
                        src="/piechart.png"
                        alt="Data Scientist Profile"
                        className="w-full max-w-[300px] md:max-w-full mx-auto"
                    />
                </motion.div>
                <motion.div
                    className="w-full md:w-[31%] order-3"
                    variants={itemVariants}
                >
                    <div className="flex flex-col text-center md:text-right">
                        <motion.div
                            className="text-2xl md:text-3xl font-bold font-montserrat mb-4"
                            variants={itemVariants}
                        >
                            {profileData.developer.title}
                        </motion.div>
                        <div className="text-lg md:text-xl font-extralight font-roboto space-y-3">
                            {profileData.developer.skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    transition={{ delay: 0.6 * index }}
                                    className="transition-all duration-300 hover:text-blue-600"
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}