import Reveal from "./Reveal"
import { Mail } from "./Icons"
import { contact } from "../data/contact"

function Contact() {
    return (
        <section className="section" id="talk">
            <div className="inner">
                <Reveal>
                    <div className="card contact">
                        <p className="eyebrow" style={{ color: "var(--s-talk)" }}>
                            Contact
                        </p>
                        <h2>Let's build something.</h2>
                        <p>
                            I'm looking for a team where I can ship real product and keep learning.
                            Web, games, or a weird mix of both — I'd like to hear about it.
                        </p>

                        <div className="mailrow">
                            <a className="btn btn-primary" href={`mailto:${contact.email}`}>
                                <Mail />
                                {contact.email}
                            </a>
                            {contact.cv && (
                                <a
                                    className="btn"
                                    href={contact.cv}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Download CV
                                </a>
                            )}
                        </div>

                        <div className="tz">
                            <i />
                            {contact.location} · {contact.timezone} · {contact.responseTime}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}

export default Contact