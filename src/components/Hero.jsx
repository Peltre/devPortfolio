import { FaGithub, FaLinkedin, FaXTwitter, FaItchIo } from "react-icons/fa6"
import foto from "../assets/foto.jpg"
import { ArrowRight, Mail } from "./Icons"

// --sc es el color del glow al hacer hover, uno por marca.
const SOCIALS = [
    { label: "GitHub", href: "https://github.com/Peltre", Icon: FaGithub, sc: "rgba(201,209,217,.5)" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/pedroj-sotelo-arce", Icon: FaLinkedin, sc: "rgba(77,163,255,.55)" },
    { label: "Twitter", href: "https://x.com/dakkardd", Icon: FaXTwitter, sc: "rgba(255,255,255,.4)" },
    { label: "Itch.io", href: "https://pedr1p.itch.io/", Icon: FaItchIo, sc: "rgba(250,92,92,.55)" },
]

function Hero() {
    return (
        <header className="hero" id="top">
            <div className="card hero-card">
                <div>
                    <div className="pill-live">
                        <i />
                        <span>Available to work</span>
                    </div>

                    <p className="hello">Hello, my name is</p>
                    <h1>
                        Pedro<span className="grad">.</span>
                    </h1>
                    <p className="role grad">Full Stack Developer &amp; Game Developer</p>
                    <p className="bio">
                        I build modern web experiences and interactive games. Passionate about
                        teamwork, good design &amp; dinosaurs.
                    </p>

                    <div className="cta-row">
                        <a className="btn btn-primary" href="#talk">
                            <Mail />
                            Hire me
                        </a>
                        <a className="btn" href="#work">
                            See projects <ArrowRight />
                        </a>
                    </div>

                    <div className="socials">
                        {SOCIALS.map(({ label, href, Icon, sc }) => (
                            <a
                                key={label}
                                className="soc"
                                style={{ "--sc": sc }}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon size={14} />
                                {label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="portrait">
                    <div className="portrait-frame" />
                    <div className="portrait-img">
                        <img src={foto} alt="Pedro Sotelo" />
                    </div>
                    <div className="learning">
                        <div className="k">Currently learning</div>
                        <div className="v">Unity 3D</div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Hero