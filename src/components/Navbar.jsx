import { Link } from "react-router-dom"

function Navbar() {
    const handleScroll = (e, id) => {
        e.preventDefault()
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth'})
    }

    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between px-8 h-16 bg-neutral-950/80 backdrop-blur-md border-b border-white/8">
            <a
                className="text-sm tracking-wideset text-neutral-100"
                href="/"
            >
                Pedro.portfolio
            </a>
            <div className="flex items-center gap-8">
                {[
                    { label: 'Sobre mi', id : 'sobre-mi'},
                    { label: 'Habilidades', id: 'habilidades'},
                    { label: 'Proyectos', id: 'proyectos'},
                    { label: 'Contacto', id: 'contacto'}
                ].map(({ label, id }) => (
                <a
                    key={id}
                    href={`#${id}`}
                    onClick={e => handleScroll(e, id)}
                    className="text-xs tracking-wideset uppercase text-white/50 hover:text-white transition-colors duration-200"
                >
                    {label}
                </a>
                ))}

                <a
                    href="/blog"
                    className="text-xs tracking-widest uppercase text-neutral-100 px-4 py-1.5 rounded border border-white/15 bg-white/5 hover:bg-white/10 transition-colors duration-200"
                >
                    Blog
                </a>
            </div>
        </nav>
    )
}

export default Navbar