import { useState, useEffect } from "react"
import { FaGithub } from "react-icons/fa6"
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

function ProjectModal({ project, onClose }) {
    const [currentImage, setCurrentImage] = useState(0)

    // Close on Escape key
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") onClose()
            if (e.key === "ArrowRight") nextImage()
            if (e.key === "ArrowLeft") prevImage()
        }
        window.addEventListener("keydown", handleKey)
        return () => window.removeEventListener("keydown", handleKey)
    }, [currentImage])

    // block scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => { document.body.style.overflow = "auto" }
    }, [])

    const nextImage = () => setCurrentImage(i => (i + 1) % project.images.length)
    const prevImage = () => setCurrentImage(i => (i - 1 + project.images.length) % project.images.length)

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-lg bg-black/50"
            onClick={onClose}>
            <div
                className="relative w-full max-w-3xl bg-neutral-950 border border-white/10 rounded-2xl overflow-hidden"
                onClick={e => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full border border-white/10 bg-black/50 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all hover:cursor-pointer"
                >
                    <X size={14} />
                </button>

                {/* Image gallery */}
                <div className="relative h-72 bg-neutral-900 overflow-hidden">
                    <img
                        src={project.images[currentImage]}
                        alt={`${prokect.title} - ${currentImage + 1}`}
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-neutral-950/60 to-transparent" />

                    {/* Arrows for navigation */}
                    {project.images.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-white/10 bg-black/50 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all hover:cursor-pointer"
                            >
                                <ChevronLeft size={14} />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-white/10 bg-black/50 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all hover:cursor-pointer"
                            >
                                <ChevronRight size={14} />
                            </button>
                        </>
                    )}

                    {/* Indicators */}
                    {project.images.length > 1 && (
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                            {project.images.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentImage(i)}
                                    className="rounded-full transition-all duration-200"
                                    style={{
                                        width: i === currentImage ? "20px" : "6px",
                                        height: "6px",
                                        background: i === currentImage ? "#34d399" : "rgba(255,255,255,0.3)"
                                    }}
                                />
                            ))}
                        </div>
                    )}

                    {/* Project information */}
                    <div className="p-6">
                        <div className="flex items-start justify-between gap-4 mb-3">
                            <h2 className="text-xl font-medium text-white/90 mb-1">{project.title}</h2>
                            <p className="text-xs text-emerald-400/70 tracking-widest uppercase font-mono">{project.role} · {project.date}</p>
                        </div>

                        {/* Links */}
                        <div className="flex gap-2 shrink-0">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-xs tracking-widest uppercase px-4 py-2 border border-white/10 text-white/40 rounded-lg hover:text-white hover:border-white/30 transition-all"
                                >
                                    <FaGithub size={16} />
                                </a>
                            )}
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-xs tracking-widest uppercase px-4 py-2 border border-white/10 text-white/40 rounded-lg hover:text-white hover:border-white/30 transition-all"
                                >
                                    <ExternalLink size={16} />
                                </a>
                            )}
                        </div>
                    </div>

                    <p className="text-sm text-white/40 leading-relaxed mb-4">{project.description}</p>

                    {/* Tags */}
                    <div className="flex gap-2 flex-wrap">
                        {project.tags.map(tag => (
                            <span
                                key={tag}
                                className="text-xs text-emerald-400 bg-emerald-900/30 border border-emerald-800/50 px-3 py-0.5 rounded-full font-mono"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal