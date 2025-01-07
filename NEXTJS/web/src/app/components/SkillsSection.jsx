"use client"

import React from "react"
import { motion } from "framer-motion"
import { Bar } from "react-chartjs-2"
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from "chart.js"

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

const skillLevels = {
    20: "Newbie",
    40: "Beginner",
    60: "Ninja",
    80: "Master",
    100: "OG"
}

export default function SkillsChart() {
    const gradientBackground = (context) => {
        const chart = context.chart
        const { ctx, chartArea } = chart
        if (!chartArea) return

        const gradient1 = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top)
        gradient1.addColorStop(0, "rgba(147, 51, 234, 0.5)")
        gradient1.addColorStop(1, "rgba(236, 72, 153, 0.5)")

        const gradient2 = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top)
        gradient2.addColorStop(0, "rgba(59, 130, 246, 0.5)")
        gradient2.addColorStop(1, "rgba(16, 185, 129, 0.5)")
        return context.datasetIndex === 0 ? gradient1 : gradient2
    }

    const data = {
        labels: [
            "ReactJS",
            "TailwindCSS",
            "Python Flask",
            "JavaScript",
            "Statistics",
            "Marketing Science",
            "Analytics",
            "NLP",
            "Next.js",
            "DSA",
        ],
        datasets: [
            {
                label: "Skills Level",
                data: [90, 85, 75, 80, 85, 95, 90, 70, 75, 65],
                backgroundColor: gradientBackground,
                borderColor: "rgba(147, 51, 234, 0.8)",
                borderWidth: 2,
                borderRadius: 8,
            },
            {
                label: "Confidence Level",
                data: [85, 80, 70, 75, 80, 90, 85, 65, 70, 60],
                backgroundColor: gradientBackground,
                borderColor: "rgba(59, 130, 246, 0.8)",
                borderWidth: 2,
                borderRadius: 8,
            },
        ],
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    font: {
                        family: "Montserrat",
                        size: window.innerWidth < 768 ? 10 : 14,
                        weight: "bold",
                    },
                    padding: window.innerWidth < 768 ? 10 : 20,
                    usePointStyle: true,
                    pointStyle: "rectRounded",
                },
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const value = context.raw;
                        let level = "Newbie";
                        if (value >= 90) level = "OG";
                        else if (value >= 80) level = "Master";
                        else if (value >= 60) level = "Ninja";
                        else if (value >= 40) level = "Beginner";
                        return `${context.dataset.label}: ${level}`;
                    },
                },
                titleFont: {
                    family: "Montserrat",
                    size: window.innerWidth < 768 ? 12 : 14,
                },
                bodyFont: {
                    family: "Roboto",
                    size: window.innerWidth < 768 ? 11 : 13,
                },
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                padding: window.innerWidth < 768 ? 8 : 12,
                cornerRadius: 8,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    font: {
                        family: "Montserrat",
                        size: window.innerWidth < 768 ? 10 : 12,
                        weight: "500",
                    },
                    maxRotation: 45,
                    minRotation: 45,
                },
            },
            y: {
                beginAtZero: true,
                max: 100,
                grid: {
                    color: "rgba(200, 200, 200, 0.2)",
                },
                ticks: {
                    callback: (value) => skillLevels[value] || "",
                    stepSize: 20,
                    font: {
                        family: "Montserrat",
                        size: window.innerWidth < 768 ? 10 : 12,
                        weight: "500",
                    },
                },
            },
        },
        animation: {
            duration: 2000,
            easing: "easeInOutQuart",
        },
    }

    return (
        <motion.div
            className="w-full p-4 sm:p-6 md:p-8 my-6 md:my-10 lg:my-24 bg-white rounded-xl shadow-xl max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <motion.h2
                className="text-xl md:text-3xl font-bold mb-6 md:mb-8 text-center font-montserrat bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                Skills & Expertise
            </motion.h2>
            <motion.div
                className="h-[300px] md:h-[500px] relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                <Bar data={data} options={options} />
            </motion.div>
            <motion.p
                className="mt-4 md:mt-6 text-center text-xs md:text-sm text-gray-500 font-roboto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                Current levels: {new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" })}
            </motion.p>
        </motion.div>
    )
}