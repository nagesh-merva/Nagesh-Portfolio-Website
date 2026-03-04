"use client"

import { useState, useEffect, useRef } from "react"
import { ExternalLink, Instagram, Zap, GalleryVerticalEnd, Globe } from "lucide-react"
import { useMainContext } from "@/app/context/MainContext"

function FreelanceWork() {
    const { AllData } = useMainContext()
    const [activeCategory, setActiveCategory] = useState("all")
    const [hoveredCard, setHoveredCard] = useState(null)
    const sectionRef = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [numVisible, setNumVisible] = useState(3)
    const [isPaused, setIsPaused] = useState(false)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)

    const categories = [
        { id: "all", label: "All Work", icon: <GalleryVerticalEnd size={16} /> },
        { id: "websites", label: "Website Designs", icon: <Globe size={16} /> },
        { id: "social", label: "Social Media", icon: <Instagram size={16} /> },
    ]

    const freelanceProjects = AllData.freelanceProjects || []

    const filteredProjects = activeCategory === "all"
        ? freelanceProjects
        : freelanceProjects.filter(p => p.category === activeCategory)

    useEffect(() => {
        setCurrentIndex(0)
    }, [activeCategory])

    useEffect(() => {
        if (isPaused || filteredProjects.length <= numVisible) return

        const interval = setInterval(() => {
            setCurrentIndex(prev => {
                const maxIndex = Math.max(0, filteredProjects.length - numVisible)
                return prev >= maxIndex ? 0 : prev + 1
            })
        }, 4000)

        return () => clearInterval(interval)
    }, [filteredProjects.length, numVisible, isPaused])

    useEffect(() => {
        const updateVisible = () => {
            if (window.innerWidth < 768) {
                setNumVisible(1)
            } else if (window.innerWidth < 1024) {
                setNumVisible(2)
            } else {
                setNumVisible(3)
            }
        }

        updateVisible()
        window.addEventListener("resize", updateVisible)
        return () => window.removeEventListener("resize", updateVisible)
    }, [])

    const handlePrevious = () => {
        setCurrentIndex(prev => Math.max(0, prev - 1))
    }

    const handleNext = () => {
        const maxIndex = Math.max(0, filteredProjects.length - numVisible)
        setCurrentIndex(prev => Math.min(maxIndex, prev + 1))
    }

    const minSwipeDistance = 50

    const onTouchStart = (e) => {
        setTouchEnd(0)
        setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return

        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance

        if (isLeftSwipe) {
            handleNext()
        }
        if (isRightSwipe) {
            handlePrevious()
        }
    }

    return (
        <section ref={sectionRef} className="relative bg-gradient-to-b from-neutral-50 via-white to-neutral-50 py-32 px-4 md:px-8 lg:px-16 overflow-hidden">
            <div className="hidden md:block absolute z-30 left-0 bottom-0 w-1/12 h-4/6 bg-gradient-to-r from-white from-20% to-transparent" />
            <div className="hidden md:block absolute z-30 right-0 bottom-0 w-1/12 h-4/6 bg-gradient-to-l from-white from-20% to-transparent" />
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <div className="inline-block">
                        <span className="text-sm font-bold tracking-widest text-neutral-500 uppercase mb-4 flex items-center justify-center gap-2">
                            <Zap size={16} />
                            Freelance Work
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 relative">
                            DESIGN & MARKETING
                            <div className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-black to-transparent opacity-20"></div>
                        </h2>
                        <p className="text-neutral-600 text-base md:text-lg mt-8 max-w-2xl mx-auto">
                            Crafting stunning website designs and impactful social media campaigns that drive growth and engagement for brands worldwide.
                        </p>
                    </div>
                </div>

                <div className="flex justify-center gap-3 md:gap-4 mb-16 flex-wrap">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`
                                group relative px-4 md:px-6 py-2.5 md:py-3 font-bold text-xs md:text-sm uppercase tracking-wider
                                transition-all duration-300 rounded-full overflow-hidden
                                ${activeCategory === category.id
                                    ? 'bg-black text-white shadow-lg scale-105'
                                    : 'bg-white text-black border-2 border-neutral-200 hover:border-black'
                                }
                            `}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                {category.icon}
                                <span className="hidden sm:inline">{category.label}</span>
                            </span>
                        </button>
                    ))}
                </div>

                {filteredProjects.length > 0 ? (
                    <div className="relative overflow-visible">
                        <div
                            className="overflow-visible"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                            onTouchStart={onTouchStart}
                            onTouchMove={onTouchMove}
                            onTouchEnd={onTouchEnd}
                        >
                            <div
                                className="flex transition-transform duration-700 ease-in-out"
                                style={{
                                    transform: `translateX(-${currentIndex * (100 / numVisible)}%)`,
                                }}
                            >
                                {filteredProjects.map((project, index) => (
                                    <div
                                        key={project.id}
                                        className="flex-shrink-0 px-2 md:px-3"
                                        style={{ width: `${100 / numVisible}%` }}
                                        onMouseEnter={() => setHoveredCard(index)}
                                        onMouseLeave={() => setHoveredCard(null)}
                                    >
                                        <div className="group relative h-full flex flex-col">
                                            <div
                                                className="relative bg-white rounded-2xl overflow-hidden transition-all duration-500 h-full flex flex-col shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-black"
                                                style={{
                                                    transform: hoveredCard === index ? 'translateY(-6px)' : 'translateY(0)',
                                                }}
                                            >
                                                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className={`w-full h-full object-cover transition-all duration-700 ${hoveredCard === index ? 'scale-110 brightness-75' : 'scale-100'}`}
                                                    />
                                                    <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                                        {project.category === 'websites' ? <Globe size={14} /> : <Instagram size={14} />}
                                                        {project.category === 'websites' ? 'Web Design' : 'Social Media'}
                                                    </div>
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                    <div className={`
                                                        absolute inset-0 flex items-center justify-center gap-4
                                                        transition-all duration-500
                                                        ${hoveredCard === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
                                                    `}>
                                                        <a
                                                            href={project.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="group/btn p-4 bg-white rounded-full hover:bg-black transition-all duration-300 transform hover:scale-110 shadow-xl"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            <ExternalLink className="text-black group-hover/btn:text-white transition-colors" size={22} />
                                                        </a>
                                                    </div>

                                                    <div
                                                        className="absolute top-0 right-0 w-20 h-20 bg-yellow-400 opacity-0 group-hover:opacity-90 transition-opacity duration-300"
                                                        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
                                                    />
                                                </div>
                                                <div className="flex-1 flex flex-col p-4 md:p-6">
                                                    <h3 className="text-lg md:text-xl font-black mb-2 group-hover:text-black transition-colors leading-snug">
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-neutral-600 text-sm leading-relaxed mb-4 flex-1">
                                                        {project.description}
                                                    </p>
                                                    <div className="flex flex-wrap gap-2 mb-4">
                                                        {project.tags.map((tag, idx) => (
                                                            <span
                                                                key={idx}
                                                                className="text-xs font-bold px-2.5 py-1 bg-neutral-100 text-neutral-700 rounded-full hover:bg-black hover:text-white transition-colors cursor-default"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <div className="w-full h-px bg-neutral-200 mb-4"></div>
                                                    <div className="grid grid-cols-2 gap-3 text-center">
                                                        {Object.entries(project.metrics).map(([key, value], idx) => (
                                                            <div key={idx} className="bg-neutral-50 rounded-lg p-2">
                                                                <p className="text-xs text-neutral-500 uppercase tracking-wider font-bold mb-1">
                                                                    {key}
                                                                </p>
                                                                <p className={`font-black text-base md:text-lg ${typeof value === 'string' && value.includes('+') ? 'text-green-600' : 'text-black'}`}>
                                                                    {value}
                                                                </p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="absolute inset-0 rounded-2xl pointer-events-none">
                                                    <div className={`absolute top-0 left-0 h-0.5 bg-black transition-all duration-500 ${hoveredCard === index ? 'w-full' : 'w-0'}`}></div>
                                                    <div className={`absolute top-0 right-0 w-0.5 bg-black transition-all duration-500 delay-100 ${hoveredCard === index ? 'h-full' : 'h-0'}`}></div>
                                                    <div className={`absolute bottom-0 right-0 h-0.5 bg-black transition-all duration-500 delay-200 ${hoveredCard === index ? 'w-full' : 'w-0'}`}></div>
                                                    <div className={`absolute bottom-0 left-0 w-0.5 bg-black transition-all duration-500 delay-300 ${hoveredCard === index ? 'h-full' : 'h-0'}`}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {filteredProjects.length > numVisible && (
                            <>
                                <button
                                    onClick={handlePrevious}
                                    disabled={currentIndex === 0}
                                    className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white border-2 border-black p-3 rounded-full shadow-lg hover:bg-black hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-black z-40"
                                    aria-label="Previous"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={handleNext}
                                    disabled={currentIndex >= filteredProjects.length - numVisible}
                                    className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white border-2 border-black p-3 rounded-full shadow-lg hover:bg-black hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-black z-40"
                                    aria-label="Next"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </>
                        )}
                        {filteredProjects.length > numVisible && (
                            <div className="flex justify-center gap-2 mt-8">
                                {Array.from({ length: Math.ceil(filteredProjects.length - numVisible + 1) }).map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentIndex(idx)}
                                        className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-8 bg-black' : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                                            }`}
                                        aria-label={`Go to slide ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="text-center py-16 text-neutral-500">
                        No projects found in this category.
                    </div>
                )}
                <div className="text-center mt-24">
                    <p className="text-neutral-600 text-base md:text-lg mb-6">
                        Want to showcase your work or discuss a project?
                    </p>
                    <button className="group relative inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-black text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <span className="relative z-10">START A PROJECT</span>
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
        </section>
    )
}

export default FreelanceWork