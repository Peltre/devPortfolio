import { experience } from "../data/experience"
import Reveal from "./Reveal"

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

                <Reveal>
                    <div className="card jobs">
                        {experience.map((job) => (
                            <div className="job" key={`${job.org}-${job.from}`}>
                                <span className="when">
                                    {job.to ? `${job.from} — ${job.to}` : job.from}
                                </span>
                                <h3>{job.org}</h3>
                                <span className="what">{job.role}</span>
                                {job.detail && <p className="detail">{job.detail}</p>}
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    )
}

export default Experience