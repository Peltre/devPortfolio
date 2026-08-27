import { useEffect, useRef } from "react"

/**
 * Fondo "retícula viva".
 *
 * Retícula densa de puntos pequeños. Cada punto se tiñe y crece según su
 * distancia al cursor, recorriendo la escala sunset. Al hacer click en el
 * fondo sale una onda que viaja hacia afuera.
 *
 * Decisiones de UX:
 * - El puntero se sigue con interpolación, no de golpe. Sin esto el charco
 *   de luz salta con el mouse y se siente nervioso.
 * - La caída es cuadrática, no lineal: el borde del charco se difumina en
 *   vez de recortarse como un disco.
 * - La onda no se dispara si el click cae sobre algo interactivo (una
 *   tarjeta, un link, un botón). Competía con el modal al abrirse.
 * - Aparece con un fundido de entrada para que no haga "pop" al cargar.
 *
 * Rendimiento:
 * - Descarta con distancia al cuadrado, sin sqrt, los puntos fuera del radio.
 * - Se pausa con la pestaña oculta.
 * - Respeta prefers-reduced-motion: un frame estático y se detiene.
 * - DPR capado a 2.
 */

// --- Ajustes ---------------------------------------------------------------
const STEP = 20 // separación entre puntos, px
const DOT = 0.85 // radio del punto en reposo, px
const GROW = 1.5 // cuánto crece con el cursor, px
const RADIUS = 340 // alcance del cursor, px
const BASE_ALPHA = 0.1 // opacidad en reposo
const MAX_ALPHA = 0.62 // techo de opacidad al encenderse
const EASE = 0.1 // suavizado del puntero (0 = no se mueve, 1 = instantáneo)

const RIPPLE_SPEED = 8 // px por frame
const RIPPLE_REACH = 1700 // hasta dónde llega, px
const RIPPLE_BAND = 90 // grosor del frente, px
const RIPPLE_FORCE = 0.65 // intensidad respecto al cursor
const MAX_RIPPLES = 4

const FADE_IN = 0.015 // por frame, ~1s
// ---------------------------------------------------------------------------

const PALETTE = [
    [167, 139, 250],
    [192, 132, 252],
    [244, 114, 182],
    [251, 113, 133],
    [251, 146, 60],
    [245, 158, 11],
]

function ramp(t) {
    const f = Math.max(0, Math.min(0.999, t)) * (PALETTE.length - 1)
    const i = Math.floor(f)
    const k = f - i
    const a = PALETTE[i]
    const b = PALETTE[i + 1] || a
    return [
        Math.round(a[0] + (b[0] - a[0]) * k),
        Math.round(a[1] + (b[1] - a[1]) * k),
        Math.round(a[2] + (b[2] - a[2]) * k),
    ]
}

