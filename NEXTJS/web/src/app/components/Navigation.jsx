"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Bodoni_Moda } from "@next/font/google"
import { Montserrat } from "@next/font/google"
import { Menu, X } from "lucide-react"

const bodoniModa = Bodoni_Moda({
    subsets: ["latin"],
    weight: ["400", "500"],
})

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-montserrat",
})

const navigationLinks = ["about", "portfolio", "blog", "contact"]

const socialIcons = [
    {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3659b8b6f1772a2bd39ccfeea1e65f5b9b696e1a1431d6d8e72fd3459bf8b88a",
        link: "https://www.instagram.com/nage_sh2245?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        alt: "Social media icon 1",
    },
    {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c136c92e451bc45213f3cf91be775171ca4124952b67f740f51eb7a861f808f2",
        link: "https://x.com/NageshMerva",
        alt: "Social media icon 2",
    },
    {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb4706977ef71bc68a23b15ea99bc2ed75c38913d9a27c5e1d61956f859a451d",
        link: "https://www.linkedin.com/in/nagesh-merva-8b2b57289",
        alt: "Social media icon 3",
    },
]

const Navigation = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const router = usePathname()

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="flex items-center justify-between w-full px-6 py-4 bg-zinc-900 text-white"
        >
            <Link href={"/"}>
                <div className={`text-3xl font-medium ${bodoniModa.className}`}>NM</div>
            </Link>
            <div className="hidden md:flex gap-7 items-center">
                {navigationLinks.map((link) => (
                    <Link
                        key={link}
                        href={`/${link}`}
                        className={`relative self-stretch ${montserrat.className}`}
                    >
                        {link}
                        {router === `/${link}` && (
                            <motion.div
                                layoutId="underline"
                                className="absolute left-0 right-0 h-0.5 bg-white bottom-0"
                            />
                        )}
                    </Link>
                ))}
                {socialIcons.map((icon) => (
                    <Link key={icon.alt} href={icon.link} target="_blank">
                        <img
                            src={icon.src}
                            alt={icon.alt}
                            className="w-8 h-8 object-contain"
                        />
                    </Link>
                ))}
            </div>
            <div className="md:hidden flex items-center">
                <button
                    onClick={toggleMobileMenu}
                    className="focus:outline-none text-white"
                >
                    {isMobileMenuOpen ? (
                        <X size={24} aria-label="Close menu" />
                    ) : (
                        <Menu size={24} aria-label="Open menu" />
                    )}
                </button>
            </div>
            {isMobileMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-zinc-900 p-4 shadow-lg z-50 md:hidden">
                    {navigationLinks.map((link) => (
                        <Link
                            key={link}
                            href={`/${link}`}
                            className="block py-2 text-base font-medium text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link}
                        </Link>
                    ))}
                    <div className="flex gap-4 mt-4">
                        {socialIcons.map((icon) => (
                            <Link
                                key={icon.alt}
                                href={icon.link}
                                target="_blank"
                                className="w-8 h-8"
                            >
                                <img src={icon.src} alt={icon.alt} className="object-contain" />
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </motion.div>
    )
}

export default Navigation
