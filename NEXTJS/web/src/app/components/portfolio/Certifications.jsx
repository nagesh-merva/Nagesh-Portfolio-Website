"use client"

import { Award, Trophy, Heart, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { useMainContext } from '@/app/context/MainContext'
import { useState } from 'react'

function Certifications() {
    const { AllData } = useMainContext()

    return (
        <section className="relative py-16 md:py-32 px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white via-neutral-50 to-white overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>

            <div className="relative mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative w-fit mx-auto text-center mb-12 md:mb-16 px-4"
                >
                    <p className="text-sm sm:text-base md:text-lg text-zinc-700">
                        Credentials
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 md:mb-4 text-black leading-tight">
                        CERTIFICATIONS & ACHIEVEMENTS
                    </h2>
                    <div className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-black to-transparent opacity-20"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    <CertificationCard
                        title="Certifications"
                        icon={Award}
                        color="blue"
                        items={AllData.certifications}
                        delay={0}
                    />

                    <AchievementsCard
                        title="Competitions"
                        icon={Trophy}
                        color="yellow"
                        items={AllData.achievements}
                        delay={0.2}
                    />

                    <VolunteeringCard
                        title="Volunteering"
                        icon={Heart}
                        color="green"
                        items={AllData.volunteering}
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    )
}

function CertificationCard({ title, icon: Icon, color, items, delay }) {
    const [hoveredIndex, setHoveredIndex] = useState(null)

    const colorClasses = {
        blue: {
            iconBg: 'bg-blue-500/10',
            iconText: 'text-blue-600',
            border: 'border-blue-600',
            hoverBorder: 'hover:border-blue-600',
            gradient: 'from-blue-500/5'
        },
        yellow: {
            iconBg: 'bg-yellow-500/10',
            iconText: 'text-yellow-600',
            border: 'border-yellow-600',
            hoverBorder: 'hover:border-yellow-600',
            gradient: 'from-yellow-500/5'
        },
        green: {
            iconBg: 'bg-green-500/10',
            iconText: 'text-green-600',
            border: 'border-green-600',
            hoverBorder: 'hover:border-green-600',
            gradient: 'from-green-500/5'
        }
    }

    const colors = colorClasses[color]

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.6 }}
            className={`group relative bg-white rounded-2xl md:rounded-3xl border-2 border-neutral-200 ${colors.hoverBorder} transition-all duration-500 overflow-hidden hover:shadow-2xl`}
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

            <div className="relative p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${colors.iconBg} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-5 h-5 md:w-6 md:h-6 ${colors.iconText}`} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-black truncate">
                        {title}
                    </h3>
                </div>

                <div className="space-y-4 md:space-y-6">
                    {items.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: delay + index * 0.1, duration: 0.4 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={`relative border-l-4 ${colors.border} pl-3 md:pl-4 py-2 cursor-pointer transition-all duration-300 ${hoveredIndex === index ? 'translate-x-2' : ''
                                }`}
                        >
                            <h4 className="font-black text-black mb-1 text-base md:text-lg break-words">
                                {cert.title}
                            </h4>
                            <p className="text-neutral-700 text-xs md:text-sm font-medium mb-1 break-words">
                                {cert.issuer}
                            </p>
                            <p className="text-neutral-500 text-xs">
                                {cert.date}
                            </p>

                            {hoveredIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="absolute -right-2 top-1/2 -translate-y-1/2 hidden md:block"
                                >
                                    <ExternalLink className={`w-5 h-5 ${colors.iconText}`} />
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>

                <div className="absolute top-6 md:top-8 right-6 md:right-8 w-10 h-10 md:w-12 md:h-12 bg-black text-white rounded-full flex items-center justify-center font-black text-sm md:text-lg flex-shrink-0">
                    {items.length}
                </div>
            </div>
        </motion.div>
    )
}

