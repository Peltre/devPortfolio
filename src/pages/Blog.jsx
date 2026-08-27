import { useNavigate } from "react-router-dom"

function Blog() {
    const navigate = useNavigate()

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "var(--pad-x)",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div id="bg" aria-hidden="true">
                <div className="bg-wash w1" />
                <div className="bg-wash w3" />
                <div className="bg-veil" />
                <div className="bg-grain" />
            </div>

            <div
                className="card contact"
                style={{ position: "relative", zIndex: 1, maxWidth: "560px" }}
            >
                <p className="eyebrow" style={{ color: "var(--s-talk)" }}>
                    Coming soon
                </p>
                <h2>
                    Work in <span className="grad">progress</span>
                </h2>
                <p>
                    The blog is being built as we speak. In the meantime, feel free to check out my
                    projects or get in touch.
                </p>
                <button className="btn" onClick={() => navigate("/")} style={{ marginTop: "var(--s2)" }}>
                    ← Back to portfolio
                </button>
            </div>
        </div>
    )
}

export default Blog