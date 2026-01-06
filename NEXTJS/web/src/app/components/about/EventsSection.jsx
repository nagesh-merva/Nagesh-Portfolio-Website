"use client"

import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import EventCard from "./EventsCard"
import { useMainContext } from "@/app/context/MainContext"

export default function CardGrid() {
    const { AllData } = useMainContext()
    const controls = useAnimation()

    useEffect(() => {
        const startAnimation = async () => {
            await controls.start({
                x: [0, -1500],
                transition: {
                    x: {
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity,
                    }
                }
            })
        }

        startAnimation()
    }, [controls])

    return (
        <div className="relative w-full overflow-hidden bg-white py-12">
            <div className="px-6 md:px-12 lg:px-20 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-7xl mx-auto text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4">
                        EVENTS & COMPETITIONS
                    </h2>
                    <p className="text-lg text-gray-400">
                        Where I've learned and competed
                    </p>
                </motion.div>
            </div>
            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex gap-6 px-20"
                    animate={controls}
                >
                    {AllData.events.map((event, index) => (
                        <EventCard
                            key={event.id}
                            image={event.image}
                            title={event.title}
                            index={index}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    )
}