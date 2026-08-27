// Color de marca por tecnología. Es lo que pinta los tags en las tarjetas
// de proyecto, el destacado y el modal.
//
// Se guardan como hex crudo (no var(--...)) porque los componentes les
// concatenan un sufijo de alpha, tipo `${color}14`, para el relleno
// translúcido. Eso solo funciona con hex.
//
// Para añadir una tecnología, basta con agregar su hex aquí.

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