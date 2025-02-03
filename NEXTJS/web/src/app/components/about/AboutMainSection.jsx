"use client"

import React from "react"
import { motion } from "framer-motion"

export default function AboutMainSection() {
    return (
        <div className="pr-2.5 pl-20 w-full bg-white max-md:pl-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
                <motion.div
                    className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex z-10 flex-col mt-36 mr-0 max-md:mt-10 max-md:max-w-full">
                        <motion.h1
                            className="self-start text-6xl font-extrabold text-zinc-800 max-md:text-4xl font-montserrat"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            about.
                        </motion.h1>
                        <motion.p
                            className="z-10 mt-5 text-3xl font-medium font-roboto leading-10 text-zinc-500 max-md:max-w-full"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            I'm a Developer and Data Scientist based in vibrant Goa, India
                        </motion.p>
                        <motion.p
                            className="text-xl text-left font-light font-roboto leading-9 text-black max-md:mr-1.5 max-md:max-w-full"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            I love transforming ideas into seamless digital experiences and
                            uncovering insights hidden in data.
                            When I'm not coding or analyzing, you'll find me exploring local
                            cafes,
                            exploring new ad-ventures, or soaking up the sunset by the
                            beach.
                        </motion.p>
                    </div>
                </motion.div>
                <motion.div
                    className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/67fc45b43d841344ca5d01c48227d71cde0d248ccf6a7b5cfb7836fadb0b58a9"
                        alt="Developer and Data Scientist profile"
                        className="object-contain w-full aspect-[1.16] max-md:max-w-full"
                    />
                </motion.div>
            </div>
            <motion.div
                className="h-[1px] w-auto mr-20 bg-gray-100 shadow-xl"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
            />
        </div>
    )
}
