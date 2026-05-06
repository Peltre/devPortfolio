import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"


function Blog() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Fondo decorativo */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[32px_32px]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)]" />

            <div className="relative flex flex-col items-center gap-6 text-center px-8">
                <p className="text-xs tracking-widest uppercase text-white/20 font-mono">
                    coming soon
                </p>

                <h1 className="text-5xl md:text-7xl font-light text-white/90">
                    Work in <span className="emerald-grad font-medium">Progess</span>
                </h1>

                <p className="text-sm text-white/35 max-w-sm leading-relaxed">
                    The blog is being built as we speak! In the meantime, feel free to check out my projects or get in touch.
                </p>

                <div className="w-16 h-px bg-emerald-400/20 my-2" />

                <button
                    onClick={() => navigate("/")}
                    className="flex items-center gap-2 text-xs tracking-widest uppercase text-white/40 border border-white/10 px-5 py-2.5 rounded-lg hover:text-white hover:border-white/30 transition-all duration-200"
                >
                    <ArrowLeft size={14} />
                    Back to portfolio
                </button>
            </div>
        </div>
    )
}

export default Blog