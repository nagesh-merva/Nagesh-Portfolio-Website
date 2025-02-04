"use client"

import React from "react"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useMainContext } from "../context/MainContext"

export default function Blog() {
    const { AllData } = useMainContext()
    return (
        <div className="h-full w-full flex flex-col items-center pb-32 bg-[#EEEEEE] overflow-hidden">
            <motion.h1
                initial={{ y: -150 }} animate={{ y: 0 }} transition={{ type: "spring" }}
                className="text-6xl py-10 md:py-12 lg:py-16 font-extrabold text-zinc-800 max-md:text-4xl font-montserrat">Blogs</motion.h1>
            <div className=" space-y-8 w-full h-auto flex flex-col items-center">
                {AllData.blogs.map((post, index) => (
                    <motion.article
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        className="bg-white w-2/3 md:w-4/5 lg:w-3/6 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-auto object-cover"
                        />
                        <div className="p-6">
                            <div className="flex items-center mb-4">
                                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                                    {post.category}
                                </span>
                            </div>
                            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                            <div className="flex items-center text-sm text-gray-500 mb-4">
                                <Calendar size={16} className="mr-2" />
                                <span className="mr-4">{post.date}</span>
                                <Clock size={16} className="mr-2" />
                                <span>{post.readTime}</span>
                            </div>
                            <Link
                                href={`/blog/${post.id}`}
                                className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                            >
                                Read More <ArrowRight size={16} className="ml-2" />
                            </Link>
                        </div>
                    </motion.article>
                ))}
            </div>
        </div>
    )
}