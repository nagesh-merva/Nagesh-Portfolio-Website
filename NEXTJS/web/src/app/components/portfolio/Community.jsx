"use client"

import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useMainContext } from '@/app/context/MainContext'

export function Community() {
    const [hoveredItem, setHoveredItem] = useState(null)
    const { AllData } = useMainContext()

    return (
        <section id="community">
            <div className="py-20 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative w-fit mx-auto  text-center mb-16"
                    >
                        <p className="text-lg text-zinc-700">
                            Giving back to the community
                        </p>
                        <h2 className="text-4xl md:text-5xl font-black mb-4 text-black">
                            COMMUNITY & OPEN SOURCE
                        </h2>
                        <div className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-black to-transparent opacity-20"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-gradient-to-br from-[#F5F0E8] to-white p-8 rounded-2xl border border-gray-200 hover:border-[#FF4820] hover:shadow-xl transition-all duration-300"
                        >
                            <h3 className="text-2xl font-black mb-6 text-black flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-[#FF4820]/10 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-[#FF4820]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                Community Leadership
                            </h3>
                            <div className="space-y-6">
                                {AllData.communities.map((community, index) => (
                                    <motion.div
                                        key={index}
                                        className="border-l-4 border-[#FF4820] pl-4 hover:bg-[#FF4820]/5 p-4 rounded-r-lg transition-colors"
                                        onMouseEnter={() => setHoveredItem(`community-${index}`)}
                                        onMouseLeave={() => setHoveredItem(null)}
                                        whileHover={{ x: 10 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h4 className="font-black text-lg text-black">{community.role}</h4>
                                                <p className="text-zinc-700 font-medium">{community.organization}</p>
                                                <p className="text-zinc-600 text-sm">{community.period}</p>
                                            </div>
                                            {community.link !== "#" && (
                                                <motion.a
                                                    href={community.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[#FF4820] hover:text-[#FF6B35]"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: hoveredItem === `community-${index}` ? 1 : 0 }}
                                                >
                                                    <ExternalLink className="w-5 h-5" />
                                                </motion.a>
                                            )}
                                        </div>
                                        <ul className="list-disc list-inside space-y-1 mt-3">
                                            {community.achievements.map((achievement, i) => (
                                                <li key={i} className="text-zinc-700 text-sm">
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-gradient-to-br from-[#F5F0E8] to-white p-8 rounded-2xl border border-gray-200 hover:border-[#FF4820] hover:shadow-xl transition-all duration-300"
                        >
                            <h3 className="text-2xl font-black mb-6 text-black flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-[#FF4820]/10 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-[#FF4820]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                Open Source Contributions
                            </h3>
                            <div className="space-y-6">
                                {AllData.opensource.map((contribution, index) => (
                                    <motion.div
                                        key={index}
                                        className="border-l-4 border-[#FF4820] pl-4 hover:bg-[#FF4820]/5 p-4 rounded-r-lg transition-colors"
                                        onMouseEnter={() => setHoveredItem(`opensource-${index}`)}
                                        onMouseLeave={() => setHoveredItem(null)}
                                        whileHover={{ x: 10 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="flex items-center gap-2">
                                                <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <h4 className="font-black text-lg text-black">{contribution.project}</h4>
                                            </div>
                                            <motion.a
                                                href={contribution.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#FF4820] hover:text-[#FF6B35]"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: hoveredItem === `opensource-${index}` ? 1 : 0 }}
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </motion.a>
                                        </div>
                                        <p className="text-zinc-700 mb-2 text-sm">{contribution.contribution}</p>
                                        <p className="text-zinc-600 text-sm font-medium">{contribution.impact}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}