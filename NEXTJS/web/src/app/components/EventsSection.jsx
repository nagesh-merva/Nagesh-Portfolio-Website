"use client"

import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

const events = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=400&fit=crop",
        title: "Tech Conference 2023"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=500&h=400&fit=crop",
        title: "Hackathon Winners"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=500&h=400&fit=crop",
        title: "College Tech Fest"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&h=400&fit=crop",
        title: "Workshop Session"
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&h=400&fit=crop",
        title: "Coding Competition"
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=400&fit=crop",
        title: "Tech Conference 2023"
    },
    {
        id: 7,
        image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=500&h=400&fit=crop",
        title: "Hackathon Winners"
    },
    {
        id: 8,
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=400&fit=crop",
        title: "Tech Conference 2023"
    },
    {
        id: 9,
        image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=500&h=400&fit=crop",
        title: "Hackathon Winners"
    },
    {
        id: 10,
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=500&h=400&fit=crop",
        title: "College Tech Fest"
    },
    {
        id: 11,
        image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&h=400&fit=crop",
        title: "Workshop Session"
    },
]

function EventCard({ image, title, index }) {
    return (
        <motion.div
            className="flex-shrink-0 relative rounded-xl shadow-xl overflow-hidden h-[250px] w-[300px] group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                    {title}
                </p>
            </div>
        </motion.div>
    )
}

export default function CardGrid() {
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
                    {events.map((event, index) => (
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