import { journey, activeSince } from "../data/journey"
import { projects } from "../data/projects"
import Reveal from "./Reveal"

function JourneyNode({ item, isLast }) {
    const done = item.status === "done"

    return (
        <div className="relative pl-10">
            {/* Connector to next node */}
            {!isLast && (
                <span className="absolute left-[7px] top-5 bottom-[-24px] w-px bg-white/10" />
            )}

            {/* Dot */}
            <span
                className={`absolute left-0 top-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-mono ${done
                    ? "bg-primary-400 text-black shadow-[0_0_10px_rgba(255,208,102,0.35)]"
                    : "bg-black border border-white/15 text-white/30"
                    }`}
            >
                {done ? "✓" : "···"}
            </span>

            <p className="font-mono text-[10px] uppercase tracking-widest text-white/25 mb-1">
                {item.year}
            </p>
            <p className={`text-sm ${done ? "text-white/80" : "text-white/35"}`}>
                {item.title}
            </p>
        </div>
    )
}

function Stat({ value, label }) {
    return (
        <div className="border border-white/8 bg-black/50 rounded-2xl p-6 flex flex-col justify-center">
            <span className="font-mono text-3xl text-primary-400">{value}</span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-white/30 mt-1.5">
                {label}
            </span>
        </div>
    )
}

function Journey() {
    // Derived from real data, so these don't go stale on their own.
    const yearsActive = new Date().getFullYear() - activeSince
    const shippedGames = projects.filter((p) => p.tags.includes("Unity")).length
    const goalsInProgress = journey.filter((item) => item.status === "pending").length

    const stats = [
        { value: yearsActive, label: "Years active" },
        { value: projects.length, label: "Projects" },
        { value: shippedGames, label: "Games shipped" },
        { value: goalsInProgress, label: "Goal in progress" },
    ]

    return (
        <section id="journey" className="px-8 md:px-20 py-16">
            {/* Header */}
            <div className="mb-10">
                <p className="font-mono text-xs uppercase tracking-widest text-white/20 mb-2">
                    04 / Journey
                </p>
                <h2 className="text-3xl font-light text-white/90">How I got here</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {/* Left - path */}
                <Reveal className="md:col-span-2">
                    <div className="border border-white/8 bg-black/50 rounded-2xl p-8 h-full">
                        <div className="flex flex-col gap-6">
                            {journey.map((item, i) => (
                                <JourneyNode
                                    key={item.title}
                                    item={item}
                                    isLast={i === journey.length - 1}
                                />
                            ))}
                        </div>
                    </div>
                </Reveal>

                {/* Right - stats */}
                <Reveal className="md:col-span-3" delay={120}>
                    <div className="grid grid-cols-2 gap-4 h-full">
                        {stats.map((s) => (
                            <Stat key={s.label} value={s.value} label={s.label} />
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    )
}

export default Journey