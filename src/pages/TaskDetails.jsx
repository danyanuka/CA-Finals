import { NavLink } from "react-router-dom"


export function TaskDetails() {

    return (
        <div className="one-element-page-parent">
            <section className="home one-element-page-child">
                <p>TaskDetails page</p>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/main">MainPage</NavLink>
                </nav>
            </section>
        </div>
    )
}
