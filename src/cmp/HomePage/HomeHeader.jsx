import { NavLink } from "react-router-dom";

export function HomeHeader() {
  return (
    <div className="home-header">
      <div className="header-content">
        <img className="logo" src="home-page/logo.svg"></img>
        <div className="link-to-boards">
          <NavLink className="nav-link" to="/board">
            Go to your boards
          </NavLink>
        </div>
      </div>
    </div>
  );
}
