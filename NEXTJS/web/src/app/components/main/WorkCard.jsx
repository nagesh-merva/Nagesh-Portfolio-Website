import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

function WorkCard({ item, index, isHovered, onHover, onLeave }) {
    return (
        <div
            className="group relative h-full"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            <div className="absolute -top-4 -left-4 z-20 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-black text-lg shadow-lg">
                {String(index + 1).padStart(2, '0')}
            </div>
            <div
                className="relative bg-white rounded-3xl overflow-hidden transition-all duration-500 h-full flex flex-col shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-black"
                style={{
                    transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                }}
            >
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                    <img
                        src={item.img}
                        alt={item.title}
                        className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110 brightness-75' : 'scale-100'
                            }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className={`
                        absolute inset-0 flex items-center justify-center gap-4
                        transition-all duration-500
                        ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                    `}>
                        <a
                            href={item.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn p-4 bg-white rounded-full hover:bg-black transition-all duration-300 transform hover:scale-110 shadow-xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Github className="text-black group-hover/btn:text-white transition-colors" size={22} />
                        </a>
                        {item.demo && (
                            <a
                                href={item.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/btn p-4 bg-white rounded-full hover:bg-black transition-all duration-300 transform hover:scale-110 shadow-xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <ExternalLink className="text-black group-hover/btn:text-white transition-colors" size={22} />
                            </a>
                        )}
                    </div>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
                    />
                </div>
                <div className="flex-1 flex flex-col p-7">
                    <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-black leading-tight pr-2 group-hover:text-black transition-colors">
                            {item.title}
                        </h3>
                    </div>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-6 flex-1">
                        {item.description}
                    </p>
                    <div className="w-full h-px bg-neutral-200 mb-5"></div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-5">
                            <a
                                href={item.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/link flex items-center gap-2 text-sm font-bold text-neutral-700 hover:text-black transition-colors"
                            >
                                <Github size={18} className="transition-transform group-hover/link:rotate-12" />
                                <span>Code</span>
                            </a>
                        </div>
                        {item.demo && (
                            <Link href={item.demo} target='blank_' className={`
                            text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 group/link
                            ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
                        `}>
                                <ExternalLink size={18} className="transition-transform group-hover/link:rotate-12" />
                                <span>Live</span>
                            </Link>
                        )}
                    </div>
                </div>
                <div className="absolute inset-0 rounded-3xl pointer-events-none">
                    <div className={`
                        absolute top-0 left-0 w-0 h-0.5 bg-black transition-all duration-500
                        ${isHovered ? 'w-full' : 'w-0'}
                    `}></div>
                    <div className={`
                        absolute top-0 right-0 w-0.5 h-0 bg-black transition-all duration-500 delay-100
                        ${isHovered ? 'h-full' : 'h-0'}
                    `}></div>
                    <div className={`
                        absolute bottom-0 right-0 w-0 h-0.5 bg-black transition-all duration-500 delay-200
                        ${isHovered ? 'w-full' : 'w-0'}
                    `}></div>
                    <div className={`
                        absolute bottom-0 left-0 w-0.5 h-0 bg-black transition-all duration-500 delay-300
                        ${isHovered ? 'h-full' : 'h-0'}
                    `}></div>
                </div>
            </div>
        </div>
    )
}

export default WorkCard