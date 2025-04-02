import React from "react"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import clientPromise from "@/helpers/lib/db"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export async function generateStaticParams() {
    const client = await clientPromise
    const db = client.db("Portfolio")
    const blogs = await db.collection('blogs').find({}, { projection: { id: 1 } }).toArray()

    return blogs.map((blog) => ({
        id: blog.id,
    }))
}

async function getBlogPost(id) {
    const client = await clientPromise
    const db = client.db("Portfolio")
    const blog = await db.collection('blogs').findOne({ id: id })

    if (!blog) {
        return null
    }

    return blog
}

export default async function BlogPost({ params }) {
    const { id } = params
    const post = await getBlogPost(id)

    if (!post) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-[#EEEEEE] py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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

                        <div className="prose lg:prose-xl mt-6">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {post.content}
                            </ReactMarkdown>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}