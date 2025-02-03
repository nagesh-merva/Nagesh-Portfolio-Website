"use client"

import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import EventCard from "./EventsCard"
import { useMainContext } from "@/app/context/MainContext"

// const events = [
//     {
//         id: 1,
//         image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=400&fit=crop",
//         title: "Tech Conference 2023"
//     },
//     {
//         id: 2,
//         image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=500&h=400&fit=crop",
//         title: "Hackathon Winners"
//     },
//     {
//         id: 3,
//         image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=500&h=400&fit=crop",
//         title: "College Tech Fest"
//     },
//     {
//         id: 4,
//         image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&h=400&fit=crop",
//         title: "Workshop Session"
//     },
//     {
//         id: 5,
//         image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&h=400&fit=crop",
//         title: "Coding Competition"
//     },
//     {
//         id: 6,
//         image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=400&fit=crop",
//         title: "Tech Conference 2023"
//     },
//     {
//         id: 7,
//         image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=500&h=400&fit=crop",
//         title: "Hackathon Winners"
//     },
//     {
//         id: 8,
//         image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=400&fit=crop",
//         title: "Tech Conference 2023"
//     },
//     {
//         id: 9,
//         image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=500&h=400&fit=crop",
//         title: "Hackathon Winners"
//     },
//     {
//         id: 10,
//         image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=500&h=400&fit=crop",
//         title: "College Tech Fest"
//     },
//     {
//         id: 11,
//         image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&h=400&fit=crop",
//         title: "Workshop Session"
//     },
// ]

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
            <h2 className="text-3xl font-bold text-center mb-8">Events & Competitions</h2>
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