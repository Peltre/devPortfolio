import { useState, useEffect, useCallback } from "react"
import { FaGithub } from "react-icons/fa6"
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { techColors } from "../utils/techColors"

function ProjectModal({ project, onClose }) {
    const [shot, setShot] = useState(0)
    const [visible, setVisible] = useState(false)
    const images = project.images || []

    useEffect(() => {
        requestAnimationFrame(() => setVisible(true))
    }, [])

    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = ""
        }
    }, [])

    const handleClose = useCallback(() => {
        setVisible(false)
        setTimeout(onClose, 260)
    }, [onClose])

    const next = useCallback(() => setShot((i) => (i + 1) % images.length), [images.length])
    const prev = useCallback(
        () => setShot((i) => (i - 1 + images.length) % images.length),
        [images.length]
    )

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") handleClose()
            if (images.length > 1) {
                if (e.key === "ArrowRight") next()
                if (e.key === "ArrowLeft") prev()
            }
        }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [handleClose, next, prev, images.length])

    return (
        <div
            className={`pm-scrim ${visible ? "on" : ""}`}
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
        >
            <div className="pm-sheet" onClick={(e) => e.stopPropagation()}>
                <button className="pm-close" onClick={handleClose} aria-label="Cerrar">
                    <X size={13} />
                </button>

                {/* object-fit: contain, nunca recorta ni amplia mas alla de su tamano real */}
                <div className={`pm-shot ${project.pixelArt ? "crisp" : ""}`}>
                    <img src={images[shot]} alt={`${project.title} ${shot + 1}`} />

                    {images.length > 1 && (
                        <>
                            <span className="pm-counter">
                                {shot + 1} / {images.length}
                            </span>
                            <button className="pm-nav prev" onClick={prev} aria-label="Anterior">
                                <ChevronLeft size={15} />
                            </button>
                            <button className="pm-nav next" onClick={next} aria-label="Siguiente">
                                <ChevronRight size={15} />
                            </button>
                            <div className="pm-dots">
                                {images.map((_, i) => (
                                    <button
                                        key={i}
                                        className={i === shot ? "on" : ""}
                                        onClick={() => setShot(i)}
                                        aria-label={`Imagen ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                <div className="pm-body">
                    <div>
                        <p className="pm-role">{project.role}</p>
                        <h2 className="pm-title">{project.title}</h2>
                        <p className="pm-date">{project.date}</p>
                    </div>

                    <p className="pm-desc">{project.longDescription}</p>

                    <div>
                        <p className="pm-label">Stack</p>
                        <div className="tags">
                            {project.tags.map((tag) => {
                                const color = techColors[tag] || "rgba(255,255,255,0.4)"
                                return (
                                    <span
                                        key={tag}
                                        className="tag"
                                        style={{
                                            color,
                                            background: `${color}14`,
                                            borderColor: `${color}38`,
                                        }}
                                    >
                                        {tag}
                                    </span>
                                )
                            })}
                        </div>
                    </div>

                    {(project.demo || project.github) && (
                        <div className="pm-links">
                            {project.demo && (
                                <a
                                    className="btn btn-primary"
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ExternalLink size={14} /> Ver demo
                                </a>
                            )}
                            {project.github && (
                                <a
                                    className="btn"
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub size={14} /> Código
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectModal