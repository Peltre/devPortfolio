import { useState, useEffect, useCallback } from "react"
import { FaGithub } from "react-icons/fa6"
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { techColors } from "../utils/techColors"

function ProjectModal({ project, onClose }) {
    const [currentImage, setCurrentImage] = useState(0)
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [visible, setVisible] = useState(false)

    // Animate in
    useEffect(() => {
        requestAnimationFrame(() => setVisible(true))
    }, [])

    // Block scroll
    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => { document.body.style.overflow = "auto" }
    }, [])

    // Smooth close
    const handleClose = useCallback(() => {
        setVisible(false)
        setTimeout(onClose, 260)
    }, [onClose])

    const nextImage = useCallback(() => {
        setCurrentImage((i) => (i + 1) % project.images.length)
    }, [project.images.length])

    const prevImage = useCallback(() => {
        setCurrentImage((i) => (i - 1 + project.images.length) % project.images.length)
    }, [project.images.length])

    const openLightbox = (index) => {
        setCurrentImage(index)
        setLightboxOpen(true)
    }

    // Keyboard inputs - Escape closes lightbox first, then the modal
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") {
                if (lightboxOpen) setLightboxOpen(false)
                else handleClose()
            }
            if (lightboxOpen) {
                if (e.key === "ArrowRight") nextImage()
                if (e.key === "ArrowLeft") prevImage()
            }
        }
        window.addEventListener("keydown", handleKey)
        return () => window.removeEventListener("keydown", handleKey)
    }, [handleClose, nextImage, prevImage, lightboxOpen])

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{
                background: visible ? "rgba(0,0,0,0.75)" : "rgba(0,0,0,0)",
                backdropFilter: visible ? "blur(10px)" : "blur(0px)",
                transition: "background 0.26s ease, backdrop-filter 0.26s ease",
            }}
            onClick={handleClose}
        >
            {/* Main modal - text focused */}
            <div
                className="relative w-full max-w-lg border border-white/8 rounded-2xl overflow-hidden shadow-2xl bg-[#111] max-h-[85vh] flex flex-col"
                style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.97)",
                    transition: "opacity 0.26s ease, transform 0.26s ease",
                }}
                onClick={e => e.stopPropagation()}
            >
                {/* Close */}
                <button
                    onClick={handleClose}
                    className="cursor-pointer absolute top-3.5 right-3.5 z-20 w-7 h-7 rounded-full border border-white/10 bg-black/70 flex items-center justify-center text-white/40 hover:text-white hover:border-white/25 transition-all"
                >
                    <X size={12} />
                </button>

                <div className="flex flex-col gap-4 p-8 overflow-y-auto">

                    {/* Header */}
                    <div>
                        <p className="font-mono text-xs uppercase tracking-widest text-primary-400 mb-1">
                            {project.role}
                        </p>
                        <h2 className="text-2xl font-bold italic text-white/90">{project.title}</h2>
                        <p className="font-mono text-xs text-white/20 mt-1">{project.date}</p>
                    </div>

                    <hr className="border-t border-white/6" />

                    {/* Description */}
                    <p className="text-sm text-white/40 leading-relaxed">{project.longDescription}</p>

                    {/* Gallery - cover image, count badge shows how many more */}
                    {project.images.length > 0 && (
                        <div>
                            <p className="font-mono text-[11px] uppercase tracking-widest text-white/20 mb-2">
                                Gallery
                            </p>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => openLightbox(0)}
                                    className="relative cursor-pointer shrink-0 w-28 h-20 rounded-lg border border-white/12 overflow-hidden shadow-lg"
                                >
                                    <img
                                        src={project.images[0]}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                    {project.images.length > 1 && (
                                        <span className="absolute bottom-1.5 right-1.5 text-[9px] font-mono text-white bg-black/70 px-1.5 py-0.5 rounded-full">
                                            {project.images.length}
                                        </span>
                                    )}
                                </button>
                                <span className="font-mono text-[10px] text-white/30 leading-tight">
                                    Click to<br />browse →
                                </span>
                            </div>
                        </div>
                    )}

                    {/* Tags */}
                    <div>
                        <p className="font-mono text-[11px] uppercase tracking-widest text-white/20 mb-2">
                            Stack
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                            {project.tags.map(tag => {
                                const color = techColors[tag] || "rgba(255,255,255,0.4)"
                                return (
                                    <span
                                        key={tag}
                                        className="text-xs font-mono px-2 py-0.5 rounded-full border"
                                        style={{
                                            color,
                                            background: `${color}12`,
                                            borderColor: `${color}30`,
                                        }}
                                    >
                                        {tag}
                                    </span>
                                )
                            })}
                        </div>
                    </div>

                    {/* Links - only if they exist within the project */}
                    {(project.github || project.demo) && (
                        <div>
                            <p className="font-mono text-[11px] uppercase tracking-widest text-white/20 mb-2">
                                Links
                            </p>
                            <div className="flex gap-2">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg border border-primary-400/25 text-primary-400 bg-primary-400/6 hover:bg-primary-400/12 hover:shadow-[0_0_18px_rgba(255,226,155,0.25)] transition-all"
                                    >
                                        <FaGithub size={12} /> GitHub
                                    </a>
                                )}
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg border border-accent-400/25 text-accent-400 bg-accent-400/6 hover:bg-accent-400/12 hover:shadow-[0_0_18px_rgba(34,211,238,0.3)] transition-all"
                                    >
                                        <ExternalLink size={12} /> Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Lightbox - full image on top of the modal, never cropped */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-black/90"
                    onClick={(e) => { e.stopPropagation(); setLightboxOpen(false) }}
                >
                    <button
                        onClick={(e) => { e.stopPropagation(); setLightboxOpen(false) }}
                        className="cursor-pointer absolute top-4 right-4 z-20 w-9 h-9 rounded-full border border-white/10 bg-black/70 flex items-center justify-center text-white/50 hover:text-white hover:border-white/25 transition-all"
                    >
                        <X size={16} />
                    </button>

                    <img
                        src={project.images[currentImage]}
                        alt={`${project.title} ${currentImage + 1}`}
                        className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    />

                    {project.images.length > 1 && (
                        <>
                            <button
                                onClick={(e) => { e.stopPropagation(); prevImage() }}
                                className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/10 bg-black/60 flex items-center justify-center text-white/60 hover:text-white hover:border-white/25 transition-all"
                            >
                                <ChevronLeft size={16} />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); nextImage() }}
                                className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/10 bg-black/60 flex items-center justify-center text-white/60 hover:text-white hover:border-white/25 transition-all"
                            >
                                <ChevronRight size={16} />
                            </button>

                            {/* Index indicators */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
                                {project.images.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={(e) => { e.stopPropagation(); setCurrentImage(i) }}
                                        className="cursor-pointer rounded-full transition-all duration-200"
                                        style={{
                                            width: i === currentImage ? "16px" : "4px",
                                            height: "4px",
                                            background: i === currentImage ? "var(--color-primary-400)" : "rgba(255,255,255,0.35)",
                                        }}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    )
}

export default ProjectModal