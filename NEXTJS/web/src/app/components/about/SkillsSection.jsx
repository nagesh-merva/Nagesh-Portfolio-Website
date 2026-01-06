
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useMainContext } from "@/app/context/MainContext"

function SkillsChart({ skills }) {
    const [allSkills, setAllSkills] = useState([])
    const { AllData } = useMainContext()

    useEffect(() => {
        const flatSkills = []
        AllData.skills.forEach(category => {
            category.skills.forEach(skill => {
                flatSkills.push({ ...skill, category: category.category })
            })
        })
        setAllSkills(flatSkills)
    }, [skills])

    // console.log(allSkills)

    return (
        <div className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-[#F5F0E8]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4 text-black">
                        SKILLS & EXPERTISE
                    </h2>
                    <p className="text-lg text-zinc-700">
                        Technologies and tools I work with
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {allSkills.map((skill, index) => (
                        <SkillCard key={index} skill={skill} index={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

function SkillCard({ skill, index }) {

    console.log(skill)
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative p-6 bg-white rounded-xl border border-gray-200 hover:border-[#FF4820] hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
            <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2 text-black">{skill.name}</h3>
                <p className="text-sm text-zinc-600 mb-4">{skill.category}</p>
                <div className="space-y-2">
                    <div>
                        <div className="flex justify-between text-xs mb-1 text-zinc-700">
                            <span>Skill</span>
                            <span>{skill.skill_level}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.skill_level}%` }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                                className="h-full bg-gradient-to-r from-[#FF4820] to-[#FF8B6A]"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-xs mb-1 text-zinc-700">
                            <span>Confidence</span>
                            <span>{skill.confidence}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.confidence}%` }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                                className="h-full bg-gradient-to-r from-[#FF6B35] to-[#FFA07A]"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF4820]/0 to-[#FF4820]/0 group-hover:from-[#FF4820]/5 group-hover:to-transparent transition-all duration-300"></div>
        </motion.div>
    )
}


export default SkillsChart