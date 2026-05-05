import MCover from "./src/components/MCover"
import Navbar from "./src/components/Navbar"
import Projects from "./src/components/Projects"
import Skills from "./src/components/Skills"



function App () {
    return (
        <div className="min-h-screen bg-gray-950 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[32px_32px]" />
            <div className="relative z-10">
                <Navbar />
                <MCover/>
                <Skills />
                <Projects />
            </div>
        </div>
    )
}

export default App