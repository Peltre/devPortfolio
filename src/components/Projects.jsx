import { useState } from "react"
import { projects } from "../data/projects"
import { techColors } from "../utils/techColors"
import ProjectModal from "./ProjectModal"
import Reveal from "./Reveal"
import { ArrowRight } from "./Icons"

function ProjectCard({ project, onOpen }) {
    return (
        <article
            className="card card-tap pcard"
            role="button"
            tabIndex={0}
            aria-label={`Abrir detalles de ${project.title}`}
            onClick={() => onOpen(project)}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    onOpen(project)
                }
            }}
        >
            <div className="pcard-img">
                <img src={project.images[0]} alt={`Captura de ${project.title}`} loading="lazy" />
            </div>

            <div className="pcard-body">
                <div className="meta">
                    <span className="role-s">{project.role}</span>
                    <span>{project.date}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {/* Los tags bajan al cuerpo: encima de la imagen competían con
                    el screenshot y en el de Phlox eran ilegibles. */}
                <div className="tags">
                    {project.tags.map((tag) => {
                        const color = techColors[tag] || "rgba(255,255,255,0.4)"
                        return (
                            <span
                                key={tag}
                                className="tag"
                                style={{ color, background: `${color}14`, borderColor: `${color}38` }}
                            >
                                {tag}
                            </span>
                        )
                    })}
                </div>
                <span className="cue">
                    Open project <ArrowRight width={13} height={13} />
                </span>
            </div>
        </article>
    )
}

function Projects() {
    const [selected, setSelected] = useState(null)

    return (
        <section className="section" id="work">
            <div className="inner">
                <div className="sec-head">
                    <div>
                        <p className="eyebrow" style={{ color: "var(--s-work)" }}>
                            Projects
                        </p>
                        <h2>Things I've built</h2>
                    </div>
                </div>

                <div className="proj-grid">
                    {projects.map((project, i) => (
                        <Reveal key={project.id} delay={(i % 3) * 90}>
                            <ProjectCard project={project} onOpen={setSelected} />
                        </Reveal>
                    ))}
                </div>
            </div>

            {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
        </section>
    )
}

export default Projects