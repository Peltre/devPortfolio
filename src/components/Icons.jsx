// Iconos inline. Antes venían de react-icons y lucide-react; los que se
// usan aquí son cinco, así que no vale la pena arrastrar dos librerías.
// react-icons se sigue usando en ProjectModal.jsx.

const base = { width: 14, height: 14, viewBox: "0 0 24 24", fill: "currentColor" }

export const ArrowRight = (p) => (
    <svg {...base} {...p} aria-hidden="true">
        <path d="M13.2 5.6 20 12l-6.8 6.4-1.4-1.5 4.1-3.9H4v-2h11.9l-4.1-3.9 1.4-1.5Z" />
    </svg>
)

export const Mail = (p) => (
    <svg {...base} {...p} aria-hidden="true">
        <path d="M3 5h18a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1Zm1.6 2L12 12.2 19.4 7H4.6ZM4 8.9V17h16V8.9l-8 5.6-8-5.6Z" />
    </svg>
)