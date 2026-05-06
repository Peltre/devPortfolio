const CDM = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/"

export const skills = [
    {
        name: "JavaScript",
        type: "Languages",
        category: "Language",
        icon: `${CDN}/javascript/javascript-original.svg`,
        level: 80,
        projects: ["Portfolio", "Game Engine UI"],
        description: "Core language powering both frontend logic and backend scripts.",
    },
    {
        name: "React",
        type: "Frameworks",
        category: "Frontend",
        icon: `${CDN}/react/react-original.svg`,
        level: 75,
        projects: ["Portfolio"],
        description: "Main framework for building component-based user interfaces.",
    },
    {
        name: "Node.js",
        type: "Frameworks",
        category: "Backend",
        icon: `${CDN}/nodejs/nodejs-original.svg`,
        level: 60,
        projects: ["API REST"],
        description: "Server-side JavaScript runtime for building APIs and tools.",
    },
    {
        name: "Python",
        type: "Languages",
        category: "Language",
        icon: `${CDN}/python/python-original.svg`,
        level: 55,
        projects: ["Data Scripts"],
        description: "Used for automation, scripting, and data processing tasks.",
    },
    {
        name: "Unity",
        type: "Frameworks",
        category: "Game Dev",
        icon: `${CDN}/unity/unity-original.svg`,
        level: 70,
        projects: ["Dino Game", "AWAQ Game"],
        description: "Primary game engine for 2D and 3D interactive experiences.",
    },
    {
        name: "C#",
        type: "Languages",
        category: "Language",
        icon: `${CDN}/csharp/csharp-original.svg`,
        level: 65,
        projects: ["Dino Game", "AWAQ Game"],
        description: "Main scripting language inside Unity projects.",
    },
    {
        name: "Figma",
        type: "Tools",
        category: "Design",
        icon: `${CDN}/figma/figma-original.svg`,
        level: 65,
        projects: ["Portfolio UI", "App Mockups"],
        description: "UI/UX design tool for wireframing and prototyping.",
    },
    {
        name: "Git",
        type: "Tools",
        category: "Tool",
        icon: `${CDN}/git/git-original.svg`,
        level: 72,
        projects: ["All projects"],
        description: "Version control system used across every project.",
    },
    {
        name: "Tailwind",
        type: "Frameworks",
        category: "Frontend",
        icon: `${CDN}/tailwindcss/tailwindcss-original.svg`,
        level: 78,
        projects: ["Portfolio"],
        description: "Utility-first CSS framework for rapid UI development.",
    },
]

export const softSkills = [
    {
        name: "Problem Solving",
        description: "Ability to analyze complex problems and develop effective solutions.",
        icon: '◈'
    },
    {
        name: "Communication",
        description: "Strong verbal and written communication skills for effective collaboration.",
        icon: '✦'
    },
    {
        name: "Teamwork",
        description: "Experience working in diverse teams and contributing to group success.",
        icon: '⬡'
    },
    {
        name: "Adaptability",
        description: "Ability to quickly learn new technologies and adapt to changing environments.",
        icon: '◎'
    }
]