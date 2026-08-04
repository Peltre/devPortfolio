// File to handle the "WAR CLOCK"

import { useState, useEffect, useMemo } from "react";
import { projects } from "../data/projects";
import { lastShipped } from "../data/status";
import { techColors } from "../utils/techColors";
import ProjectModal from "./ProjectModal";

// Splits a duration in ms into days, hours, minutes, seconds
function splitDuration(ms) {
    const totalSeconds = Math.max(0, Math.floor(ms / 1000))
    const days = Math.floor(totalSeconds / 86400)
    const hours = Math.floor((totalSeconds % 86400) / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60
    return { days, hours, minutes, seconds }
}

function useElapsedSince(date) {
    const [elapsed, setElapsed] = useState(() => Date.now() - date.getTime())

    useEffect(() => {
        const id = setInterval(() => {
            setElapsed(Date.now() - date.getTime())
        }, 1000)
        return () => clearInterval(id)
    }, [date])

    return elapsed
}

function TimeBlock({ value, label }) {
    return (
        <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-bold font-mono text-emerald-400 tabular-nums">
                {value}
            </span>
            <span className='text-[10px] uppercase tracking-widest text-white/25 mt-1.5'>
                {label}
            </span>
        </div>
    )
}

// Live ticking clock showing time since last shipped project
function ShipClock() {
    const since = useMemo(() => new Date(lastShipped.date), [])
    const elapsed = useElapsedSince(since)
    const { days, hours, minutes, seconds } = splitDuration(elapsed)

    return (
        <div className="flex flex-col justify-center gap-6 rounded-2xl border border-white-8">
            <p className="font-mono text-xs uppercase tracking-widest text-white/20">
                Time since I last shipped an App
            </p>

            <div className="flex items-baseline gap-3 md:gap-5">
                <TimeBlock value={days} label={"days"}/>
                <span className="text-white/10 text-2xl -mt-4">:</span>
                <TimeBlock value={String(hours).padStart(2, "0")} label={"hrs"}/>
                <span className="text-white/10 text-2xl -mt-4">:</span>
                <TimeBlock value={String(minutes).padStart(2, "0")} label={"minutes"}/>
                <span className="text-white/10 text-2xl -mt-4">:</span>
                <TimeBlock value={String(seconds).padStart(2, "0")} label={"seconds"}/>
                <span className="text-white/10 text-2xl -mt-4">:</span>
            </div>
            
            <p className="text-xs text-white/40 leading-relaxed">
                Last shipped{" "}
                <span className="text-emerald-400 font-medium">{lastShipped.project}</span>
                . Every new deploy resets the clock back to zero.
            </p>
        </div>
    )
}