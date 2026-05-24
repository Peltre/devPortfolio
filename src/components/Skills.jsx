import { softSkills, skills } from "../data/skills"
import { useState, useEffect, useRef } from "react"

// Category color map

const categoryColor = (cat) => {
    const map = {
        // Code
        Language: "#a78bfa",
        Frontend: "#60a5fa",
        Backend: "#6ee7b7",
        Structure: "#f26b27",
        Styling: "#27a1f2",
        Databases: "#2a57fa",

        // Game
        "Game Dev": "#fb923c",
        Art: "#c9daf5",
        Building: "#5a3afc",

        // Tools
        Design: "#f472b6",
        Tool: "#94a3b8",
        Hosting: "#fafafa",
        Organization: "#2051e6",
        "Version Control": "#828282",
    }
    return map[cat] || "#94a3b8"
}

const levelColor = {
    Advanced: { color: "#34d399", bg: "rgba(52,211,153,0.08)", border: "rgba(52,211,153,0.25)" },
    Intermediate: { color: "#60a5fa", bg: "rgba(96,165,250,0.08)", border: "rgba(96,165,250,0.25)" },
    Basic: { color: "#f472b6", bg: "rgba(244,114,182,0.08)", border: "rgba(244,114,182,0.25)" },
}

// Skill icon minicards
function SkillButton({ skill, active, onClick }) {
    const Icon = skill.icon
    const color = skill.siColor || "#ffffff"

    return (
        <button
            onClick={onClick}
            title={skill.name}
            className="group relative aspect-square w-full flex items-center justify-center rounded-xl border transition-all duration-150"
            style={{
                background: active ? `${color}18` : `${color}08`,
                borderColor: active ? `${color}55` : `${color}20`,
            }}
        >
            {Icon
                ? <Icon size={26} color={skill.siColor} style={{ opacity: active ? 1 : 0.75 }} />
                : <img src={skill.icon} alt={skill.name} className="w-7 h-7 object-contain" style={{ opacity: active ? 1 : 0.7 }} />
            }
            {/* Tooltip */}
            <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-black/90 px-2 py0.5
            font-mono text-xs text-white/70 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                {skill.name}
            </span>
        </button>
    )
}

// Skill Detail Panel
function DetailPanel({ skill }) {
    if (!skill) {
        return (
            <div className="flex h-full items-center justify-center">
                <p className="font-mono text-xs text-white/15">← Select a skill</p>
            </div>
        )

    }

    const catColor = categoryColor(skill.category)

    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex flex-col justify-center gap-4 p-7">
                {/* Category */}
                <p className="font-mono text-xs uppercase tracking-widest" style={{ color: catColor }}>
                    {skill.category}
                </p>

                <div className="flex flex-row gap-3">
                    {/* Name */}
                    <h3 className="text-2xl font-bold text-white/90">
                        {skill.name}
                    </h3>

                    {skill.level && (() => {
                        const l = levelColor[skill.level] || levelColor.Basic
                        return (
                            <span
                                className="self-center font-mono text-[11px] uppercase tracking-widest px-2.5 py-0.5 rounded-full border"
                                style={{ color: l.color, background: l.bg, borderColor: l.border }}
                            >
                                {skill.level}
                            </span>
                        )
                    })()}
                </div>

                {/* What its used for */}
                <p className="text-sm leading-relaxed italic text-white/55">{skill.description}</p>

                <hr className="border-t border-white/6" />

                {/* Experience / usage */}
                {skill.experience && (
                    <blockquote className="border-l-2 pl-4 text-sm italic leading-relaxed text-white/40"
                        style={{ borderColor: `${catColor}40` }}
                    >
                        {skill.experience}
                    </blockquote>
                )}
            </div>

            {/* Certifications */}
            <div className="flex flex-col justify-center gap-4 p-7">
                <p>{skill.certifications}</p>
            </div>
        </div>
    )
}

// Soft skills cards
function SoftSkillCard({ name, icon, color }) {
    return (
        <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm"
            style={{
                color,
                background: `${color}08`,
                borderColor: `${color}30`,
            }}
        >
            <span>{icon}</span>
            <span>{name}</span>
        </div>
    )
}

// MAIN COMPONENT
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

    const handleSelect = (i) => {
        setSelected(i)
    }

    return (
        <section id="habilidades" className="px-8 md:px-20 py-5">
            {/* Header */}
            <div className="mb-6">
                <p className="font-mono text-xs uppercase tracking-widest text-white/20 mb-2">
                    01 / Skills
                </p>
                <h2 className="text-3xl font-light text-white/90">Skills & Stack</h2>
            </div>

            {/* Soft Skills */}
            {/* <div className="flex gap-3 flex-wrap mb-8">
                {softSkills.map((s) => (
                    <SoftSkillCard key={s.name} {...s} />
                ))}
            </div>

            <hr className="border-t border-white/10 mb-8" /> */}

            {/* Tech Skills */}
            {/* Filter Tabs */}
            <div className="flex gap-2 flex-wrap mb-4">
                {tabs.map((tab) => {
                    const isActive = filter === tab
                    return (
                        <button
                            key={tab}
                            onClick={() => handleFilter(tab)}
                            className="font-mono text-xs px-4 py-1.5 rounded-full border transition-all duration-150"
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

            {/* Grid + detail panel */}
            <div
                className="grid border bg-black/50 border-white/8 rounded-2xl overflow-hidden"
                style={{ gridTemplateColumns: "200px 1fr", minHeight: "320px" }}
            >
                {/* Left - icon grid */}
                <div className="border-r border-white/6 p-4">
                    <p className="font-mono text-xs uppercase tracking-widest text-white/20 mb-4">
                        Stack
                    </p>
                    <div className="grid grid-cols-4 gap-2">
                        {filteredSkills.map((s, i) => (
                            <SkillButton
                                key={s.name}
                                skill={s}
                                active={selected === i}
                                onClick={() => handleSelect(i)}
                            />
                        ))}
                    </div>
                </div>

                {/* Right - details */}
                <DetailPanel skill={selected !== null ? filteredSkills[selected] : null} />
            </div>
        </section>
    )
}

export default Skills