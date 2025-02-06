"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Bodoni_Moda } from "next/font/google"
import { Montserrat } from "next/font/google"
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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    }

    const mobileMenuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex items-center justify-between w-full px-6 py-4 bg-zinc-900 text-white"
        >
            <Link href="/">
                <div className={`text-3xl font-medium ${bodoniModa.className}`}>NM</div>
            </Link>

            <div className="hidden md:flex gap-7 items-center">
                <div className="flex gap-7 relative">
                    {navigationLinks.map((link) => (
                        <Link
                            key={link}
                            href={`/${link}`}
                            className={`relative py-2 ${montserrat.className}`}
                        >
                            <span className="relative z-10">{link}</span>
                            {pathname === `/${link}` && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute left-0 bottom-0 right-0 h-0.5 bg-white"
                                    transition={{
                                        type: "spring",
                                        stiffness: 380,
                                        damping: 30
                                    }}
                                />
                            )}
                        </Link>
                    ))}
                </div>

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

            <div className="md:hidden">
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={mobileMenuVariants}
                        className="absolute top-16 left-0 w-full bg-zinc-900 p-4 shadow-lg z-50 md:hidden"
                    >
                        <div className="flex flex-col gap-4">
                            {navigationLinks.map((link) => (
                                <Link
                                    key={link}
                                    href={`/${link}`}
                                    className="relative"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <span className={`text-base font-medium ${montserrat.className}`}>
                                        {link}
                                    </span>
                                    {pathname === `/${link}` && (
                                        <motion.div
                                            layoutId="underline-mobile"
                                            className="absolute left-0 bottom-0 right-0 h-0.5 bg-white"
                                            transition={{
                                                type: "spring",
                                                stiffness: 380,
                                                damping: 30
                                            }}
                                        />
                                    )}
                                </Link>
                            ))}
                        </div>
                        <div className="flex gap-4 mt-4">
                            {socialIcons.map((icon) => (
                                <Link key={icon.alt} href={icon.link} target="_blank">
                                    <img src={icon.src} alt={icon.alt} className="w-8 h-8 object-contain" />
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default Navigation