function AchievementsCard({ title, icon: Icon, color, items, delay }) {
    const [hoveredIndex, setHoveredIndex] = useState(null)

    const colorClasses = {
        yellow: {
            iconBg: 'bg-yellow-500/10',
            iconText: 'text-yellow-600',
            border: 'border-yellow-600',
            hoverBorder: 'hover:border-yellow-600',
            gradient: 'from-yellow-500/5'
        }
    }

    const colors = colorClasses[color]

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.6 }}
            className={`group relative bg-white rounded-2xl md:rounded-3xl border-2 border-neutral-200 ${colors.hoverBorder} transition-all duration-500 overflow-hidden hover:shadow-2xl`}
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

            <div className="relative p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${colors.iconBg} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-5 h-5 md:w-6 md:h-6 ${colors.iconText}`} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-black truncate">{title}</h3>
                </div>

                <div className="space-y-4 md:space-y-6">
                    {items.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: delay + index * 0.1, duration: 0.4 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={`relative border-l-4 ${colors.border} pl-3 md:pl-4 py-2 cursor-pointer transition-all duration-300 ${hoveredIndex === index ? 'translate-x-2' : ''
                                }`}
                        >
                            <h4 className="font-black text-black mb-1 text-base md:text-lg break-words">
                                {achievement.title}
                            </h4>
                            <p className="text-neutral-600 text-xs md:text-sm leading-relaxed break-words">
                                {achievement.description}
                            </p>

                            {hoveredIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="absolute -right-2 top-1/2 -translate-y-1/2 hidden md:block"
                                >
                                    <ExternalLink className={`w-5 h-5 ${colors.iconText}`} />
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>

                <div className="absolute top-6 md:top-8 right-6 md:right-8 w-10 h-10 md:w-12 md:h-12 bg-black text-white rounded-full flex items-center justify-center font-black text-sm md:text-lg flex-shrink-0">
                    {items.length}
                </div>
            </div>
        </motion.div>
    )
}

function VolunteeringCard({ title, icon: Icon, color, items, delay }) {
    const [hoveredIndex, setHoveredIndex] = useState(null)

    const colorClasses = {
        green: {
            iconBg: 'bg-green-500/10',
            iconText: 'text-green-600',
            border: 'border-green-600',
            hoverBorder: 'hover:border-green-600',
            gradient: 'from-green-500/5'
        }
    }

    const colors = colorClasses[color]

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.6 }}
            className={`group relative bg-white rounded-2xl md:rounded-3xl border-2 border-neutral-200 ${colors.hoverBorder} transition-all duration-500 overflow-hidden hover:shadow-2xl`}
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

            <div className="relative p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${colors.iconBg} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-5 h-5 md:w-6 md:h-6 ${colors.iconText}`} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-black truncate">{title}</h3>
                </div>

                <div className="space-y-4 md:space-y-6">
                    {items.map((vol, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: delay + index * 0.1, duration: 0.4 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={`relative border-l-4 ${colors.border} pl-3 md:pl-4 py-2 cursor-pointer transition-all duration-300 ${hoveredIndex === index ? 'translate-x-2' : ''
                                }`}
                        >
                            <h4 className="font-black text-black mb-1 text-base md:text-lg break-words">
                                {vol.title}
                            </h4>
                            <p className="text-neutral-600 text-xs md:text-sm leading-relaxed break-words">
                                {vol.description}
                            </p>

                            {hoveredIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="absolute -right-2 top-1/2 -translate-y-1/2 hidden md:block"
                                >
                                    <ExternalLink className={`w-5 h-5 ${colors.iconText}`} />
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>

                <div className="absolute top-6 md:top-8 right-6 md:right-8 w-10 h-10 md:w-12 md:h-12 bg-black text-white rounded-full flex items-center justify-center font-black text-sm md:text-lg flex-shrink-0">
                    {items.length}
                </div>
            </div>
        </motion.div>
    )
}

export default Certifications
