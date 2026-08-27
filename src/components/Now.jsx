import { useState, useEffect, useMemo } from "react"
import { projects } from "../data/projects"
import { lastShipped } from "../data/status"
import { techColors } from "../utils/techColors"
import ProjectModal from "./ProjectModal"
import Reveal from "./Reveal"
import { ArrowRight } from "./Icons"

function splitDuration(ms) {
    const total = Math.max(0, Math.floor(ms / 1000))
    return {
        days: Math.floor(total / 86400),
        hours: Math.floor((total % 86400) / 3600),
        minutes: Math.floor((total % 3600) / 60),
        seconds: total % 60,
    }
}

function useElapsedSince(date) {
    const [elapsed, setElapsed] = useState(() => Date.now() - date.getTime())

    useEffect(() => {
        const id = setInterval(() => setElapsed(Date.now() - date.getTime()), 1000)
        return () => clearInterval(id)
    }, [date])

    return elapsed
}

function TimeBlock({ value, label, wide = false }) {
    return (
        <div className="tb">
            {/* minWidth evita que la fila salte cuando days pasa de 99 a 100 */}
            <span
                className="n grad"
                style={wide ? { minWidth: "2.1ch", textAlign: "center" } : undefined}
            >
                {value}
            </span>
            <span className="u">{label}</span>
        </div>
    )
}

function ShipClock() {
    const since = useMemo(() => new Date(lastShipped.date), [])
    const { days, hours, minutes, seconds } = splitDuration(useElapsedSince(since))
    const pad = (n) => String(n).padStart(2, "0")

    return (
        <div className="card clock">
            <p className="eyebrow" style={{ color: "var(--dim)", fontSize: "10px" }}>
                Time since I last shipped
            </p>

            <div className="clock-row">
                <TimeBlock value={days} label="days" wide />
                <span className="colon">:</span>
                <TimeBlock value={pad(hours)} label="hrs" />
                <span className="colon">:</span>
                <TimeBlock value={pad(minutes)} label="min" />
                <span className="colon">:</span>
                <TimeBlock value={pad(seconds)} label="sec" />
            </div>

            <p className="clock-foot">
                Last shipped <b>{lastShipped.project}</b> — every new deploy resets it to zero.
            </p>
        </div>
    )
}

function Spotlight({ project, onOpen }) {
    return (
        <article
            className="card card-tap spot"
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
            <div className="spot-img">
                <span className="badge">Featured</span>
                <img src={project.images[0]} alt={`Captura de ${project.title}`} />
            </div>

            <div className="spot-body">
                <div className="meta">
                    <span className="role-s">{project.role}</span>
                    <span>{project.date}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
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

function Now() {
    const [selected, setSelected] = useState(null)
    const featured = projects.find((p) => p.featured) || projects[0]

    return (
        <section className="section" id="now">
            <div className="inner">
                <div className="sec-head">
                    <div>
                        <p className="eyebrow" style={{ color: "var(--s-now)" }}>
                            Now
                        </p>
                        <h2>What I'm up to</h2>
                    </div>
                </div>

                <div className="now-grid">
                    <Reveal>
                        <ShipClock />
                    </Reveal>
                    <Reveal delay={120}>
                        <Spotlight project={featured} onOpen={setSelected} />
                    </Reveal>
                </div>
            </div>

            {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
        </section>
    )
}

export default Now