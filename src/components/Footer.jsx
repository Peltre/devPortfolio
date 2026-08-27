import { FaGithub, FaLinkedin, FaXTwitter, FaItchIo } from "react-icons/fa6"

const SOCIALS = [
    { label: "GitHub", href: "https://github.com/Peltre", Icon: FaGithub },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/pedroj-sotelo-arce", Icon: FaLinkedin },
    { label: "X", href: "https://x.com/dakkardd", Icon: FaXTwitter },
    { label: "itch.io", href: "https://pedr1p.itch.io/", Icon: FaItchIo },
]

function Footer() {
    return (
        <footer className="foot">
            <span>© {new Date().getFullYear()} Pedro Sotelo</span>

            <div className="foot-soc">
                {SOCIALS.map(({ label, href, Icon }) => (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                    >
                        <Icon size={14} />
                    </a>
                ))}
            </div>

            <a
                href="#top"
                className="top-link"
                onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("top")?.scrollIntoView({ behavior: "smooth" })
                }}
            >
                Back to top ↑
            </a>
        </footer>
    )
}

export default Footer