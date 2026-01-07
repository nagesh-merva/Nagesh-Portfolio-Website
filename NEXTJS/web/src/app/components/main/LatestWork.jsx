"use client"

import { useState, useEffect, useRef } from "react"
import { useMainContext } from "../../context/MainContext"
import WorkCard from "./WorkCard"
import Link from "next/link"

function LatestWork() {
    const { AllData } = useMainContext()
    const [hoveredCard, setHoveredCard] = useState(null)
    const [visibleCards, setVisibleCards] = useState([])
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        AllData.workItems.forEach((_, index) => {
                            setTimeout(() => {
                                setVisibleCards(prev => [...new Set([...prev, index])])
                            }, index * 150)
                        })
                    }
                })
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [AllData.workItems])

    return (
        <div ref={sectionRef} className="relative bg-gradient-to-b from-white via-neutral-50 to-white py-32 px-8 md:px-16 overflow-hidden">
            <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-neutral-900/5 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <div className="inline-block">
                        <span className="text-sm font-bold tracking-widest text-neutral-400 uppercase mb-4 block">
                            Portfolio
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black mb-6 relative">
                            RECENT PROJECTS
                            <div className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-black to-transparent opacity-20"></div>
                        </h2>
                        <p className="text-neutral-600 text-lg mt-8 max-w-2xl mx-auto">
                            Showcasing my latest work in web development and data science. Each project represents a unique challenge solved with creativity and technical excellence.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {AllData.workItems.map((item, index) => (
                        <div
                            key={item.id}
                            className={`transform transition-all duration-700 ${visibleCards.includes(index)
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-12'
                                }`}
                            style={{
                                transitionDelay: `${index * 100}ms`,
                            }}
                        >
                            <WorkCard
                                item={item}
                                index={index}
                                isHovered={hoveredCard === index}
                                onHover={() => setHoveredCard(index)}
                                onLeave={() => setHoveredCard(null)}
                            />
                        </div>
                    ))}
                </div>

                <div className="text-center mt-20">
                    <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <Link href={"/portfolio/#projects"} className="relative z-10">VIEW ALL PROJECTS</Link>
                        <svg
                            className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LatestWork