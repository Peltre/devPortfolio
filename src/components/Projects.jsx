import { projects } from "../data/projects"
import ProjectModal from "./ProjectModal"
import { useState } from "react"
import { techColors } from "../utils/techColors"
import Reveal from "./Reveal"

function ProjectCard({ project, onClick }) {

    return (
        <div
            onClick={onClick}
            className="glow-card group relative flex flex-col rounded-2xl border border-white/8 bg-white/2 overflow-hidden hover:border-primary-400/30 hover:cursor-pointer">
            {/* Image part */}
            <div className="relative h-56 overflow-hidden rounded-t-2xl">
                <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform"
                />
                {/* Overlay over img */}
                <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/20 to-transparent" />

                {/* Tags over img */}
                <div className="absolute bottom-3 left-3 flex gap-2 flex-wrap">
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
            {/* Basic project info part */}
            <div className="flex flex-col gap-2 p-5 bg-black/70">
                <div className="flex items-center justify-between">
                    <h3 className="text-white/90 font-medium text-lg">{project.title}</h3>
                    <span className="text-xs text-white/25 font-mono">{project.date}</span>
                </div>
                {/* role */}
                <p className="text-xs text-primary-400/70 tracking-widest uppercase font-mono">{project.role}</p>
                {/* description */}
                <p className="text-sm text-white/40 leading-relaxed">{project.description}</p>
            </div>
        </div>
    )

}

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)

    return (
        <section id="proyectos" className="px-8 md:px-20 py-10 scroll-mt-20">
            {/* Header */}
            <div className="mb-12">
                <p className="text-xs tracking-widest uppercase font-mono mb-2" style={{ color: "var(--sunset-projects)" }}> 03 / Projects</p>
                <h2 className="text-3xl font-light text-white/90">Things I've built</h2>
            </div>
            {/* Card grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, i) => (
                    <Reveal key={project.id} delay={(i % 3) * 80}>
                        <ProjectCard
                            project={project}
                            onClick={() => setSelectedProject(project)}
                        />
                    </Reveal>
                ))}
            </div>

            {/* Project info modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    )
}

export default Projects