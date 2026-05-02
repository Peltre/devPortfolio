import foto from "../assets/foto.jpg"

function MCover() {
    return (
        <section id="cover" className="min-h-screen flex items-center px-8 md:px-20 py-20"> 
            {/* Main container */}
            <div className="flex flex-col md:flex-row items-center justify-center w-full mx-auto">
                { /* Left side - Text  */}
                <div className="max-w-3xl px-10">
                    <p className="text-white/30 text-md tracking-widest uppercase mb-4">
                        - AVAILABLE TO WORK
                    </p>
                     <h1 className="text-4xl leading-tight mb-1">
                        Hello my name is <br />
                        <span className="text-5xl font-bold text-emerald-400 mb-3">
                            Pedro
                        </span>
                    </h1>
                    <p className="text-base text-white/50 leading-relaxed max-w-md mb-10">
                        I build modern web experiences and interactive games.
                        Passionate about teamwork, good design & dinosaurs.
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4">
                        <a
                            href="#proyectos"
                            className="text-xs tracking-widest uppercase px-6 py-3 bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 rounded hover:bg-emerald-400/20 transition-colors duration-200"
                        >
                            Projects
                        </a>
                        <a
                            href="#contacto"
                            className="text-xs tracking-widest uppercase px-6 py-3 border border-white/10 text-white/40 rounded hover:text-white hover:border-white/25 transition-colors duration-200"                        >
                            Contact me
                        </a>
                    </div>
                </div>

                {/* Right side - Picture / more */}
                <div className="flex flex-col items-center gap-4 shrink-0">
                    <div className="w-54 h-84 rounded-full border-4 border-emerald-400/20 overflow-hidden bg-emerald-950/30">
                    <img
                        src={foto}
                        alt="Pedro"
                        className="w-full h-full object-cover"
                    />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MCover