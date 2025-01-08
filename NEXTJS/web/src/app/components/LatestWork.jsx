"use client"

import React from "react"
import { motion } from "framer-motion"
import { Montserrat, Roboto } from 'next/font/google'
import { Github, ExternalLink } from 'lucide-react'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-montserrat',
})

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-roboto',
})

const workItems = [
    {
        title: "End to End Food delivery app",
        img: "/foodelivery.png",
        description: 'Full-stack Food order and live order tracking, with Admin Dashboard.',
        github: 'https://github.com/nagesh-merva/',
        demo: 'https://example.com'
    },
    {
        title: "SEO tool using Llama 3.2",
        img: "/scribz.png",
        description: 'A SEO tool powered by Llama 3.2, which generates blogs, rank your website seo, and help you optimize & organise your seo.',
        github: 'https://github.com/nagesh-merva/',
        demo: 'https://example.com'
    },
    {
        title: "Notification Marketing Campaign Analysis of Zomato",
        img: "/marketingzomato.webp",
        description: 'Interactive dashboard for visualizing complex Marketing Campaigns and Anaylsing data',
        github: 'https://github.com/nagesh-merva/',
        demo: 'https://example.com'
    }
]

function LatestWork() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mt-10 pb-20 lg:mt-20 flex flex-col px-10 md:px-20 lg:px-28 rounded-none"
        >
            <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-5 items-center self-center w-full text-2xl font-light text-center text-black max-w-[935px] max-md:max-w-full"
            >
                <motion.div initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="shrink-0 self-stretch my-auto max-w-full h-px border border-solid border-zinc-800 w-[313px] drop-shadow-lg"
                />
                <motion.div
                    variants={itemVariants}
                    className={`grow shrink self-stretch w-fit text-clip ${montserrat.className}`}
                >
                    My Latest Work
                </motion.div>
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="shrink-0 self-stretch my-auto max-w-full h-px border border-solid border-zinc-800 w-[313px] drop-shadow-lg"
                />
            </motion.div>
            <div className="mt-14 w-full max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    {workItems.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full shadow-xl rounded-lg"
                        >
                            <WorkCard item={item} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

function WorkCard({ item }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col grow px-5 pt-5 pb-4 md:pb-16 h-fit w-auto text-center text-black bg-white rounded-xl shadow-sm max-md:mt-10"
        >
            <div className="flex justify-center shrink-0 rounded-lg bg-gray-100 h-[220px] md:h-[240px] w-fit" >
                <img src={item.img} alt={item.title} />
            </div>
            <h3 className="text-xl mt-3 font-semibold font-montserrat mb-2">{item.title}</h3>
            <p className="text-gray-600  mb-4 text-md font-roboto">{item.description}</p>
            <div className="flex gap-4">
                <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-gray-600"
                >
                    <Github size={20} /> Code
                </a>
                <a
                    href={item.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-gray-600"
                >
                    <ExternalLink size={20} /> Demo
                </a>
            </div>
        </motion.div>
    )
}

export default LatestWork