import { FaGithub, FaLinkedin, FaXTwitter, FaItchIo } from "react-icons/fa6"
import foto from "../assets/foto.jpg"

function MCover() {
    return (
        <section id="sobre-mi" className="min-h-screen flex items-center px-8 md:px-20 py-10">
            {/* Main container */}
            <div className="flex flex-col md:flex-row items-center gap-6 justify-center w-full mx-auto">
                { /* Left side - Text  */}
                <div className="max-w-lg px-10">
                    <p className="text-white/30 text-md tracking-widest uppercase mb-4">
                        AVAILABLE TO WORK
                    </p>
                    <h1 className="text-4xl leading-tight mb-1">
                        Hello, my name is <br />
                        <span className="text-5xl font-bold emerald-grad mb-3">
                            Pedro
                        </span>
                    </h1>
                    <p className="text-base text-white/50 leading-relaxed max-w-md mb-5">
                        I build modern web experiences and interactive games.
                        Passionate about teamwork, good design & dinosaurs.
                    </p>

                    {/* Qualities */}
                    <div className="flex gap-3 mb-7">
                        <span className="text-sm font-bold text-emerald-400 bg-emerald-800/30 border border-emerald-950 px-3 py-1 rounded-full">
                            REACT
                        </span>
                        <span className="text-sm font-bold text-emerald-400 bg-emerald-800/30 border border-emerald-950 px-3 py-1 rounded-full">
                            UNITY
                        </span>
                        <span className="text-sm font-bold text-emerald-400 bg-emerald-800/30 border border-emerald-950 px-3 py-1 rounded-full">
                            FIGMA
                        </span>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 pb-3">
                        <a
                            className="social-btn"
                            href="https://github.com/Peltre"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Github"
                        >
                            <FaGithub />
                        </a>
                        <a
                            className="social-btn"
                            href="https://www.linkedin.com/in/pedroj-sotelo-arcee"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            className="social-btn"
                            href="https://x.com/dakkardd"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="X"
                        >
                            <FaXTwitter />
                        </a>
                        <a
                            className="social-btn"
                            href="https://pedr1p.itch.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Itch"
                        >
                            <FaItchIo />
                        </a>
                    </div>
                </div>

                {/* Right side - Picture / more */}
                <div className="flex flex-col items-center gap-4 shrink-0">
                    <div className="relative">
                        {/* decor - blur circles */}
                        <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full bg-emerald-500/20 blur-2xl" />
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-teal-400/15 blur-2xl" />
                        {/* decor - frame offset */}
                        <div className="absolute top-3 left-3 w-full h-full rounded-2xl border border-emerald-400/20" />
                        {/* info card */}
                        <div className="absolute -bottom-4 -left-10 z-20 bg-neutral-900/90 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-2">
                            <p className="text-xs text-white/30 uppercase tracking-widest">Currently learning</p>
                            <p className="text-xs text-emerald-400 font-mono">3D Modeling</p>
                        </div>
                        {/* img */}
                        <div className="w-54 h-84 rounded-2xl border border-emerald-400/20 overflow-hidden bg-emerald-950/30 relative z-10">
                            <img src={foto} alt="Pedro" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MCover