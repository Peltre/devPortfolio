import LiveGrid from "./src/components/LiveGrid"
import Navbar from "./src/components/Navbar"
import Hero from "./src/components/Hero"
import Now from "./src/components/Now"
import Projects from "./src/components/Projects"
import Experience from "./src/components/Experience"
import Contact from "./src/components/Contact"
import Footer from "./src/components/Footer"

function App() {
    return (
        <>
            <LiveGrid />
            <div style={{ position: "relative", zIndex: 1 }}>
                <Navbar />
                <Hero />
                <Now />
                <Projects />
                <Experience />
                <Contact />
                <Footer />
            </div>
        </>
    )
}

export default App