import topcut1 from "../assets/projects/topcut1.png"
import topcut2 from "../assets/projects/topcut2.png"
import topcut3 from "../assets/projects/topcut3.png"
import phlox1 from "../assets/projects/phlox1.png"
import phlox2 from "../assets/projects/phlox2.png"
import phlox3 from "../assets/projects/phlox3.png"
import kod1 from "../assets/projects/kod1.png"
import kod2 from "../assets/projects/kod2.png"
import kod3 from "../assets/projects/kod3.png"


export const projects = [
  {
    id: 1,
    title: "TopCut",
    date: "2026",
    role: "Fullstack Developer",
    description: "Modern movie & series rating duel game created with React + TMDB API",
    images: [
      topcut1,
      topcut2,
      topcut3,
    ],
    github: "https://github.com/Peltre/TopCut",
    demo: "https://top-cut-three.vercel.app/",
    tags: ["React", "Tailwind", "Vite"]
  },
  {
    id: 2,
    title: "Phlox",
    date: "2025",
    role: "Scrum Master & Full-Stack Developer",
    description: "Project Management WebApp that utilizes Softtek's AI called Frida",
    images: [
      phlox1,
      phlox2,
      phlox3,
    ],
    github: "private",
    demo: "private",
    tags: ["React", "Unity", "Node.js"]
  },
  {
    id: 3,
    title: "Knights Of Dango",
    date: "2024",
    role: "Solo Developer",
    description: "2D Plataformer developed in 1 week for a class game jam, created using Unity",
    images: [
      kod1,
      kod2,
      kod3,
    ],
    github: "no hay",
    demo: "https://pedr1p.itch.io/knights-of-dango",
    tags: ["Unity", "C#", "Game Design"]
  },
]