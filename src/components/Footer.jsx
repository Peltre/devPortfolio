// Footer file with contact info for the website

import { FaGithub, FaLinkedin, FaXTwitter, FaItchIo } from "react-icons/fa6"

export default function Footer() {
    return (
        <footer className="px-8 md:px-20 py-6 border-t border-white/6 flex bg-black/50 items-center justify-between gap-6">
            <span className="text-xs font-mono text-white/20">© 2026 Pedro Sotelo</span>

            <div className="flex gap-5">
                <a href="https://github.com/Peltre" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                    className="text-white/25 hover:text-emerald-400 transition-colors duration-150 text-lg">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/pedroj-sotelo-arce" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                    className="text-white/25 hover:text-emerald-400 transition-colors duration-150 text-lg">
                    <FaLinkedin />
                </a>
                <a href="https://x.com/dakkardd" target="_blank" rel="noopener noreferrer" aria-label="X"
                    className="text-white/25 hover:text-emerald-400 transition-colors duration-150 text-lg">
                    <FaXTwitter />
                </a>
                <a href="https://pedr1p.itch.io/" target="_blank" rel="noopener noreferrer" aria-label="itch.io"
                    className="text-white/25 hover:text-emerald-400 transition-colors duration-150 text-lg">
                    <FaItchIo />
                </a>
            </div>

            <span className="text-xs font-mono text-white/20">made with React</span>
        </footer>
    )
}