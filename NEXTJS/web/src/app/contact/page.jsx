"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Instagram, Twitter, Linkedin, Mail, Send, MapPin, Phone } from 'lucide-react'

const socialLinks = [
    {
        icon: Instagram,
        text: "Instagram",
        link: "https://www.instagram.com/nage_sh2245",
        color: "from-pink-500 to-purple-500"
    },
    {
        icon: Twitter,
        text: "Twitter",
        link: "https://x.com/NageshMerva",
        color: "from-blue-400 to-blue-600"
    },
    {
        icon: Linkedin,
        text: "LinkedIn",
        link: "https://www.linkedin.com/in/nagesh-merva-8b2b57289",
        color: "from-blue-600 to-blue-800"
    },
    {
        icon: Mail,
        text: "Gmail",
        link: "mailto:officialnagesh.merva@gmail.com",
        color: "from-red-500 to-red-600"
    },
]

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "officialnagesh.merva@gmail.com",
        link: "mailto:officialnagesh.merva@gmail.com"
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+91 7264833272",
        link: "tel:+917264833272"
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Ponda, Goa, IN",
        link: null
    }
]

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        message: "",
    })
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState("")
    const [focusedField, setFocusedField] = useState(null)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError("")
        setSuccess(false)

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })

            const result = await response.json()

            if (response.ok) {
                setSuccess(true)
                setFormData({ name: "", surname: "", email: "", message: "" })
            } else {
                setError(result.error || "Something went wrong. Please try again.")
            }
        } catch (err) {
            setError("Failed to send message. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex overflow-hidden flex-col bg-neutral-50 min-h-screen">
            <div className="relative flex flex-col lg:flex-row justify-between bg-black overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="relative z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 lg:py-32 lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-sm font-bold tracking-widest text-white/60 uppercase mb-4 block">
                            Get In Touch
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black text-white mb-6">
                            LET'S TALK
                        </h1>
                        <div className="w-24 h-1 bg-white mb-8"></div>
                        <p className="text-xl text-white/80 leading-relaxed max-w-lg mb-12">
                            Have a project in mind or just want to chat? I'd love to hear from you.
                            Drop me a message and let's create something amazing together.
                        </p>
                    </motion.div>

                    <div className="space-y-4 mb-12">
                        {contactInfo.map((info, index) => (
                            <motion.a
                                key={index}
                                href={info.link}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className={`flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 group ${info.link ? 'cursor-pointer' : 'cursor-default'
                                    }`}
                            >
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                    <info.icon className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-xs text-white/60 uppercase tracking-wider">{info.label}</p>
                                    <p className="text-white font-medium">{info.value}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="space-y-4"
                    >
                        <p className="text-sm text-white/60 uppercase tracking-wider mb-4">Follow Me</p>
                        <div className="flex flex-wrap gap-4">
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1 + index * 0.1, type: "spring" }}
                                    className="group relative"
                                >
                                    <div className="relative w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-white transition-all duration-300 border border-white/20 hover:border-white">
                                        <link.icon className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                                    </div>
                                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                        {link.text}
                                    </span>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex items-end lg:w-1/2 h-full min-h-[300px] lg:min-h-[500px] lg:h-auto overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:bg-gradient-to-l"></div>
                    <img
                        src="/nagesh.png"
                        alt="Contact"
                        className="w-full h-auto object-cover"
                    />
                </motion.div>
            </div>

            <div className="relative py-24 px-4 md:px-16">
                <div className="absolute top-0 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-neutral-900/5 rounded-full blur-3xl"></div>

                <div className="relative max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm font-bold tracking-widest text-neutral-400 uppercase mb-4 block">
                            Send A Message
                        </span>
                        <h2 className="text-5xl md:text-6xl font-black mb-6">
                            DROP ME A LINE
                        </h2>
                        <div className="w-24 h-1 bg-black mx-auto"></div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative bg-white rounded-3xl p-8 md:p-12 border-2 border-neutral-200 hover:border-black transition-all duration-500 shadow-xl"
                        onSubmit={handleSubmit}
                    >
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="relative">
                                <label
                                    htmlFor="name"
                                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'name' || formData.name
                                        ? '-top-3 text-xs bg-white px-2 text-black font-bold'
                                        : 'top-4 text-neutral-500'
                                        }`}
                                >
                                    First Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('name')}
                                    onBlur={() => setFocusedField(null)}
                                    required
                                    className="w-full px-4 py-4 rounded-xl border-2 border-neutral-300 focus:border-black focus:outline-none transition-colors bg-transparent"
                                />
                            </div>

                            <div className="relative">
                                <label
                                    htmlFor="surname"
                                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'surname' || formData.surname
                                        ? '-top-3 text-xs bg-white px-2 text-black font-bold'
                                        : 'top-4 text-neutral-500'
                                        }`}
                                >
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="surname"
                                    value={formData.surname}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('surname')}
                                    onBlur={() => setFocusedField(null)}
                                    className="w-full px-4 py-4 rounded-xl border-2 border-neutral-300 focus:border-black focus:outline-none transition-colors bg-transparent"
                                />
                            </div>
                        </div>

                        <div className="relative mb-6">
                            <label
                                htmlFor="email"
                                className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'email' || formData.email
                                    ? '-top-3 text-xs bg-white px-2 text-black font-bold'
                                    : 'top-4 text-neutral-500'
                                    }`}
                            >
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('email')}
                                onBlur={() => setFocusedField(null)}
                                required
                                className="w-full px-4 py-4 rounded-xl border-2 border-neutral-300 focus:border-black focus:outline-none transition-colors bg-transparent"
                            />
                        </div>

                        <div className="relative mb-8">
                            <label
                                htmlFor="message"
                                className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'message' || formData.message
                                    ? '-top-3 text-xs bg-white px-2 text-black font-bold'
                                    : 'top-4 text-neutral-500'
                                    }`}
                            >
                                Your Message *
                            </label>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('message')}
                                onBlur={() => setFocusedField(null)}
                                required
                                className="w-full px-4 py-4 rounded-xl border-2 border-neutral-300 focus:border-black focus:outline-none transition-colors min-h-[160px] resize-none bg-transparent"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="group relative w-full md:w-auto px-12 py-5 bg-black text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-3">
                                {loading ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                    </>
                                )}
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </button>

                        {success && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-6 p-4 bg-green-50 border-2 border-green-500 rounded-xl flex items-center gap-3"
                            >
                                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-green-700 font-medium">Message sent successfully! I'll get back to you soon.</p>
                            </motion.div>
                        )}
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-6 p-4 bg-red-50 border-2 border-red-500 rounded-xl flex items-center gap-3"
                            >
                                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                                <p className="text-red-700 font-medium">{error}</p>
                            </motion.div>
                        )}
                    </motion.form>
                </div>
            </div>
        </div>
    )
}