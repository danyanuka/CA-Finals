import { NavLink } from "react-router-dom"

export function AppHeader() {

    return (
        <div className="app-navbar">
            <nav className="nav-links">
                <NavLink className="nav-link" to="/board">
                    <img height="20px" width="91px" className="icon-logo" src="../../public/logo.gif" alt="logo" />
                </NavLink>

                <NavLink className="nav-link" to="">
                    Workspace
                    <img className="icon-show-more" src="../../public/show-more.svg" />
                </NavLink>

                <NavLink className="nav-link" to="">
                    Recent
                    <img className="icon-show-more" src="../../public/show-more.svg" />
                </NavLink>

                <NavLink className="nav-link" to="">
                    Starred
                    <img className="icon-show-more" src="../../public/show-more.svg" />
                </NavLink>

                <NavLink className="nav-link" to="">
                    More
                    <img className="icon-show-more" src="../../public/show-more.svg" />
                </NavLink>

                <NavLink className="nav-link" to="">
                    <img className="icon-show-more" src="../../public/add.svg" />
                </NavLink>

            </nav>

            <div className="nav-buttons">
                <div className="search-section">
                    <img className="icon-search" src="../../public/search.svg" />
                    <input type="text" className="search-input" placeholder="Search" />
                </div>
                <div className="notifications-btn" title="Notifications"><img className="icon-notifications" src="../../public/notifications.svg" /></div>
                <span className="information-btn" title="Information"><img className="icon-information" src="../../public/information.svg" /></span>
                <span className="account-btn" title="Account"><img className="icon-account" src="../../public/user.png" /></span>
            </div>
        </div>
    )
}
