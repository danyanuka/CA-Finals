import { NavLink } from "react-router-dom";

export function HomeHeader() {
  return (
    <div className="home-header">
      <img className="logo" src="/logo.svg"></img>
      <div className="link-to-boards">
        <NavLink className="nav-link" to="/board">
          Go to your boards
        </NavLink>
      </div>
    </div>
  );
}
