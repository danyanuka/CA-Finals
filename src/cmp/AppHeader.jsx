import { NavLink } from "react-router-dom"


export function AppHeader() {

    return (
        <div className="nav-bar">
            <nav>
                <NavLink className="nav-link" to="/board"> <img src="../../public/logo.svg" alt="logo" />Trello</NavLink>
                <NavLink className="nav-link" to="">Workspace</NavLink>
                <NavLink className="nav-link" to="">Recent</NavLink>
                <NavLink className="nav-link" to="">Starred</NavLink>
                <NavLink className="nav-link" to="">More</NavLink>
            </nav>

            {/* add icon url */}
            <i className="add-navlink-button icon-add"></i>

            <input type="text" className="search-input" placeholder="Search" />

            <button className="notifications-btn" title="Notifications">NotificationsIcon</button>
            <button className="information-btn" title="Information">InformationIcon</button>
            <button className="account-btn" title="Account">AccountIcon</button>
        </div>
    )
}
