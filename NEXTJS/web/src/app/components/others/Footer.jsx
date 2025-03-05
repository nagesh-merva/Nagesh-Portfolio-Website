"use client"
import React from "react"
import Link from 'next/link'
import { Instagram, Twitter, Linkedin, Copyright, CircleChevronUp } from 'lucide-react'

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

const navItems = ["about", "portfolio", "blog", "contact"]
function Footer() {
    const scrollToTop = () => {
        if (typeof window !== "undefined") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        }
    }

    return (
        <footer className="relative flex flex-col h-auto min-h-[144px] mt-5 justify-center bg-zinc-300">
            <div className="hidden sm:block absolute -z-0 md:inset-0 -top-16 -left-5 md:left-0 md:-top-16 flex justify-center items-center">
                <div className="flex flex-col justify-center items-center p-4 rounded-full aspect-square h-fit w-fit bg-zinc-300">
                    <CircleChevronUp
                        strokeWidth={0.5}
                        onClick={scrollToTop}
                        className=" w-[100px] h-[100px] md:w-[156px] md:h-[156px] text-gray-600 hover:text-gray-400 transition-colors cursor-pointer"
                    />
                </div>
            </div>

            <div className="px-4  sm:px-8 lg:px-16 py-4 w-full bg-zinc-300 mt-0 md:mt-20">
                <div className="flex flex-col sm:flex-row justify-between gap-5 items-center">
                    <div className="flex items-center gap-2 text-base text-black">
                        <Copyright className="w-6 h-6" />
                        <span>2025 Nagesh Merva</span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
                        <div className="flex gap-7 sm:flex-row flex-col items-center">
                            {navItems.map((link) => (
                                <Link
                                    href={`/${link}`}
                                    key={link}
                                    className="my-auto z-10 cursor-pointer hover:text-gray-600 transition-colors capitalize"
                                >
                                    {link}
                                </Link>
                            ))}
                        </div>
                        <div className="flex gap-4 items-center">
                            {socialLinks.map((item, index) => {
                                const Icon = item.icon
                                return (
                                    <Link
                                        href={item.link}
                                        key={index}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={item.label}
                                    >
                                        <Icon
                                            className="w-8 h-8 text-gray-800 hover:text-gray-600 transition-colors cursor-pointer"
                                        />
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer