import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

function Navbar() {
    const [activeSection, setActiveSection] = useState('sobre-mi')

    useEffect(() => {
        const sections = ['sobre-mi', 'now', 'habilidades', 'proyectos', 'journey']

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
            className="sticky top-0 z-50 flex items-center justify-between px-8 h-16 bg-black border-b border-white/6 shadow-[0_1px_30px_rgba(0,0,0,0.4)] backdrop-blur-md"
        >
            <a
                className="text-sm tracking-widest text-neutral-100"
            >
                Pedro<span className="text-primary-400">.</span>dev
            </a>
            <div className="flex items-center gap-8">
                {[
                    { label: 'About me', id: 'sobre-mi' },
                    { label: 'Now', id: 'now' },
                    { label: 'Skills', id: 'habilidades' },
                    { label: 'Projects', id: 'proyectos' },
                    { label: 'Journey', id: 'journey' },
                ].map(({ label, id }) => {
                    const isActive = activeSection === id
                    return (
                        <a
                            key={id}
                            href={`#${id}`}
                            onClick={e => handleScroll(e, id)}
                            className={`text-xs tracking-widest uppercase transition-colors duration-200 ${isActive ? "text-primary-400" : "text-white/40"}`}
                        >
                            {label}
                        </a>
                    )
                })}

                <a
                    href="/blog"
                    className="text-xs tracking-widest uppercase text-primary-400 px-4 py-1.5 rounded border border-primary-400/30 bg-primary-400/6 hover:bg-primary-400/10 transition-all duration-200 hover:shadow-[0_0_18px_rgba(var(--primary-300-rgb)/0.22)]"
                >
                    Blog
                </a>
            </div>
        </nav >
    )
}

export default Navbar