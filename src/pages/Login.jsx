import { NavLink } from "react-router-dom"


export function Home() {

    return (
        <div className="one-element-page-parent">
            <section className="home one-element-page-child">
                <p>Home page</p>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/main">Main</NavLink>
                </nav>
            </section>
        </div>
    )
}
