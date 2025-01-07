"use client"
import React from "react"
import Link from 'next/link'

const socialLinks = [
    {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/142799b8abcbbd4a3e264bf4cd9c7f28c9f5909d8c881f0c8c40cfed984c730d?placeholderIfAbsent=true&apiKey=f62cd1d3e083440d9ed660c431cacc51",
        link: "https://www.instagram.com/nage_sh2245?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        alt: "Social media icon",
    },
    {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/962af0a3af39e1f17c7eec1d5f567519c27a2c4b5807d59c6144caedd3eb007b?placeholderIfAbsent=true&apiKey=f62cd1d3e083440d9ed660c431cacc51",
        link: "https://x.com/NageshMerva",
        alt: "Social media icon",
    },
    {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/021d53eb86e6393f69fe1bd960adeef1daa8cf1f5f56bfba7fe70a2ad212678e?placeholderIfAbsent=true&apiKey=f62cd1d3e083440d9ed660c431cacc51",
        link: "https://www.linkedin.com/in/nagesh-merva-8b2b57289",
        alt: "Social media icon",
    },
]

const navItems = ["about", "portfolio", "blog", "contact"]

function SocialIcons() {
    return (
        <>
            {socialLinks.map((link, index) => (
                <Link href={link.link} key={index} target="_blank">
                    <img
                        loading="lazy"
                        src={link.src}
                        alt={link.alt}
                        className="object-contain z-20 cursor-pointer shrink-0 w-8 aspect-square"
                    />
                </Link>
            ))}
        </>
    )
}

function NavigationLinks() {
    return (
        <>
            {navItems.map((link) => (
                <Link href={`/${link}`} key={link} className="my-auto z-10 cursor-pointer" tabIndex="0">
                    {link}
                </Link>
            ))}
        </>
    )
}

export default function Footer() {

    const scrollToTop = () => {
        if (typeof window !== "undefined") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        }
    }


    return (
        <div className="relative flex flex-col h-36 mt-1 justify-center bg-zinc-300">
            <div className="absolute -z-0 inset-0 -top-16 flex justify-center items-center">
                <div className="flex flex-col justify-center items-center px-6 rounded-full aspect-square bg-zinc-300 max-md:px-5">
                    <img
                        onClick={scrollToTop}
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b4f0eb2a2ec5d4f4b37efbd4dc09c63b065205c13e6a2d3910bad9aa2a08d46?placeholderIfAbsent=true&apiKey=f62cd1d3e083440d9ed660c431cacc51"
                        alt="Profile"
                        className="object-contain aspect-square w-[156px]"
                    />
                </div>
            </div>
            <div className="px-16 py-px w-full bg-zinc-300 max-md:px-5 max-md:max-w-full">
                <div className="flex justify-between gap-5 max-md:flex-col max-md:items-center">
                    <div className="flex items-center gap-2 text-base text-black max-md:mt-10 max-md:w-full">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/720c375bd3fc7fcf8a9d0ba1afccbcc347daebbf18a6c176b87f4ae5196e57f4?placeholderIfAbsent=true&apiKey=f62cd1d3e083440d9ed660c431cacc51"
                            alt="Copyright icon"
                            className="object-contain shrink-0 w-6 aspect-square"
                        />
                        <div>2025 Nagesh Merva</div>
                    </div>
                    <div className="flex z-10 gap-5 max-md:flex-col max-md:items-center">
                        <div className="flex gap-7 text-base text-black whitespace-nowrap max-md:mt-10">
                            <NavigationLinks />
                            <SocialIcons />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}