import { softSkills, skills } from "../data/skills"
import { useState, useEffect, useRef } from "react"

// Lavels & variables for technical skills

const levelLabel = (level) => {
    if (level >= 80) return "Expert"
    if (level >= 60) return "Proficient"
    if (level >= 40) return "Intermediate"
    return "Beginner"
}

const levelColor = (level) => {
    if (level >= 80) return "bg-emerald-400/20"
    if (level >= 60) return "bg-yellow-400/20"
    if (level >= 40) return "bg-orange-400/20"
    return "bg-red-400/20"
}

function TechSkillDetail({ skill }) {
    const barRef = useRef(null)
    const color = levelColor(skill.level)
    const catColor = "#a78bfa"

    useEffect(() => {
        if (barRef.current) {
            barRef.current.style.width = `0%`
            setTimeout(() => {
                if (barRef.current) barRef.current.style.width = skill.level + "%"  
            }, 50)
        }
}, [skill])

    return (
        <div className="p-8 flex flex-col justify-center h-full relative overflow-hidden">
            {/* Icon - name - badge */}
            <div className="flex items-start gap-5 mb-6 relative">
                <div className="w-18 h-18 rounded-2xl border border-white/8 bg-white/3 flex items-center justify-center flex-shrink-0 p-3">
                    <img src={skill.icon} alt={skill.name} className="w-11 h-11 object-contain"/>
                </div>
                <div className="pt-1">
                    <p className="text-xl font-medium text-white/90 mb-2">{skill.name}</p>
                    <div className="flex gap-2">
                        <span
                            className="text-xs font-mono px-3 py-0.5 rounded-full border"
                            style={{ color: catColor, background: `${catColor}15`, borderColor: `${catColor}30` }}
                        >
                            {skill.category}
                        </span>
                        <span
                            className="text-xs font-mono px-3 py-0.5 rounded-full border"
                            style={{ color, background: `${color}15`, borderColor: `${color}30` }}
                        >
                            {levelLabel(skill.level)}
                        </span>
                    </div>
                </div>
            </div>

            {/* Description */}
            <p className="text-sm text-white/40 leading-relaxed mb-6 relative">{skill.description}</p>

            {/* Proficiency bar */}
            <div className="mb-5 relative">
                <div className="flex justify-between mb-2">
                    <p className="text-xs tracking-widest uppercase text-white/20 font-mono">Proficiency</p>
                    <p className="text-xs font-mono font-medium" style={{ color}}>{skill.level}%</p>
                </div>
                <div className="h-0.5 bg-white/8 rounded-full overflow-hidden">
                    <div
                        ref={barRef}
                        className="h-full rounded-full"
                        style={{
                            width: "0%",
                            background: color,
                            transition: "width 0.6s cuibic-bezier(0.4,0,0.2,1)"
                        }}
                    />
                </div>
            </div>

            {/* Projects */}
            <div className="relative">
                <p className="text-xs tracking-widest uppercase text-white/20 font-mono mb-3">Used in</p>
                <div className="flex flex-wrap gap-2">
                        {skill.projects.map(p => (
                            <span
                                key={p}
                                className="text-xs font-mono px-3 py-1 rounded border border-white/8 bg-white/3 text-white/40"
                            >
                                {p}
                            </span>
                        ))}
                </div>
            </div>
        </div>
    )
}

function SoftSkillCard({ name, description, icon }) {
    return (
        <div className="group flex flex-col gap-4 p-6 bg-white/2 border border-white/8 rounded-2xl hover:border-emerald-400/20 hover:bg-white/4 transition-all duration-300">
            <div className="flex items-center gap-4">
                <span className="text-2xl text-emerald-400/60 font-mono">{icon}</span>
                <h3 className="text-white/80 font-medium tracking-wide">{name}</h3>
            </div>
            <p className="text-sm text-white/35 leading-relaxed">{description}</p>
        </div>
    )
}

function Skills() {
    return (
        <section id="habilidades" className="px-8 md:px-20 py-10">
            {/* Header */}
            <div className="mb-12">
                <p className="text-xs tracking-widest uppercase text-white/20 font-mono mb-2"> 01 / Skills</p>
                <h2 className="text-3xl font-light text-white/90">Skills & Stack</h2>
            </div>

            {/* Code isnt everything */}
            <div className="-mt-10 mb-4">
                <p className="text-emerald-400/60 font-medium">Code isn't everything...</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {softSkills.map(skill => (
                    <SoftSkillCard key={skill.name} {...skill} />
                ))}
            </div>

            {/* But its still very important */}
            <div className="mt-4">
                <p className="text-emerald-400/60 font-medium">But it's still very important...</p>
            </div>
            
        </section>
    )
}   

export default Skills