function LiveGrid() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d", { alpha: true })
        if (!ctx) return

        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        const hasHover = window.matchMedia("(hover: hover)").matches

        let width = 0
        let height = 0
        let dots = []
        let ripples = []
        let raf = 0
        let paused = false
        let fade = reduced ? 1 : 0
        let auto = 0

        // target = dónde está el cursor; pointer = dónde está el charco de luz
        const target = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.4 }
        const pointer = { ...target }

        function resize() {
            const dpr = Math.min(2, window.devicePixelRatio || 1)
            width = window.innerWidth
            height = window.innerHeight
            canvas.width = Math.round(width * dpr)
            canvas.height = Math.round(height * dpr)
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

            dots = []
            for (let y = STEP / 2; y < height + STEP; y += STEP) {
                for (let x = STEP / 2; x < width + STEP; x += STEP) {
                    dots.push({ x, y })
                }
            }
            if (reduced) draw()
        }

        function onPointerMove(e) {
            target.x = e.clientX
            target.y = e.clientY
        }

        function onPointerDown(e) {
            // Nada de ondas al pulsar una tarjeta, un link o un botón: la
            // onda competía con la animación del modal al abrirse.
            if (e.target.closest('a, button, [role="button"], input, textarea, select')) return
            ripples.push({ x: e.clientX, y: e.clientY, r: 0, life: 1 })
            if (ripples.length > MAX_RIPPLES) ripples.shift()
        }

        function draw() {
            ctx.clearRect(0, 0, width, height)

            const r2 = RADIUS * RADIUS
            const hasRipple = ripples.length > 0
            const baseAlpha = BASE_ALPHA * fade
            const baseFill = `rgba(255,255,255,${baseAlpha})`

            for (let i = 0; i < dots.length; i++) {
                const d = dots[i]
                const ax = d.x - pointer.x
                const ay = d.y - pointer.y
                const q = ax * ax + ay * ay

                if (q > r2 && !hasRipple) {
                    ctx.fillStyle = baseFill
                    ctx.beginPath()
                    ctx.arc(d.x, d.y, DOT, 0, Math.PI * 2)
                    ctx.fill()
                    continue
                }

                // Caída cuadrática: el borde se difumina en vez de recortarse.
                const linear = Math.max(0, 1 - Math.sqrt(q) / RADIUS)
                const near = linear * linear

                let boost = 0
                for (let j = 0; j < ripples.length; j++) {
                    const rip = ripples[j]
                    const rx = d.x - rip.x
                    const ry = d.y - rip.y
                    const band = Math.abs(Math.sqrt(rx * rx + ry * ry) - rip.r)
                    if (band < RIPPLE_BAND) {
                        // el frente se apaga suave hacia los bordes y con la vida
                        const shape = 1 - band / RIPPLE_BAND
                        boost = Math.max(boost, shape * shape * rip.life * rip.life * RIPPLE_FORCE)
                    }
                }

                const heat = Math.min(1, near + boost)

                if (heat < 0.015) {
                    ctx.fillStyle = baseFill
                    ctx.beginPath()
                    ctx.arc(d.x, d.y, DOT, 0, Math.PI * 2)
                    ctx.fill()
                    continue
                }

                // El grueso del charco se queda en violeta/rosa; sólo el
                // centro llega al ámbar.
                const c = ramp(0.1 + heat * 0.75)
                const alpha = (BASE_ALPHA + heat * (MAX_ALPHA - BASE_ALPHA)) * fade
                ctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${alpha})`
                ctx.beginPath()
                ctx.arc(d.x, d.y, DOT + heat * GROW, 0, Math.PI * 2)
                ctx.fill()
            }
        }

        function loop() {
            raf = requestAnimationFrame(loop)
            if (paused) return

            if (fade < 1) fade = Math.min(1, fade + FADE_IN)

            if (!hasHover) {
                // Sin cursor (touch): órbita lenta para que el fondo no quede muerto.
                auto += 0.008
                target.x = width * (0.5 + Math.sin(auto) * 0.32)
                target.y = height * (0.45 + Math.cos(auto * 0.73) * 0.28)
            }

            pointer.x += (target.x - pointer.x) * EASE
            pointer.y += (target.y - pointer.y) * EASE

            const decay = RIPPLE_SPEED / RIPPLE_REACH
            for (let i = 0; i < ripples.length; i++) {
                ripples[i].r += RIPPLE_SPEED
                ripples[i].life -= decay
            }
            ripples = ripples.filter((r) => r.life > 0)

            draw()
        }

        function onVisibility() {
            paused = document.hidden
        }

        resize()
        window.addEventListener("resize", resize)
        document.addEventListener("visibilitychange", onVisibility)

        if (!reduced) {
            window.addEventListener("pointermove", onPointerMove, { passive: true })
            window.addEventListener("pointerdown", onPointerDown)
            loop()
        }

        return () => {
            cancelAnimationFrame(raf)
            window.removeEventListener("resize", resize)
            document.removeEventListener("visibilitychange", onVisibility)
            window.removeEventListener("pointermove", onPointerMove)
            window.removeEventListener("pointerdown", onPointerDown)
        }
    }, [])

    return (
        <div id="bg" aria-hidden="true">
            <div className="bg-wash w1" />
            <div className="bg-wash w2" />
            <div className="bg-wash w3" />
            <div className="bg-veil" />
            <canvas ref={canvasRef} className="bg-canvas" />
            <div className="bg-grain" />
        </div>
    )
}

export default LiveGrid