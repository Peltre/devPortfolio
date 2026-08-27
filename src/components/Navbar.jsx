import { Link } from "react-router-dom"
import { useState, useEffect, useRef, useCallback } from "react"

const LINKS = [
    { label: "About", id: "top" },
    { label: "Now", id: "now" },
    { label: "Projects", id: "work" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "talk" },
]

function Navbar() {
    const [active, setActive] = useState("top")
    const [open, setOpen] = useState(false)
    const [progress, setProgress] = useState(0)
    const [scrolled, setScrolled] = useState(false)
    const [ind, setInd] = useState({ left: 0, width: 0, show: false })
    const listRef = useRef(null)

    // Sección activa. rootMargin en vez de threshold: así solo se marca la
    // sección que cruza el centro del viewport, y no dos a la vez.
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id)
                })
            },
            { rootMargin: "-45% 0px -45% 0px" }
        )
        LINKS.forEach(({ id }) => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })
        return () => observer.disconnect()
    }, [])

    // Indicador deslizante
    const moveInd = useCallback(() => {
        if (window.innerWidth <= 900 || !listRef.current) {
            setInd((s) => ({ ...s, show: false }))
            return
        }
        const el = listRef.current.querySelector(`[data-sec="${active}"]`)
        if (!el) return
        setInd({ left: el.offsetLeft, width: el.offsetWidth, show: true })
    }, [active])

    useEffect(() => {
        moveInd()
        window.addEventListener("resize", moveInd)
        return () => window.removeEventListener("resize", moveInd)
    }, [moveInd])

    // Barra de progreso de scroll
    useEffect(() => {
        const onScroll = () => {
            const el = document.documentElement
            const max = el.scrollHeight - window.innerHeight
            setProgress(max > 0 ? (el.scrollTop / max) * 100 : 0)
            setScrolled(el.scrollTop > 30)
        }
        window.addEventListener("scroll", onScroll, { passive: true })
        onScroll()
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const go = (e, id) => {
        e.preventDefault()
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
        setActive(id)
        setOpen(false)
    }

    return (
        <nav className="nav" data-scrolled={scrolled}>
            <div className="nav-prog" style={{ width: `${progress}%` }} />

            <a href="#top" className="brand" onClick={(e) => go(e, "top")}>
                Pedro<span>.</span>dev
            </a>

            <button
                className="burger"
                aria-label={open ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={open}
                onClick={() => setOpen((o) => !o)}
            >
                <span />
            </button>

            <div className="navlinks" ref={listRef} data-open={open}>
                <div
                    className="nav-ind"
                    style={{ left: ind.left, width: ind.width, opacity: ind.show ? 1 : 0 }}
                />
                {LINKS.map(({ label, id }) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        data-sec={id}
                        aria-current={active === id}
                        onClick={(e) => go(e, id)}
                    >
                        {label}
                    </a>
                ))}
                {/* Antes era <a href="/blog">, que con HashRouter sale de la
                    app y da 404 en GitHub Pages. */}
                <Link to="/blog" className="nav-cta">
                    Blog
                </Link>
            </div>
        </nav>
    )
}

export default Navbar