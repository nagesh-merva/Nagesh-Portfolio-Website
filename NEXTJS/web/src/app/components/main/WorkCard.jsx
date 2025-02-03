import { Github, ExternalLink } from 'lucide-react'
import { motion } from "framer-motion"

function WorkCard({ item }) {
    console.log(item)
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="z-50 flex flex-col grow px-5 pt-5 pb-4 md:pb-16 h-fit w-auto text-center text-black bg-white rounded-xl shadow-sm max-md:mt-10"
        >
            <div className="flex justify-center shrink-0 rounded-lg bg-gray-100 h-[220px] md:h-[240px] w-fit" >
                <img src={item.img} alt={item.title} />
            </div>
            <h3 className="text-xl mt-3 font-semibold font-montserrat mb-2">{item.title}</h3>
            <p className="text-gray-600  mb-4 text-md font-roboto">{item.description}</p>
            <div className="flex gap-4">
                <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-gray-600"
                >
                    <Github size={20} /> Code
                </a>
                <a
                    href={item.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-gray-600"
                >
                    <ExternalLink size={20} /> Demo
                </a>
            </div>
        </motion.div>
    )
}

export default WorkCard