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
    if (level >= 80) return "#34d399"
    if (level >= 60) return "#60a5fa"
    if (level >= 40) return "#a78bfa"
    return "#f472b6"
}

const categoryColor = (cat) => {
    const map = {
        Language: "#a78bfa",
        Frontend: "#60a5fa",
        Backend: "#6ee7b7",
        "Game Dev": "#fb923c",
        Design: "#f472b6",
        Tool: "#94a3b8",
    }
    return map[cat] || "#94a3b8"
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
                <div className="w-18 h-18 rounded-2xl border border-white/8 bg-white/3 flex items-center justify-center shrink-0 p-3">
                    <img src={skill.icon} alt={skill.name} className="w-11 h-11 object-contain" />
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
                    <p className="text-xs font-mono font-medium" style={{ color }}>{skill.level}%</p>
                </div>
                <div className="h-0.5 bg-white/8 rounded-full overflow-hidden">
                    <div
                        ref={barRef}
                        className="h-full rounded-full"
                        style={{
                            width: "0%",
                            background: color,
                            transition: "width 0.6s cubic-bezier(0.4,0,0.2,1)"
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
    const [selected, setSelected] = useState(0)
    const [filter, setFilter] = useState("All")

    const tabs = ["All", "Languages", "Frameworks", "Tools"]

    const filteredSkills = filter === "All"
        ? skills
        : skills.filter(s => s.type === filter)

    // reset selected when filter changes
    const handleFilter = (tab) => {
        setFilter(tab)
        setSelected(0)
    }

    return (
        <section id="habilidades" className="px-8 md:px-20 py-10">
            {/* Header */}
            <div className="mb-12">
                <p className="text-xs tracking-widest uppercase text-white/20 font-mono mb-2"> 01 / Skills</p>
                <h2 className="text-3xl font-light text-white/90">Skills & Stack</h2>
            </div>

            {/* Code isnt everything */}
            <div className="-mt-10 mb-6">
                <p className="text-emerald-400/70 font-medium">Code isn't everything...</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {softSkills.map(skill => (
                    <SoftSkillCard key={skill.name} {...skill} />
                ))}
            </div>

            {/* But its still very important */}
            <div className="mt-10 mb-6">
                <p className="text-emerald-400/70 font-medium">But it's still very important, so here is my current Tech Stack...</p>
            </div>

            <div className="flex gap-2 mb-3">
                {tabs.map(tab => {
                    const isActive = filter === tab
                    return (
                        <button
                            key={tab}
                            onClick={() => handleFilter(tab)}
                            className="text-xs font-mono px-4 py-1.5 rounded-full border transition-all duration-150"
                            style={{
                                background: isActive ? "rgba(52,211,153,0.08)" : "transparent",
                                borderColor: isActive ? "rgba(52,211,153,0.35)" : "rgba(255,255,255,0.08)",
                                color: isActive ? "#34d399" : "rgba(255,255,255,0.3)",
                            }}
                        >
                            {tab}
                        </button>
                    )
                })}
            </div>

            {/* Tech skills SELECTOR */}
            <div className="grid border border-white/8 rounded-2xl overflow-hidden mb-6"
                style={{ gridTemplateColumns: "220px 1fr" }}
            >

                {/* Left side */}
                <div className="border-r border-white/8 overflow-y-auto" style={{ maxHeight: "400px" }}>
                    <p className="text-xs tracking-widest uppercase text-white/20 font-mono px-4 py-3 border-b border-white/8">
                        {filter === "All" ? "All skills" : filter}
                    </p>
                    {filteredSkills.map((s, i) => {
                        const isActive = selected === i
                        const color = levelColor(s.level)
                        const catColor = categoryColor(s.category)
                        return (
                            <button
                                key={s.name}
                                onClick={() => setSelected(i)}
                                className="w-full flex items-center gap-3 px-4 py-3 border-b border-white/5 transition-all duration-150 text-left"
                                style={{
                                    background: isActive ? "rgba(110,231,183,0.05)" : "transparent",
                                    borderLeft: `2px solid ${isActive ? "#6ee7b7" : "transparent"}`,
                                }}
                            >
                                <img src={s.icon} alt={s.name} className="w-6 h-6 object-contain shrink-0" />
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs text-white/80 truncate" style={{ fontWeight: isActive ? 500 : 400 }}>
                                        {s.name}
                                    </p>
                                </div>
                            </button>
                        )
                    })}
                </div>
                {/* Right detail  */}
                <TechSkillDetail skill={filteredSkills[selected]} />
            </div>

        </section>
    )
}

export default Skills