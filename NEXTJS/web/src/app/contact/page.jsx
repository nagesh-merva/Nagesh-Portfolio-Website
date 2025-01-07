"use client"

import React from "react"
import { motion } from "framer-motion"

const socialLinks = [
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3659b8b6f1772a2bd39ccfeea1e65f5b9b696e1a1431d6d8e72fd3459bf8b88a?placeholderIfAbsent=true&apiKey=f62cd1d3e083440d9ed660c431cacc51",
        text: "Instagram",
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c136c92e451bc45213f3cf91be775171ca4124952b67f740f51eb7a861f808f2?placeholderIfAbsent=true&apiKey=f62cd1d3e083440d9ed660c431cacc51",
        text: "Twitter",
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7b212bb724ee23dd5ea875444110d5661d02abf3c8482a130e94d43c394534fb?placeholderIfAbsent=true&apiKey=f62cd1d3e083440d9ed660c431cacc51",
        text: "LinkedIn",
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef3a8fbbd1bd6e0322471d3c054524489202946808487537b20153568ac2ff96?placeholderIfAbsent=true&apiKey=f62cd1d3e083440d9ed660c431cacc51",
        text: "Gmail",
    },
]

export default function Contact() {
    return (
        <div className="flex overflow-hidden flex-col bg-white h-full w-full">
            <div className="flex flex-col md:flex-row justify-between h-full w-full bg-zinc-900 pt-16 md:pt-0">
                <div className="flex justify-center px-4 md:pl-20 lg:pl-28 z-10 flex-col max-w-full md:max-w-[50%]">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-4xl md:text-6xl font-extrabold text-white text-center md:text-left"
                    >
                        Contact.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="my-4 md:my-6 text-xl md:text-3xl font-light leading-relaxed text-zinc-100 text-center md:text-left"
                    >
                        Get in touch with me through social media or send me an email.
                    </motion.p>
                    <div className="grid grid-cols-2 gap-4 md:gap-5 mx-auto md:mx-0 w-full max-w-md md:max-w-none">
                        {socialLinks.map((link, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 150 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.6, type: "spring" }}
                                key={index}
                                className="flex gap-3 md:gap-4 items-center text-xl md:text-3xl font-light text-zinc-500"
                            >
                                <img
                                    loading="lazy"
                                    src={link.icon}
                                    alt={link.text}
                                    className="w-8 md:w-[52px] aspect-square object-contain"
                                />
                                <div className="truncate">{link.text}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full md:w-[50%] h-[300px] md:h-auto mt-8 md:mt-0"
                >
                    <img
                        loading="lazy"
                        src="/nagesh.png"
                        alt="Contact Illustration"
                        className="object-contain w-full h-full"
                    />
                </motion.div>
            </div>

            <div className="flex flex-col items-center px-4 md:px-0 mt-12 md:mt-20">
                <div className="flex items-center w-full max-w-[1103px] mb-8">
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="hidden md:block h-px flex-1 border-t border-black"
                    />
                    <div className="text-xl md:text-3xl font-light text-zinc-800 px-4">
                        Send me an email
                    </div>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="hidden md:block h-px flex-1 border-t border-black"
                    />
                </div>

                <motion.form
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-[820px] p-4 md:p-6 mb-12 md:mb-20 bg-white rounded-lg border border-zinc-300"
                >
                    <div className="grid md:grid-cols-2 gap-6 md:gap-9">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="px-4 py-3 rounded-lg border border-zinc-300"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="surname" className="mb-2">Surname</label>
                            <input
                                type="text"
                                id="surname"
                                className="px-4 py-3 rounded-lg border border-zinc-300"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col mt-6 md:mt-9">
                        <label htmlFor="email" className="mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="px-4 py-3 rounded-lg border border-zinc-300"
                        />
                    </div>

                    <div className="flex flex-col mt-6 md:mt-9">
                        <label htmlFor="message" className="mb-2">Message</label>
                        <textarea
                            id="message"
                            className="px-4 py-3 rounded-lg border border-zinc-300 min-h-[120px] md:min-h-[165px]"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-6 md:mt-10 py-3 px-4 rounded-lg bg-zinc-800 text-white border border-zinc-800 transition-colors hover:bg-zinc-700"
                    >
                        Submit
                    </button>
                </motion.form>
            </div>
        </div>
    )
}