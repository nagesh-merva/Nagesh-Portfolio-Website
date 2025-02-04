"use client"

import { Users, GitBranch, Star, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useMainContext } from '@/app/context/MainContext'

export function Community() {
    const [hoveredItem, setHoveredItem] = useState(null)
    const { AllData } = useMainContext()

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    }

    const openSource = [
        {
            project: "TensorFlow",
            contribution: "Improved documentation and fixed bugs in the core API",
            impact: "Helped 1000+ developers with clearer documentation",
            link: "https://github.com/tensorflow/tensorflow"
        },
        {
            project: "React Native",
            contribution: "Added new features to the navigation system",
            impact: "Implemented by 500+ mobile applications",
            link: "https://github.com/facebook/react-native"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl font-bold font-montserrat mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Community & Open Source
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <motion.div
                        variants={item}
                        className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <h3 className="text-2xl font-bold font-montserrat mb-6 flex items-center gap-2">
                            <Users className="w-6 h-6 text-blue-600" /> Community Leadership
                        </h3>
                        <div className="space-y-8">
                            {AllData.communities.map((community, index) => (
                                <motion.div
                                    key={index}
                                    className="relative border-l-2 border-blue-600 pl-4 hover:bg-blue-50/50 p-4 rounded-r-lg transition-colors"
                                    onHoverStart={() => setHoveredItem(`community-${index}`)}
                                    onHoverEnd={() => setHoveredItem(null)}
                                    whileHover={{ x: 10 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="font-montserrat font-bold text-lg">{community.role}</h4>
                                            <p className="font-roboto text-gray-600">{community.organization}</p>
                                            <p className="font-roboto text-gray-500 mb-2">{community.period}</p>
                                        </div>
                                        {community.link !== "#" && (
                                            <motion.a
                                                href={community.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-700"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: hoveredItem === `community-${index}` ? 1 : 0 }}
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </motion.a>
                                        )}
                                    </div>
                                    <motion.ul
                                        className="list-disc list-inside space-y-1"
                                        initial="hidden"
                                        animate="show"
                                        variants={{
                                            hidden: { opacity: 0 },
                                            show: {
                                                opacity: 1,
                                                transition: { staggerChildren: 0.1 }
                                            }
                                        }}
                                    >
                                        {community.achievements.map((achievement, i) => (
                                            <motion.li
                                                key={i}
                                                variants={{
                                                    hidden: { opacity: 0, x: -20 },
                                                    show: { opacity: 1, x: 0 }
                                                }}
                                                className="font-roboto text-gray-700"
                                            >
                                                {achievement}
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        variants={item}
                        className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <h3 className="text-2xl font-bold font-montserrat mb-6 flex items-center gap-2">
                            <GitBranch className="w-6 h-6 text-purple-600" /> Open Source Contributions
                        </h3>
                        <div className="space-y-8">
                            {AllData.opensource.map((contribution, index) => (
                                <motion.div
                                    key={index}
                                    className="relative border-l-2 border-purple-600 pl-4 hover:bg-purple-50/50 p-4 rounded-r-lg transition-colors"
                                    onHoverStart={() => setHoveredItem(`opensource-${index}`)}
                                    onHoverEnd={() => setHoveredItem(null)}
                                    whileHover={{ x: 10 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Star className="w-4 h-4 text-yellow-500" />
                                            <h4 className="font-montserrat font-bold text-lg">{contribution.project}</h4>
                                        </div>
                                        <motion.a
                                            href={contribution.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-purple-600 hover:text-purple-700"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: hoveredItem === `opensource-${index}` ? 1 : 0 }}
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </motion.a>
                                    </div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.2 }}
                                    >
                                        <p className="font-roboto text-gray-700 mb-2">{contribution.contribution}</p>
                                        <p className="font-roboto text-gray-600">{contribution.impact}</p>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}