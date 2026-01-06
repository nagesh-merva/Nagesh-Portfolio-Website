
import { motion } from "framer-motion"

function AboutContent() {
    return (
        <div className="py-20 px-6 md:px-12 lg:px-20 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative aspect-square rounded-2xl overflow-hidden">
                            <img
                                src="/nagesh.png"
                                alt="Profile"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-black">
                            CRAFTING DIGITAL STORIES
                        </h2>
                        <p className="text-lg text-zinc-700 leading-relaxed">
                            I love transforming ideas into seamless digital experiences and uncovering insights hidden in data. My passion lies in building solutions that not only look beautiful but also solve real problems.
                        </p>
                        <p className="text-lg text-zinc-700 leading-relaxed">
                            When I'm not coding or analyzing data, you'll find me exploring local cafes, embarking on new adventures, or soaking up the sunset by the beach. Life in Goa provides the perfect balance of inspiration and relaxation.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <div className="flex-1 p-4 bg-gradient-to-br from-[#F5E5D8] to-[#FFD7C4] rounded-xl border border-gray-200">
                                <p className="text-3xl font-black text-[#FF4820]">5+</p>
                                <p className="text-sm text-zinc-700">Years Experience</p>
                            </div>
                            <div className="flex-1 p-4 bg-gradient-to-br from-[#F5E5D8] to-[#FFD7C4] rounded-xl border border-gray-200">
                                <p className="text-3xl font-black text-[#FF4820]">50+</p>
                                <p className="text-sm text-zinc-700">Projects Completed</p>
                            </div>
                            <div className="flex-1 p-4 bg-gradient-to-br from-[#F5E5D8] to-[#FFD7C4] rounded-xl border border-gray-200">
                                <p className="text-3xl font-black text-[#FF4820]">10+</p>
                                <p className="text-sm text-zinc-700">Happy Clients</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
export default AboutContent