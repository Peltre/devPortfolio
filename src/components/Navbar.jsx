
function Navbar() {
    const handleScroll = (e, id) => {
        e.preventDefault()
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth'})
    }

    return (
        <nav>


        </nav>
    )
}