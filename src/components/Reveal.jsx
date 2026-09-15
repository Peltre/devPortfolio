import { Children, useEffect, useState } from "react"
import { LazyMotion, domAnimation, m } from "motion/react"

// m + LazyMotion en vez de motion: ~27 KB gzip en vez de ~40
const FROM = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: -26 },
    right: { x: 26 },
    scale: { scale: 0.96 },
    fade: {},
}

const EASE = [0.22, 0.61, 0.36, 1]
const VIEWPORT = { once: true, amount: 0.15 }
const NARROW = "(max-width: 960px)"

// Una entrada lateral sobresale 26px mientras espera y genera scroll
// horizontal en móvil, donde además las tarjetas ya están apiladas.
function useNarrow() {
    const [narrow, setNarrow] = useState(
        () => typeof window !== "undefined" && window.matchMedia(NARROW).matches
    )
    useEffect(() => {
        const mq = window.matchMedia(NARROW)
        const onChange = (e) => setNarrow(e.matches)
        mq.addEventListener("change", onChange)
        return () => mq.removeEventListener("change", onChange)
    }, [])
    return narrow
}

function Reveal({ children, className = "", delay = 0, variant = "up", stagger = 0, as = "div" }) {
    const narrow = useNarrow()
    const Tag = m[as] || m.div
    const safeVariant = narrow && (variant === "left" || variant === "right") ? "up" : variant
    const from = FROM[safeVariant] ?? FROM.up

    // Con un solo hijo no hay nada que escalonar: cae a la animación simple
    // en vez de quedarse en "hidden" sin animar nunca.
    const items = Children.toArray(children)
    const canStagger = stagger > 0 && items.length > 1

    const body = canStagger ? (
        <Tag
            className={className}
            variants={{
                hidden: {},
                show: { transition: { staggerChildren: stagger, delayChildren: delay / 1000 } },
            }}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
        >
            {/* Esto inserta un div por hijo: si tu CSS usa :last-child o
                selectores de hermanos, usa m directamente como Experience */}
            {items.map((child, i) => (
                <m.div
                    key={i}
                    variants={{
                        hidden: { opacity: 0, ...from },
                        show: {
                            opacity: 1,
                            x: 0,
                            y: 0,
                            scale: 1,
                            transition: { duration: 0.6, ease: EASE },
                        },
                    }}
                >
                    {child}
                </m.div>
            ))}
        </Tag>
    ) : (
        <Tag
            className={className}
            initial={{ opacity: 0, ...from }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.7, ease: EASE, delay: delay / 1000 }}
        >
            {children}
        </Tag>
    )

    return (
        <LazyMotion features={domAnimation} strict>
            {body}
        </LazyMotion>
    )
}

export default Reveal