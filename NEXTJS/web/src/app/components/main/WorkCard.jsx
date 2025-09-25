import { Github, ExternalLink } from 'lucide-react'
import { motion } from "framer-motion"

function WorkCard({ item }) {
    console.log(item)
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="z-50 flex flex-col h-full w-full text-center text-black bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
        >
            <div className="relative w-full aspect-[16/9] p-3 bg-gray-100 rounded-t-xl overflow-hidden">
                <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover object-center rounded-t-lg"
                />
            </div>
            <div className="flex flex-col flex-1 p-5 pt-4">
                <h3 className="text-lg md:text-xl font-semibold font-montserrat mb-3 line-clamp-2 min-h-[3rem] flex items-center justify-center">
                    {item.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base font-roboto mb-6 flex-1 line-clamp-4 leading-relaxed">
                    {item.description}
                </p>
                <div className="flex justify-center gap-6 mt-auto">
                    <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium hover:text-blue-600 transition-colors duration-200"
                    >
                        <Github size={18} /> Code
                    </a>
                    {item.demo && (
                        <a
                            href={item.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium hover:text-blue-600 transition-colors duration-200"
                        >
                            <ExternalLink size={18} /> Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    )
}
export default WorkCard