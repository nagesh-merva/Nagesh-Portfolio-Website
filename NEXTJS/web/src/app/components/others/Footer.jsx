"use client"
import React, { useState } from "react"
import { Instagram, Twitter, Linkedin, Copyright, ArrowUp, Mail, MapPin } from 'lucide-react'

const socialLinks = [
    {
        icon: Instagram,
        link: "https://www.instagram.com/nage_sh2245?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        label: "Instagram",
    },
    {
        icon: Twitter,
        link: "https://x.com/NageshMerva",
        label: "Twitter",
    },
    {
        icon: Linkedin,
        link: "https://www.linkedin.com/in/nagesh-merva-8b2b57289",
        label: "LinkedIn",
    },
]

const navItems = [
    { name: "Work", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Resume", href: "/resume.pdf" },
    { name: "Contact", href: "/contact" }
]

function Footer() {
    const [isHovered, setIsHovered] = useState(false)

    const scrollToTop = () => {
        if (typeof window !== "undefined") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        }
    }

    return (
        <footer className="relative bg-black text-white overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="xMidYMid meet">
                    {[...Array(24)].map((_, i) => {
                        const angle = (i * 15) - 180
                        const x = 600 + Math.cos(angle * Math.PI / 180) * 1200
                        const y = 0 + Math.sin(angle * Math.PI / 180) * 1200
                        return (
                            <line
                                key={i}
                                x1="600"
                                y1="0"
                                x2={x}
                                y2={y}
                                stroke="white"
                                strokeWidth="0.5"
                                opacity="0.3"
                            />
                        )
                    })}
                </svg>
            </div>

            <div className="relative pt-32 pb-20 px-8 md:px-16">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/8 -rotate-6 w-full sm:w-11/12 md:w-10/12 lg:w-9/12 h-full max-h-[380px] opacity-50 z-0">
                    <img
                        src="/footer_bg.png"
                        alt="Infinity Symbol"
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="max-w-7xl z-50 mx-auto text-center">
                    <h2 className="z-10 text-4xl md:text-6xl lg:text-7xl font-light mb-6">
                        Ready To <span className="font-black">Build A Story</span>
                    </h2>
                    <p className="z-50 text-3xl md:text-5xl lg:text-6xl font-light mb-12">
                        That Hits A Different?
                    </p>

                    <button
                        onClick={() => window.location.href = '/contact'}
                        className="group relative inline-flex items-center gap-3 px-10 py-5 bg-transparent border-2 border-white rounded-full font-medium text-lg overflow-hidden transition-all duration-300 hover:scale-105"
                    >
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                            let's connect
                        </span>
                        <ArrowUp className="relative z-10 w-5 h-5 rotate-90 transition-all duration-300 group-hover:translate-x-1 group-hover:text-black" />

                        <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </button>
                </div>
            </div>
            <div className="relative z-10 px-8 md:px-16 pb-12">
                <div className="max-w-7xl mx-auto">
                    <div className="relative mb-16">
                        <h3 className="relative z-10 text-7xl md:text-9xl lg:text-[12rem] font-black text-center leading-none tracking-tighter">
                            I AM NAGESH
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 pt-12 border-t border-white/20">
                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/60">
                                Navigation
                            </h4>
                            <nav className="flex flex-col gap-4">
                                {navItems.map((item) => (
                                    <a
                                        href={item.href}
                                        key={item.name}
                                        className="group text-xl font-light hover:font-normal transition-all duration-300 w-fit"
                                    >
                                        <span className="relative">
                                            {item.name}
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                                        </span>
                                    </a>
                                ))}
                            </nav>
                        </div>

                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/60">
                                Get In Touch
                            </h4>
                            <div className="flex flex-col gap-4">
                                <a
                                    href="mailto:officialnagesh.merva@gmail.com"
                                    className="group flex items-center gap-3 text-lg hover:text-white/80 transition-colors"
                                >
                                    <Mail className="w-5 h-5" />
                                    <span>officialnagesh.merva@gmail.com</span>
                                </a>
                                <div className="flex items-center gap-3 text-lg text-white/80">
                                    <MapPin className="w-5 h-5" />
                                    <span>Ponda, Goa, IN</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/60">
                                Follow Me
                            </h4>
                            <div className="flex flex-col gap-4">
                                {socialLinks.map((item, index) => {
                                    const Icon = item.icon
                                    return (
                                        <a
                                            href={item.link}
                                            key={index}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-4 text-lg hover:text-white/80 transition-all duration-300"
                                        >
                                            <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-white group-hover:scale-110 transition-all duration-300">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <span>{item.label}</span>
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/20">
                        <div className="flex items-center gap-2 text-sm text-white/60">
                            <Copyright className="w-4 h-4" />
                            <span>2026 Nagesh Merva. All Rights Reserved.</span>
                        </div>

                        <button
                            onClick={scrollToTop}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className="group relative w-16 h-16 rounded-full border-2 border-white/30 hover:border-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                        >
                            <ArrowUp
                                className={`w-6 h-6 transition-transform duration-300 ${isHovered ? '-translate-y-1' : ''
                                    }`}
                            />

                            <svg className="absolute inset-0 w-full h-full -rotate-90">
                                <circle
                                    cx="32"
                                    cy="32"
                                    r="30"
                                    stroke="white"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeDasharray="188.4"
                                    strokeDashoffset={isHovered ? "0" : "188.4"}
                                    className="transition-all duration-500"
                                />
                            </svg>
                        </button>

                        <div className="text-sm text-white/60">
                            Building myself, one line of code at a time.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer