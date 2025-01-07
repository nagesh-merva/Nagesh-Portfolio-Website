"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-montserrat",
});

const roles = [
    {
        title: "scientist",
        description: "Data Scientist transforming raw data into actionable insights through cutting-edge analytics and machine learning",
        extendedDescription: "Specializing in Business, Marketing, statistical - analysis, and predictive modeling. Experienced in Python, R, and various data science frameworks.",
    },
    {
        title: "developer",
        description: "Web Developer crafting sleek websites and writing clean, efficient code that delivers exceptional user experiences.",
        extendedDescription: "Full-stack developer proficient in ReactJs, NEXTJs, and modern web technologies. Creating responsive, scalable applications with clean architecture.",
    },
];

function MainSection() {
    const [expandedRole, setExpandedRole] = useState(null);

    return (
        <div className="flex items-center justify-center px-5 md:px-14 lg:px-20">
            <div className="flex items-center justify-between w-full max-w-7xl gap-5 max-md:flex-col">
                <motion.div
                    className="flex-1 min-w-[300px]"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{
                        opacity: expandedRole === "developer" ? 0 : 1,
                        x: expandedRole === "developer" ? -100 : 0,
                        width: expandedRole === "scientist" ? "40%" : "auto",
                    }}
                    transition={{ duration: 0.5 }}
                >
                    <RoleCard
                        {...roles[0]}
                        onHover={() => setExpandedRole("scientist")}
                        onLeave={() => setExpandedRole(null)}
                        isExpanded={expandedRole === "scientist"}
                    />
                </motion.div>

                <motion.div
                    className="relative w-[500px] h-[600px] flex-shrink-0 max-md:w-full max-md:h-[400px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        x: expandedRole === "scientist" ? "25%" : expandedRole === "developer" ? "-25%" : 0
                    }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src="/nagesh.png"
                        alt="Profile"
                        fill
                        className="object-contain"
                        priority
                    />
                </motion.div>

                <motion.div
                    className="flex-1 min-w-[300px]"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{
                        opacity: expandedRole === "scientist" ? 0 : 1,
                        x: expandedRole === "scientist" ? 100 : 0,
                        width: expandedRole === "developer" ? "40%" : "auto",
                    }}
                    transition={{ duration: 0.5 }}
                >
                    <RoleCard
                        {...roles[1]}
                        onHover={() => setExpandedRole("developer")}
                        onLeave={() => setExpandedRole(null)}
                        isExpanded={expandedRole === "developer"}
                    />
                </motion.div>
            </div>
        </div>
    );
}

function RoleCard({ title, description, extendedDescription, onHover, onLeave, isExpanded }) {
    return (
        <motion.div
            className="flex flex-col items-center p-6 rounded-xl hover:bg-gray-50 transition-colors"
            onHoverStart={onHover}
            onHoverEnd={onLeave}
            whileHover={{ scale: 1.02 }}
        >
            <motion.div
                className={`text-xl md:text-2xl lg:text-4xl font-bold text-zinc-800 ${montserrat.className}`}
                animate={{ scale: isExpanded ? 1.1 : 1 }}
                transition={{ duration: 0.3 }}
            >
                &lt; {title} &gt;
            </motion.div>

            <motion.div
                className={`mt-6 text-center ${montserrat.className}`}
                initial={false}
                animate={{
                    height: "auto",
                    opacity: 1
                }}
                transition={{ duration: 0.3 }}
            >
                <motion.p
                    className="text-lg text-gray-700"
                    animate={{ opacity: 1 }}
                >
                    {description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                        opacity: isExpanded ? 1 : 0,
                        height: isExpanded ? "auto" : 0
                    }}
                    transition={{ duration: 0.3 }}
                >
                    {isExpanded && (
                        <p className="mt-4 text-md text-gray-600">
                            {extendedDescription}
                        </p>
                    )}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default MainSection;