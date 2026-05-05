import { href } from "react-router-dom"
import { projects } from "../data/projects"

function ProjectCard({ title, date, role, description, image, github, demo, tags }) {
    return (
        <div className="group relative flex flex-col rounded-2xl border border-white/8 bg/white/[0.02] overflow-hidden hover:border-emerald-400/30 transition-all duration-300 hover:cursor-pointer">
            {/* Image part */}
            <div className="relative h-56 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w/-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay over img */}
                <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/20 to-transparent"/>

                {/* Tags over img */}
                <div className="absolute bottom-3 left-3 flex gap-2 flex-wrap">
                    {tags.map(tag => (
                        <span
                            key={tag}
                            className="text-xs text-emerald-400 bg-emerald-900/60 backdrop-blur-sm border border-emerald-800/50 px-2 py-0.5 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            {/* Basic project info part */}
            <div className="flex flex-col gap-2 p-5">
                <div className="flex items-center justify-between">
                    <h3 className="text-white/90 font-medium text-lg">{title}</h3>
                    <span className="text-xs text-white/25 font-mono">{date}</span>
                </div>
                {/* role */}
                <p className="text-xs text-emerald-400/70 tracking-widest uppercase font-mono">{role}</p>
                {/* description */}
                <p className="text-sm text-white/40 leading-relaxed">{description}</p>
            </div>
        </div>
    )

}

function Projects() {
    return (
        <section id="proyectos" className="px-8 md:px-20 py-10">
            {/* Header */}
            <div className="mb-12">
                <p className="text-xs tracking-widest uppercase text-white/20 font-mono mb-2"> 02 / Projects</p>
                <h2 className="text-3xl font-light text-white/90">Things I've built</h2>
            </div>
            {/* Card grid */}
            <div className="grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-6">
                {projects.map(project => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </section>
    )
}

export default Projects