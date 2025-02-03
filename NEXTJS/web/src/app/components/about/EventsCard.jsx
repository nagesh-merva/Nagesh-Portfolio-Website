import { motion } from "framer-motion"

function EventCard({ image, title, index }) {
    return (
        <motion.div
            className="flex-shrink-0 relative rounded-xl shadow-xl overflow-hidden h-[250px] w-[300px] group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                    {title}
                </p>
            </div>
        </motion.div>
    )
}

export default EventCard