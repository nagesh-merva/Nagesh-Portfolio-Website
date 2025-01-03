// /components/Footer.jsx

import * as React from "react";

const navItems = ["portfolio", "blog", "contact"];

const socialLinks = [
    {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/142799b8abcbbd4a3e264bf4cd9c7f28c9f5909d8c881f0c8c40cfed984c730d?placeholderIfAbsent=true&apiKey=f62cd1d3e083440d9ed660c431cacc51",
        alt: "Social media icon 1",
    },
    {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/962af0a3af39e1f17c7eec1d5f567519c27a2c4b5807d59c6144caedd3eb007b?placeholderIfAbsent=true&apiKey=f62cd1d3e083440d9ed660c431cacc51",
        alt: "Social media icon 2",
    },
    {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/021d53eb86e6393f69fe1bd960adeef1daa8cf1f5f56bfba7fe70a2ad212678e?placeholderIfAbsent=true&apiKey=f62cd1d3e083440d9ed660c431cacc51",
        alt: "Social media icon 3",
    },
];

export function Footer() {
    return (
        <div className="self-stretch px-16 py-px mt-40 w-full bg-zinc-300 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
                    <div className="flex z-10 gap-2 self-stretch my-auto text-base text-black max-md:mt-10">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/720c375bd3fc7fcf8a9d0ba1afccbcc347daebbf18a6c176b87f4ae5196e57f4?placeholderIfAbsent=true&apiKey=f62cd1d3e083440d9ed660c431cacc51"
                            alt="Brand logo"
                            className="object-contain shrink-0 w-6 aspect-square"
                        />
                        <div className="basis-auto">2025 Nagesh Merva</div>
                    </div>
                </div>
                <div className="flex flex-col ml-5 w-[78%] max-md:ml-0 max-md:w-full">
                    <div className="mt-0 w-full max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col">
                            <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
                                <div className="flex grow max-md:mt-6">
                                    <div className="flex flex-col justify-center items-center px-6 rounded-full aspect-square bg-zinc-300 max-md:px-5">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b4f0eb2a2ec5d4f4b37efbd4dc09c63b065205c13e6a2d3910bad9aa2a08d46?placeholderIfAbsent=true&apiKey=f62cd1d3e083440d9ed660c431cacc51"
                                            alt="Profile"
                                            className="object-contain aspect-square w-[156px]"
                                        />
                                    </div>
                                    <div
                                        className="self-end mt-36 text-base text-black max-md:mt-10"
                                        tabIndex={0}
                                        role="button"
                                    >
                                        about
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
                                <div className="flex gap-7 mt-32 text-base text-black whitespace-nowrap max-md:mt-10">
                                    <div className="flex gap-7">
                                        {navItems.map((item, index) => (
                                            <div key={index} className="my-auto" tabIndex={0} role="button">
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex gap-7">
                                        {socialLinks.map((link, index) => (
                                            <img
                                                key={index}
                                                loading="lazy"
                                                src={link.src}
                                                alt={link.alt}
                                                className="object-contain shrink-0 w-8 aspect-square"
                                                tabIndex={0}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
