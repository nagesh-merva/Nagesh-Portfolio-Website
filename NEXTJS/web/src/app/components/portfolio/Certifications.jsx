"use client"

import { Award, Trophy, Medal } from 'lucide-react'
import { motion } from 'framer-motion'
import { useMainContext } from '@/app/context/MainContext'

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
}

export function Certifications() {
    const { AllData } = useMainContext()

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl font-bold font-montserrat mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Certifications & Achievements
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                        variants={item}
                    >
                        <h3 className="text-xl font-bold font-montserrat mb-6 flex items-center gap-2">
                            <Award className="w-6 h-6 text-blue-600" /> Certifications
                        </h3>
                        <div className="space-y-6">
                            {AllData.certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    className="border-l-2 border-blue-600 pl-4"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.4 }}
                                >
                                    <h4 className="font-montserrat font-bold">{cert.title}</h4>
                                    <p className="font-roboto text-gray-600">{cert.issuer}</p>
                                    <p className="font-roboto text-gray-500">{cert.date}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                        variants={item}
                    >
                        <h3 className="text-xl font-bold font-montserrat mb-6 flex items-center gap-2">
                            <Trophy className="w-6 h-6 text-yellow-600" /> Competitions
                        </h3>
                        <div className="space-y-6">
                            {AllData.achievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    className="border-l-2 border-yellow-600 pl-4"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.4 }}
                                >
                                    <h4 className="font-montserrat font-bold">{achievement.title}</h4>
                                    <p className="font-roboto text-gray-600">{achievement.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                        variants={item}
                    >
                        <h3 className="text-xl font-bold font-montserrat mb-6 flex items-center gap-2">
                            <Medal className="w-6 h-6 text-green-600" /> Volunteering
                        </h3>
                        <div className="space-y-6">
                            {AllData.volunteering.map((vol, index) => (
                                <motion.div
                                    key={index}
                                    className="border-l-2 border-green-600 pl-4"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.4 }}
                                >
                                    <h4 className="font-montserrat font-bold">{vol.title}</h4>
                                    <p className="font-roboto text-gray-600">{vol.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}