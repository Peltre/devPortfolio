import MCover from "./src/components/MCover"
import Navbar from "./src/components/Navbar"
import Projects from "./src/components/Projects"
import Skills from "./src/components/Skills"
import Footer from "./src/components/Footer"
import StatusRow from "./src/components/StatusRow"



function App() {
    return (
        <div className="min-h-screen bg-black relative">
            {/* Grid bg */}
            <div
                className="grid-pattern-animated absolute inset-0 pointer-events-none"

            />
            <div className="relative z-10 bg-black/15">
                <Navbar />
                <MCover />
                <StatusRow />
                <Skills />
                <Projects />
                <Footer />
            </div>
        </div>
    )

}

export default App