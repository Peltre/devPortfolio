import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

function Navbar() {
    const [activeSection, setActiveSection] = useState('sobre-mi')

    useEffect(() => {
        const sections = ['sobre-mi', 'habilidades', 'proyectos']

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { threshold: 0.3 }
        )
        sections.forEach(id => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    const handleScroll = (e, id) => {
        e.preventDefault()
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        setActiveSection(id)
    }

    return (
        <nav
            className="sticky top-0 z-50 flex items-center justify-between px-8 h-16 bg-neutral-950/80 backdrop-blur-md border-b border-white/8"
            style={{
                background: "rgba(5,5,5,1)",      // era rgba(3,7,18,0.9) — más cálido
                borderColor: "rgba(255,255,255,0.06)",   // era verde, ahora neutro
                boxShadow: "0 1px 30px rgba(0,0,0,0.4)"
            }}
        >
            <a
                className="text-sm tracking-widest text-neutral-100"
            >
                Pedro<span className="text-emerald-400">.</span>dev
            </a>
            <div className="flex items-center gap-8">
                {[
                    { label: 'About me', id: 'sobre-mi' },
                    { label: 'Skills', id: 'habilidades' },
                    { label: 'Projects', id: 'proyectos' },
                ].map(({ label, id }) => {
                    const isActive = activeSection === id
                    return (
                        <a
                            key={id}
                            href={`#${id}`}
                            onClick={e => handleScroll(e, id)}
                            className="text-xs tracking-widest uppercase transition-colors duration-200"
                            style={{
                                color: isActive ? "#34d399" : "rgba(255,255,255,0.4)"
                            }}
                        >
                            {label}
                        </a>
                    )
                })}

                <a
                    href="/blog"
                    className="text-xs tracking-widest uppercase text-neutral-100 px-4 py-1.5 rounded border border-white/15 bg-white/5 hover:bg-white/10 transition-colors duration-200"
                    style={{
                        color: "#34d399",
                        borderColor: "rgba(52,211,153,0.3)",
                        background: "rgba(52,211,153,0.06)"
                    }}
                >
                    Blog
                </a>
            </div>
        </nav >
    )
}

export default Navbar