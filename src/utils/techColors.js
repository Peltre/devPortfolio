// A single orange -> yellow -> light blue glow spectrum shared across the
// site. Skills.jsx uses this for its category colors (grouping unrelated
// techs into a handful of buckets, where brand colors would be meaningless).
//
// These hexes mirror the --color-primary / --color-secondary / --color-accent
// tokens defined in index.css (@theme). This file can't use var(--...))
// directly because several components append an alpha suffix to the hex
// string (e.g. `${color}12`) to get a translucent fill, which only works
// with a raw hex value. If you change the palette in index.css, update
// this array to match.
export const glowGradient = [
    "#16c960", // primary-500 — deep terminal green
    "#39ff88", // primary-400 — terminal green
    "#86ffb5", // primary-300 — pale green glow
    "#4b5563", // secondary-500 — slate gray
    "#6b7280", // secondary-400 — mid gray
    "#9ca3af", // secondary-300 — light gray
    "#00a896", // accent-500 — deep teal
    "#00d1b2", // accent-400 — teal
    "#5eead4", // accent-300 — light teal glow
    "#99f6e4", // accent-200 — pale teal glow
]

// Per-tech tag colors, pulled from each tool's real brand color instead of
// a shared rotation. This is what actually shows up on ProjectCard /
// ProjectModal / StatusRow tags — a bit more colorful and each tag reads as
// that specific tool at a glance. To add a new tool, just add a hex here;
// there's no rotation to keep in sync anymore.
export const techColors = {
    JavaScript: "#F7DF1E",
    React: "#61DAFB",
    "Node.js": "#3C873A",
    Python: "#4B8BBE",
    Unity: "#CBCBCB",
    "C#": "#9B4F96",
    Figma: "#F24E1E",
    Git: "#F05033",
    Tailwind: "#38BDF8",
    Aseprite: "#EF5FA7",
    Vercel: "#F5F5F5",
    Trello: "#0079BF",
    Github: "#C9D1D9",
    HTML: "#E34F26",
    CSS: "#2965F1",
    Vite: "#A78BFA",
    SQL: "#00758F",
    Typescript: "#3178C6",
}