"use client"

import React from "react"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const Blogs = [
    {
        title: "The Next Wave of Business Analytics: What Industry Leaders Know",
        excerpt:
            "Exploring how data science is revolutionizing business decision-making and analytics...",
        date: "2024-03-15",
        readTime: "5 min read",
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
        category: "Data Science",
    },
    {
        title: "Build Your First Scalable Web Application: From Zero to Production",
        excerpt:
            "Best practices and architecture patterns for creating scalable web applications...",
        date: "2024-03-10",
        readTime: "8 min read",
        image:
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80",
        category: "Web Development",
    },
    {
        title: "Marketing Analytics: A Data-Driven Approach",
        excerpt:
            "How to leverage data analytics for better marketing decisions and strategy...",
        date: "2024-03-05",
        readTime: "6 min read",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
        category: "Marketing",
    },
    {
        title: "Machine Learning in Business Intelligence",
        excerpt:
            "Implementing machine learning models for enhanced business intelligence...",
        date: "2024-02-28",
        readTime: "7 min read",
        image:
            "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80",
        category: "Machine Learning",
    },
];


export default function Blog() {

    return (
        <div className="h-full w-full flex flex-col items-center pb-32 bg-[#EEEEEE] overflow-hidden">
            <motion.h1
                initial={{ y: -150 }} animate={{ y: 0 }} transition={{ type: "spring" }}
                className="text-6xl py-10 md:py-12 lg:py-16 font-extrabold text-zinc-800 max-md:text-4xl font-montserrat">Blogs</motion.h1>
            <div className=" space-y-8 w-full h-auto flex flex-col items-center">
                {Blogs.map((post, index) => (
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
                                href={`/blog/${index + 1}`}
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