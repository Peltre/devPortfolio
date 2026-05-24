import { FaGithub, FaLinkedin, FaXTwitter, FaItchIo } from "react-icons/fa6"
import foto from "../assets/foto.jpg"

function MCover() {
    return (
        <section
            id="sobre-mi"
            className="relative min-h-screen flex items-center px-8 md:px-20 py-5 overflow-hidden"
        >
            {/* Main container */}
            <div className="bg-black/50 border border-white/8 p-8 rounded-lg relative flex flex-col md:flex-row items-center gap-4 md:gap-16 justify-center w-full max-w-5xl mx-auto">
                {/* Left side */}
                <div className="flex-1 max-w-lg">
                    {/* Available to work pill */}
                    <div className="inline-flex items-center gap-2 bg-emerald-400/8 border border-emerald-400/25 rounded-full px-3 py-1.5 mb-7">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span className="text-xs font-medium text-emerald-400 tracking-widest uppercase">
                            Available to work
                        </span>
                    </div>

                    {/* Name block */}
                    <p className="text-sm text-white/30 font-light tracking-widest mb-1.5">
                        Hello, my name is
                    </p>
                    <h1 className="text-6xl font-bold text-white leading-[1.05] tracking-tight mb-1">
                        Pedro<span className="text-emerald-400">.</span>
                    </h1>
                    <p className="text-sm uppercase tracking-wide text-white/20 font-normal mb-5">
                        Full Stack Developer &amp; Game Developer
                    </p>
                    {/* Bio */}
                    <p className="text-sm text-white/45 leading-relaxed max-w-sm mb-8">
                        I build modern web experiences and interactive games.
                        Passionate about teamwork, good design &amp; dinosaurs.
                    </p>

                    {/* Social media links */}
                    <div className="flex gap-2.5 flex-wrap mb-9">
                        <a
                            href="https://github.com/Peltre"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-semibold tracking-widest px-3.5 py-1.5 rounded-md bg-white/5 border border-white/15 text-white/50 hover:border-white/30 hover:text-white/80 transition-colors duration-150"
                        >
                            <FaGithub className="text-sm" />
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/pedroj-sotelo-arce"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-semibold tracking-widest px-3.5 py-1.5 rounded-md bg-blue-400/10 border border-blue-400/25 text-blue-400 hover:bg-blue-400/20 transition-colors duration-150"
                        >
                            <FaLinkedin className="text-sm" />
                            LinkedIn
                        </a>
                        <a
                            href="https://x.com/dakkardd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-semibold tracking-widest px-3.5 py-1.5 rounded-md bg-white/5 border border-white/15 text-white/50 hover:border-white/30 hover:text-white/80 transition-colors duration-150"
                        >
                            <FaXTwitter className="text-sm" />
                            Twitter
                        </a>
                        <a
                            href="https://pedr1p.itch.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-semibold tracking-widest px-3.5 py-1.5 rounded-md bg-pink-400/10 border border-pink-400/25 text-pink-400 hover:bg-pink-400/20 transition-colors duration-150"
                        >
                            <FaItchIo className="text-sm" />
                            Itch.io
                        </a>
                    </div >
                </div >

                {/* Right side */}
                < div className="shrink-0 flex flex-col items-center" >
                    <div className="relative">

                        {/* Overlay decor border */}
                        <div className="absolute top-2 left-2 -right-2 -bottom-2 rounded-2xl border border-emerald-400/20 pointer-events-none" />

                        {/* 3. Picture */}
                        <div className="w-52 h-72 rounded-2xl border border-emerald-400/15 overflow-hidden bg-emerald-950/30 relative z-10">
                            <img src={foto} alt="Pedro" className="w-full h-full object-cover" />
                        </div>

                        {/* Currently learning chip */}
                        <div className="absolute -bottom-3 -left-12 z-20 bg-black backdrop-blur-sm border border-white/10 rounded-xl px-3.5 py-2">
                            <p className="text-[10px] text-white/25 uppercase tracking-widest">Currently learning</p>
                            <p className="text-xs text-emerald-400 font-mono mt-0.5">Unity 3D</p>
                        </div>
                    </div>
                </div >
            </div >
        </section >
    )
}

export default MCover