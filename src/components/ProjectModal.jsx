import { useState, useEffect, useCallback } from "react"
import { FaGithub } from "react-icons/fa6"
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { techColors } from "../utils/techColors"

function ProjectModal({ project, onClose }) {
    const [currentImage, setCurrentImage] = useState(0)
    const [visible, setVisible] = useState(false)
    const [imgFade, setImgFade] = useState(true)

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

    // Image change with fade
    const goTo = useCallback((index) => {
        setImgFade(false)
        setTimeout(() => {
            setCurrentImage(index)
            setImgFade(true)
        }, 150)
    }, [])

    const nextImage = useCallback(() =>
        goTo((currentImage + 1) % project.images.length)
        , [currentImage, project.images.length, goTo])

    const prevImage = useCallback(() =>
        goTo((currentImage - 1 + project.images.length) % project.images.length)
        , [currentImage, project.images.length, goTo])

    // Keyboard inputs
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") handleClose()
            if (e.key === "ArrowRight") nextImage()
            if (e.key === "ArrowLeft") prevImage()
        }
        window.addEventListener("keydown", handleKey)
        return () => window.removeEventListener("keydown", handleKey)
    }, [handleClose, nextImage, prevImage])

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
            <div
                className="relative w-full max-w-3xl border border-white/8 rounded-2xl overflow-hidden shadow-2xl"
                style={{
                    background: "#111",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    minHeight: "420px",
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

                {/* Left side - image */}
                <div className="relative overflow-hidden bg-black">
                    <img
                        src={project.images[currentImage]}
                        alt={`${project.title} ${currentImage + 1}`}
                        className="w-full h-full object-contain p-4"
                        style={{
                            opacity: imgFade ? 1 : 0,
                            transition: "opacity 0.15s ease",
                        }}
                    />

                    {/* Arrows */}
                    {project.images.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="cursor-pointer absolute left-2.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full border border-white/10 bg-black/60 flex items-center justify-center text-white/50 hover:text-white hover:border-white/25 transition-all"
                            >
                                <ChevronLeft size={13} />
                            </button>
                            <button
                                onClick={nextImage}
                                className="cursor-pointer absolute right-2.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full border border-white/10 bg-black/60 flex items-center justify-center text-white/50 hover:text-white hover:border-white/25 transition-all"
                            >
                                <ChevronRight size={13} />
                            </button>
                        </>
                    )}

                    {/* Image index indicators */}
                    {project.images.length > 1 && (
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                            {project.images.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => goTo(i)}
                                    className="rounded-full transition-all duration-200"
                                    style={{
                                        width: i === currentImage ? "16px" : "4px",
                                        height: "4px",
                                        background: i === currentImage ? "#34d399" : "rgba(255,255,255,0.25)",
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Right side - info */}
                <div className="flex flex-col justify-center gap-4 p-8 overflow-y-auto">

                    {/* Header */}
                    <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 mb-1">
                            {project.role}
                        </p>
                        <h2 className="text-xl font-light text-white/90">{project.title}</h2>
                        <p className="font-mono text-[10px] text-white/20 mt-1">{project.date}</p>
                    </div>

                    <hr className="border-none border-t border-white/6" />

                    {/* Description */}
                    <p className="text-sm text-white/40 leading-relaxed">{project.description}</p>

                    {/* Tags */}
                    <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-white/20 mb-2">
                            Stack
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                            {project.tags.map(tag => {
                                const color = techColors[tag] || "rgba(255,255,255,0.4)"
                                return (
                                    <span
                                        key={tag}
                                        className="text-[10px] font-mono px-2 py-0.5 rounded-full border"
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
                            <p className="font-mono text-[10px] uppercase tracking-widest text-white/20 mb-2">
                                Links
                            </p>
                            <div className="flex gap-2">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-[11px] font-mono px-3 py-1.5 rounded-lg border border-white/10 text-white/40 hover:text-white/80 hover:border-white/25 transition-all"
                                    >
                                        <FaGithub size={12} /> GitHub
                                    </a>
                                )}
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-[11px] font-mono px-3 py-1.5 rounded-lg border border-emerald-400/25 text-emerald-400 bg-emerald-400/6 hover:bg-emerald-400/12 transition-all"
                                    >
                                        <ExternalLink size={12} /> Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectModal