"use client"

import React from "react"
import { motion } from "framer-motion"
import ContentSection from "./ContentSection"

const contentData = [
    {
        title: "Featured Here & There",
        description: "I've had the privilege of seeing my work shine in hackathons, startup collaborations, and online communities. From full-stack web applications that have gone live in production to innovative designs that solve real-world problems, my projects reflect a commitment to quality and creativity.",
        imageSide: "right"
    },
    {
        title: "My Projects",
        description: "Over the years of building full-stack web applications, I've discovered that crafting user-focused interfaces and scalable backends doesn't have to be complicated. With a strong foundation in React and Tailwind CSS, I've developed practical, efficient solutions to real-world problems. Dive into my projects to see these principles in action.",
        imageSide: "left"
    },
    {
        title: "Marketing & Bussiness Studies",
        description: "I've analyzed countless marketing strategies, business models, and datasets, transforming raw data into actionable insights. My journey into marketing and business analytics has taught me how to uncover patterns, predict trends, and drive growth using a data-driven approach.",
        imageSide: "right"
    }
]

export default function FeaturedContent() {
    return (
        <div className="flex flex-col bg-white">
            {contentData.map((content, index) => (
                <motion.div
                    key={content.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                    <div className="relative w-full h-auto py-10 md:py-16 lg:py-24 flex justify-center items-center">
                        <div className="self-center ml-8 w-full max-w-[1015px] max-md:mt-10 max-md:max-w-full">
                            <ContentSection
                                title={content.title}
                                description={content.description}
                                imageSide={content.imageSide}
                            />
                        </div>
                        <motion.div
                            className="absolute bottom-0 w-full border border-solid border-zinc-300 shadow-lg min-h-[1px]"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        />
                    </div>
                </motion.div>
            ))}
        </div>
    )
}