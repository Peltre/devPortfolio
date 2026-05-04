import { softSkills, skills } from "../data/skills"

function SoftSkillCard({ name, description, icon }) {
    return (
        <div className="group flex flex-col gap-4 p-6 bg-white/2 border border-white/8 rounded-2xl hover:border-emerald-400/20 hover:bg-white/4 transition-all duration-300">
            <div className="flex items-center gap-4">
                <span className="text-2xl text-emerald-400/60 font-mono">{icon}</span>
                <h3 className="text-white/80 font-medium tracking-wide">{name}</h3>
            </div>
            <p className="text-sm text-white/35 leading-relaxed">{description}</p>
        </div>
    )
}

function Skills() {
    return (
        <section id="habilidades" className="px-8 md:px-20 py-10">
            {/* Header */}
            <div className="mb-12">
                <p className="text-xs tracking-widest uppercase text-white/20 font-mono mb-2"> 01 / Skills</p>
                <h2 className="text-3xl font-light text-white/90">Skills & Stack</h2>
            </div>

            {/* Code isnt everything */}
            <div className="-mt-10 mb-4">
                <p className="text-emerald-400/60 font-medium">Code isn't everything...</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {softSkills.map(skill => (
                    <SoftSkillCard key={skill.name} {...skill} />
                ))}
            </div>

            {/* But its still very important */}
            <div className="mt-4">
                <p className="text-emerald-400/60 font-medium">But it's still very important...</p>
            </div>
            
        </section>
    )
}   

export default Skills