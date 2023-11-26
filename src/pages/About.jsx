import { NavLink } from "react-router-dom"


export function About() {
    return (
        <div className="one-element-page-parent">
            <section className="about-us one-element-page-child">
                <p>About page</p>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/board">Board</NavLink>
                </nav>
            </section>
        </div>
    )
}
