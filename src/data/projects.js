import topcut1 from "../assets/projects/topcut1.png"
import topcut2 from "../assets/projects/topcut2.png"
import topcut3 from "../assets/projects/topcut3.png"
import phlox1 from "../assets/projects/phlox1.png"
import phlox2 from "../assets/projects/phlox2.png"
import phlox3 from "../assets/projects/phlox3.png"
import phlox4 from "../assets/projects/phlox4.png"
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
    longDescription: "TopCut is a daily game similar to Wordle, in this game you will have to choose between 2 movies/series and pick the one you think it has the higher rating (according to TMDB), it uses a date-based seed to generate the same 20 pairs for all players each day, it also saves your current streak in the browser's localStorage.",
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
    longDescription: "Phlox is a custom Project Management tool similar to Jira / Trello, it was created in collaboration with @Softtek, it integrated direct AI service, database auth (Firebase), IoT systems integration & even gamification with Unity, its main goal was to provide a tool that really fitted the companies values by proposing a merge between a Project Management App & a fully intelligent office, sadly demo/repo is not available due to an NDA.",
    images: [
      phlox4,
      phlox1,
      phlox2,
      phlox3,
    ],
    tags: ["React", "Typescript", "Node.js"]
  },
  {
    id: 3,
    title: "Knights Of Dango",
    date: "2024",
    role: "Solo Developer",
    description: "2D Plataformer developed in 1 week for a class game jam, created using Unity",
    longDescription: "Knights Of Dango is a little plataformer game developed in the span of 1 week due to a mini-gamejam we had back in school, which by the way, IT WON, gameplay is rather simple & has the player jumping & fighting slimes to gather all the sweet dangos that will open the final door to reveal the ending, all assets were personally made by me, using the Aseprite software.",
    images: [
      kod1,
      kod3,
    ],
    demo: "https://pedr1p.itch.io/knights-of-dango",
    tags: ["Unity", "C#", "Aseprite"]
  },
]