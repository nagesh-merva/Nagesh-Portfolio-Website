import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Brain, Code2, ArrowRight, ArrowDown } from "lucide-react"

const roles = [
    {
        title: "scientist",
        icon: Brain,
        number: "01",
        description: "Data Scientist transforming raw data into actionable insights through cutting-edge analytics and machine learning",
        extendedDescription: "Specializing in Business, Marketing, statistical analysis, and predictive modeling. Experienced in Python, R, and various data science frameworks.",
        skills: ["Python", "R", "Machine Learning", "Statistical Analysis"]
    },
    {
        title: "developer",
        icon: Code2,
        number: "02",
        description: "Web Developer crafting sleek websites and writing clean, efficient code that delivers exceptional user experiences.",
        extendedDescription: "Full-stack developer proficient in ReactJs, NEXTJs, and modern web technologies. Creating responsive, scalable applications with clean architecture.",
        skills: ["React", "Next.js", "TypeScript", "Node.js"]
    },
]

function MainSection() {
    const [activeRole, setActiveRole] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveRole(prev => (prev + 1) % 2)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            <div className="min-h-screen bg-gradient-to-b from-[#F5F0E8] via-[#F5E5D8] to-[#FF8B6A] relative overflow-hidden flex flex-col">
                <div className="flex-1 flex flex-col items-center justify-between px-8 py-12 md:py-5">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full "
                    >
                        <h1 className="text-[3rem] uppercase md:text-[3rem] lg:text-[4rem] xl:text-[5rem] font-black leading-tight tracking-tighter text-black text-left md:text-justify">
                            Creating Solutions, Crafting Code, Building for <span className=" inline-block text-[#FF4820]"> Tomorrow</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="absolute inset-x-0 mx-auto bottom-0 h-[420px] md:h-[450px] w-fit lg:h-[520px]"
                    >
                        <img
                            src="/nagesh.png"
                            alt="Developer"
                            className="w-full h-full object-cover object-top grayscale"
                        />
                    </motion.div>

                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 items-end pb-2 md:pb-8 z-10">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="order-2 md:order-1 text-center md:text-left"
                        >
                            <p className="text-xs sm:text-sm text-black leading-relaxed max-w-md mx-auto md:mx-0">
                                I design and build custom websites for service businesses that look like your brand and work like your best salesperson.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="order-1 md:order-2 flex justify-center mb-4 md:mb-0"
                        >
                            <button className="text-xs sm:text-sm font-medium text-black flex items-center gap-2 hover:opacity-70 transition-opacity">
                                SCROLL TO SEE HOW
                                <ArrowDown size={16} className="animate-bounce" />
                            </button>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="order-3 text-center md:text-right"
                        >
                            <p className="text-xs sm:text-sm text-black">©2025</p>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="relative bg-white py-12 md:py-24 px-8 md:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="relative text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-4">I CAN HELP YOU WITH</h2>
                        <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-96 h-96 bg-neutral-900/5 rounded-full blur-3xl"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {roles.map((role, index) => (
                            <RoleCard
                                key={role.title}
                                {...role}
                                isActive={activeRole === index}
                                onClick={() => setActiveRole(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

function RoleCard({ title, icon: Icon, number, description, extendedDescription, skills, isActive, onClick }) {
    return (
        <div
            onClick={onClick}
            className="group relative cursor-pointer"
        >
            <div className={`
        relative bg-white border-2 rounded-2xl p-8 transition-all duration-500
        ${isActive ? 'border-black shadow-2xl scale-[1.02]' : 'border-neutral-200 hover:border-neutral-400'}
      `}>
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {number}
                </div>
                <div className="mb-6">
                    <Icon size={48} className={`transition-colors ${isActive ? 'text-black' : 'text-neutral-400'}`} />
                </div>
                <h3 className="text-3xl font-black mb-4 uppercase">
                    &lt; {title} /&gt;
                </h3>
                <p className="text-neutral-600 mb-4">
                    {description}
                </p>
                <div className={`
          overflow-hidden transition-all duration-500
          ${isActive ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}
        `}>
                    <p className="text-sm text-neutral-500 mb-4">
                        {extendedDescription}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {skills.map(skill => (
                            <span key={skill} className="px-3 py-1 bg-neutral-100 text-xs font-medium rounded-full">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
                <div className={`
          absolute bottom-8 right-8 transition-all duration-500
          ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
        `}>
                    <ArrowRight size={24} />
                </div>
            </div>
        </div>
    )
}

export default MainSection