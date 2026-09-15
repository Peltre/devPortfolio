import { LazyMotion, domAnimation, m } from "motion/react"
import { experience } from "../data/experience"

const EASE = [0.22, 0.61, 0.36, 1]

// Se usa m directamente en vez de <Reveal stagger>: envolver cada fila
// rompería .job:last-child y las tres perderían el separador.
const list = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
}

const row = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

function Experience() {
    return (
        <section className="section" id="experience">
            <div className="inner">
                <div className="sec-head">
                    <div>
                        <p className="eyebrow" style={{ color: "var(--s-exp)" }}>
                            Experience
                        </p>
                        <h2>Where I've worked</h2>
                    </div>
                </div>

                <LazyMotion features={domAnimation} strict>
                    <m.div
                        className="card jobs"
                        variants={list}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {experience.map((job) => (
                            <m.div className="job" key={`${job.org}-${job.from}`} variants={row}>
                                <span className="when">
                                    {job.current
                                        ? `${job.from} —`
                                        : job.to
                                          ? `${job.from} — ${job.to}`
                                          : job.from}
                                </span>
                                <div className="job-org">
                                    <h3>{job.org}</h3>
                                    {job.current && (
                                        <span className="now grad">Present</span>
                                    )}
                                </div>
                                <span className="what">{job.role}</span>
                                {job.detail && <p className="detail">{job.detail}</p>}
                            </m.div>
                        ))}
                    </m.div>
                </LazyMotion>
            </div>
        </section>
    )
}

export default Experience