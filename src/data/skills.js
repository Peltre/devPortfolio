const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/"

import {
    SiJavascript, SiReact, SiNodedotjs, SiPython,
    SiUnity, SiFigma, SiGit, SiTailwindcss,
} from "react-icons/si"

import { TbBrandCSharp } from "react-icons/tb";

export const skills = [
    {
        name: "JavaScript",
        type: "Languages",
        category: "Language",
        icon: SiJavascript,
        siColor: "#f7df1e",
        level: 80,
        projects: ["Portfolio", "Game Engine UI"],
        description: "Core language powering both frontend logic and backend scripts.",
    },
    {
        name: "React",
        type: "Frameworks",
        category: "Frontend",
        icon: SiReact,
        siColor: "#61dafb",
        level: 75,
        projects: ["Portfolio"],
        description: "Main framework for building component-based user interfaces.",
    },
    {
        name: "Node.js",
        type: "Frameworks",
        category: "Backend",
        icon: SiNodedotjs,
        siColor: "#6ee7b7",
        level: 60,
        projects: ["API REST"],
        description: "Server-side JavaScript runtime for building APIs and tools.",
    },
    {
        name: "Python",
        type: "Languages",
        category: "Language",
        icon: SiPython,
        siColor: "#60a5fa",
        level: 55,
        projects: ["Data Scripts"],
        description: "Used for automation, scripting, and data processing tasks.",
    },
    {
        name: "Unity",
        type: "Frameworks",
        category: "Game Dev",
        icon: SiUnity,
        siColor: "#e2e8f0",
        level: 70,
        projects: ["Dino Game", "AWAQ Game"],
        description: "Primary game engine for 2D and 3D interactive experiences.",
    },
    {
        name: "C#",
        type: "Languages",
        category: "Language",
        icon: TbBrandCSharp,
        siColor: "#a78bfa",
        level: 65,
        projects: ["Dino Game", "AWAQ Game"],
        description: "Main scripting language inside Unity projects.",
    },
    {
        name: "Figma",
        type: "Tools",
        category: "Design",
        icon: SiFigma,
        siColor: "#f472b6",
        level: 65,
        projects: ["Portfolio UI", "App Mockups"],
        description: "UI/UX design tool for wireframing and prototyping.",
    },
    {
        name: "Git",
        type: "Tools",
        category: "Tool",
        icon: SiGit,
        siColor: "#fb923c",
        level: 72,
        projects: ["All projects"],
        description: "Version control system used across every project.",
    },
    {
        name: "Tailwind",
        type: "Frameworks",
        category: "Frontend",
        icon: SiTailwindcss,
        siColor: "#38bdf8",
        level: 78,
        projects: ["Portfolio"],
        description: "Utility-first CSS framework for rapid UI development.",
    },
]

export const softSkills = [
    {
        name: "Problem Solving",
        description: "Ability to analyze complex problems and develop effective solutions.",
        icon: '◈',
        color: "#f472b6",
    },
    {
        name: "Communication",
        description: "Strong verbal and written communication skills for effective collaboration.",
        icon: '✦',
        color: "#60a5fa",
    },
    {
        name: "Teamwork",
        description: "Experience working in diverse teams and contributing to group success.",
        icon: '⬡',
        color: "#a78bfa",
    },
    {
        name: "Adaptability",
        description: "Ability to quickly learn new technologies and adapt to changing environments.",
        icon: '◎',
        color: "#fb923c",
    },
]