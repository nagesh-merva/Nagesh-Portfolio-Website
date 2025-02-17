"use client"

import React, { useEffect, useState } from "react"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useMainContext } from "@/app/context/MainContext"

export default function BlogPost() {
    const { id } = useParams()
    const { AllData } = useMainContext()
    const [post, setPost] = useState(null)

    useEffect(() => {
        if (AllData?.blogs) {
            const foundPost = AllData.blogs.find(blog => blog.id === id)
            setPost(foundPost || null)
        }
    }, [id, AllData])

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#EEEEEE]">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog Post Not Found</h1>
                    <Link href="/blog" className="text-indigo-600 hover:text-indigo-700">
                        Return to Blog List
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#EEEEEE] py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-[400px] object-cover"
                    />
                    <div className="p-6 sm:p-8">
                        <div className="flex items-center justify-between mb-6">
                            <Link
                                href="/blog"
                                className="flex items-center text-indigo-600 hover:text-indigo-700"
                            >
                                <ArrowLeft size={20} className="mr-2" />
                                Back to Blogs
                            </Link>
                            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                                {post.category}
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            {post.title}
                        </h1>

                        <div className="flex items-center text-sm text-gray-500 mb-8">
                            <Calendar size={16} className="mr-2" />
                            <span className="mr-4">{post.date}</span>
                            <Clock size={16} className="mr-2" />
                            <span>{post.readTime}</span>
                        </div>

                        <div className="prose max-w-none">
                            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                                {post.content}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}