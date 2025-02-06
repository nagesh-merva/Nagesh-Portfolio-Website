"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

const LoadingScreen = () => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#111111] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    x: [-100, 0, -100],
                    y: [50, 0, 50],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <div className="z-10 flex flex-col items-center">
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="text-8xl font-bold bg-gradient-to-r font-bodoni from-white to-gray-400 bg-clip-text text-transparent"
                        animate={{
                            textShadow: [
                                "0 0 20px rgba(255,255,255,0.1)",
                                "0 0 40px rgba(255,255,255,0.2)",
                                "0 0 20px rgba(255,255,255,0.1)"
                            ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        NM
                    </motion.div>
                    <motion.div
                        className="h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                </motion.div>
                <motion.div
                    className="mt-8 flex items-center gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                        <Loader2 className="w-5 h-5 text-white/80" />
                    </motion.div>

                    <motion.p
                        className="text-white/80 text-lg tracking-wider"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        Crafting your experience
                    </motion.p>
                </motion.div>
            </div>
        </div>
    )
}

export default LoadingScreen
