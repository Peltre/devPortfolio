// Milestones for the "Journey" section, ordered chronologically.
// status: "done" | "pending" (pending = locked / in progress, shown dimmed)
// image  (optional): imported image asset, shown as a small thumbnail
// link   (optional): { label, url }, shown as a small pill link
// A node can have neither, either, or both — whatever fits that milestone.

export const journey = [
    {
        year: "2022",
        title: "First deploy to production",
        description: "Shipped a real app end-to-end for the first time — from local dev to a live URL people could actually use.",
        status: "done",
    },
    {
        year: "2023",
        title: "First game published on itch.io",
        description: "Took a game jam project all the way to a public release, and learned the gap between 'done' and 'shippable'.",
        status: "done",
        link: { label: "Knights Of Dango on itch.io", url: "https://pedr1p.itch.io/knights-of-dango" },
    },
    {
        year: "2024",
        title: "100 commits in a single month",
        description: "The month things clicked — daily commits, smaller PRs, better git habits overall.",
        status: "done",
    },
    {
        year: "2025",
        title: "First solo full-stack project shipped",
        description: "Owned a project front to back — design, backend, deployment — with no team to lean on.",
        status: "done",
        link: { label: "TopCut on GitHub", url: "https://github.com/Peltre/TopCut" },
    },
    {
        year: "In progress",
        title: "Ship a finished game in Unity 3D",
        description: "Learning the engine properly, building a small prototype with a real itch.io release as the goal.",
        status: "pending",
    },
]