// A single orange -> yellow -> light blue glow spectrum shared across the
// site. Every tech tag pulls its color from this gradient instead of an
// arbitrary per-brand hue, so the whole tag system reads as one family.
// Add a new tool to the `techs` array below and it gets the next color in
// the rotation automatically.
//
// These hexes mirror the --color-primary / --color-secondary / --color-accent
// tokens defined in index.css (@theme). This file can't use var(--...))
// directly because several components append an alpha suffix to the hex
// string (e.g. `${color}12`) to get a translucent fill, which only works
// with a raw hex value. If you change the palette in index.css, update
// this array to match.
export const glowGradient = [
    "#e0a83d", // primary-500 — deep mustard
    "#ffd066", // primary-400 — mustard
    "#ffe29b", // primary-300 — pale mustard glow
    "#f59e0b", // secondary-500 — amber
    "#fbbf24", // secondary-400 — amber-yellow
    "#fde047", // secondary-300 — yellow
    "#06b6d4", // accent-500 — cyan
    "#22d3ee", // accent-400 — cyan glow
    "#67e8f9", // accent-300 — light cyan glow
    "#cffafe", // accent-200 — pale cyan glow
]

const techs = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Unity",
    "C#",
    "Figma",
    "Git",
    "Tailwind",
    "Aseprite",
    "Vercel",
    "Trello",
    "Github",
    "HTML",
    "CSS",
    "Vite",
    "SQL",
    "Typescript",
]

export const techColors = Object.fromEntries(
    techs.map((name, i) => [name, glowGradient[i % glowGradient.length]])
)