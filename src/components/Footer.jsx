import { journey } from "../data/journey"
import Reveal from "./Reveal"

function JourneyCard({ item }) {
    const done = item.status === "done"

    return (
        <div className="relative px-3 text-center">
            {/* Small tick above the dot, purely decorative */}
            <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-8 h-px bg-white/10" />

            {/* Dot */}
            <span
                className={`relative z-10 mx-auto mb-4 block w-3 h-3 rounded-full ${done
                    ? "bg-primary-400 shadow-[0_0_5px_1px_rgba(var(--primary-400-rgb)/0.7),0_0_12px_3px_rgba(var(--primary-400-rgb)/0.3)]"
                    : "bg-black border border-white/20"
                    }`}
            />

            <p className="font-mono text-[9px] uppercase tracking-widest text-white/25 mb-1">
                {item.year}
            </p>
            <p className={`text-sm mb-1.5 ${done ? "text-white/85" : "text-white/35"}`}>
                {item.title}
            </p>
            {item.description && (
                <p className={`text-xs leading-relaxed mb-2.5 ${done ? "text-white/40" : "text-white/25"}`}>
                    {item.description}
                </p>
            )}

            {item.image && (
                <div className="flex justify-center">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full max-w-[160px] h-20 object-cover rounded-lg border border-white/10"
                    />
                </div>
            )}

            {item.link && (
                <div className="flex justify-center">
                    <a
                        href={item.link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-[10px] text-accent-400 border border-accent-400/30 bg-accent-400/5 rounded-full px-3 py-1.5 hover:bg-accent-400/10 transition-colors"
                    >
                        → {item.link.label}
                    </a>
                </div>
            )}
        </div>
    )
}

function Journey() {
    return (
        <section id="journey" className="px-8 md:px-20 py-16 scroll-mt-20">
            {/* Header */}
            <div className="mb-10">
                <p className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: "var(--sunset-journey)" }}>
                    04 / Journey
                </p>
                <h2 className="text-3xl font-light text-white/90">How I got here</h2>
            </div>

            <Reveal>
                <div className="border border-white/8 bg-black/50 rounded-2xl p-8 md:p-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-10">
                        {journey.map((item) => (
                            <JourneyCard key={item.title} item={item} />
                        ))}
                    </div>
                </div>
            </Reveal>
        </section>
    )
}

export default Journey