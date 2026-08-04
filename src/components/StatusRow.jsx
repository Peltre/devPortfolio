// File to handle the "WAR CLOCK"

import { useState, useEffect, useMemo } from "react";
import { projects } from "../data/projects";
import { lastShipped } from "../data/status";
import { techColors } from "../utils/techColors";
import ProjectModal from "./ProjectModal";
import Reveal from "./Reveal";

// Splits a duration in ms into days, hours, minutes, seconds
function splitDuration(ms) {
    const totalSeconds = Math.max(0, Math.floor(ms / 1000))
    const days = Math.floor(totalSeconds / 86400)
    const hours = Math.floor((totalSeconds % 86400) / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60
    return { days, hours, minutes, seconds }
}

function useElapsedSince(date) {
    const [elapsed, setElapsed] = useState(() => Date.now() - date.getTime())

    useEffect(() => {
        const id = setInterval(() => {
            setElapsed(Date.now() - date.getTime())
        }, 1000)
        return () => clearInterval(id)
    }, [date])

    return elapsed
}

function TimeBlock({ value, label }) {
    return (
        <div className="flex flex-col items-center">
            <span className="clock-digits text-5xl md:text-6xl text-primary-400 tabular-nums glow-text">
                {value}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-white/25 mt-2 font-mono">
                {label}
            </span>
        </div>
    )
}

// Live ticking clock showing time since last shipped project
function ShipClock() {
    const since = useMemo(() => new Date(lastShipped.date), [])
    const elapsed = useElapsedSince(since)
    const { days, hours, minutes, seconds } = splitDuration(elapsed)

    return (
        <div className="flex flex-col items-center justify-center text-center gap-7 rounded-2xl border border-white/8 bg-black/50 p-9 h-full min-h-[420px]">
            <p className="font-mono text-xs uppercase tracking-widest text-white/20">
                Time since I last shipped
            </p>

            <div className="flex items-baseline justify-center gap-1 md:gap-1">
                <TimeBlock value={days} label="days" />
                <span className="clock-digits text-white/90 text-3xl md:text-4xl -mt-5">:</span>
                <TimeBlock value={String(hours).padStart(2, "0")} label="hrs" />
                <span className="clock-digits text-white/90 text-3xl md:text-4xl -mt-5">:</span>
                <TimeBlock value={String(minutes).padStart(2, "0")} label="min" />
                <span className="clock-digits text-white/90 text-3xl md:text-4xl -mt-5">:</span>
                <TimeBlock value={String(seconds).padStart(2, "0")} label="sec" />
            </div>

            <p className="text-xs text-white/40 leading-relaxed max-w-xs">
                Last shipped{" "}
                <span className="text-accent-400 font-medium">{lastShipped.project}</span>
                . Every new deploy resets the clock back to zero.
            </p>
        </div>
    )
}

// Spotlight card for a single featured project, reuses the same modal as the grid
function FeaturedSpotlight({ project, onOpen }) {
    return (
        <div
            onClick={() => onOpen(project)}
            className="glow-card group relative flex flex-col md:flex-row rounded-2xl border border-white/8 bg-black/50 overflow-hidden hover:border-primary-400/30 hover:cursor-pointer h-full min-h-[420px]"
        >
            {/* Image */}
            <div className="relative md:w-2/5 h-48 md:h-auto overflow-hidden">
                <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-gray-950 via-gray-950/10 to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border border-secondary-400/30 bg-secondary-400/10 text-secondary-400">
                    Featured
                </span>
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center gap-2.5 p-6 flex-1">
                <div className="flex items-center justify-between">
                    <h3 className="text-white/90 font-medium text-lg">{project.title}</h3>
                    <span className="text-xs text-white/25 font-mono">{project.date}</span>
                </div>
                <p className="text-xs text-primary-400/70 tracking-widest uppercase font-mono">
                    {project.role}
                </p>
                <p className="text-sm text-white/40 leading-relaxed">{project.description}</p>
                <div className="flex gap-1.5 flex-wrap mt-1">
                    {project.tags.map((tag) => {
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
        </div>
    )
}

function StatusRow() {
    const [selectedProject, setSelectedProject] = useState(null)
    const featured = projects.find((p) => p.featured) || projects[0]

    return (
        <section id="now" className="px-8 md:px-20 py-16">
            {/* Header */}
            <div className="mb-8">
                <p className="font-mono text-xs uppercase tracking-widest text-white/20 mb-2">
                    01 / Now
                </p>
                <h2 className="text-3xl font-light text-white/90">What I'm up to</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <Reveal className="md:col-span-2">
                    <ShipClock />
                </Reveal>
                <Reveal className="md:col-span-3" delay={120}>
                    <FeaturedSpotlight project={featured} onOpen={setSelectedProject} />
                </Reveal>
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    )
}

export default StatusRow