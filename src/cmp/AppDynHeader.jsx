import { NavLink, Link } from "react-router-dom";

export function AppDynHeader() {
  return (
    <div className="app-header-container">
      <div className="app-header-content ">
        <Link className="app-header-logo-link transparent-btn-black" to="/">
          <div className="app-header-logo-container"></div>
        </Link>
      </div>
    </div>
  );
}

/* <div className="link-to-boards">
       <NavLink className="nav-link" to="/board">
        Go to your boards
   </NavLink>
        </div> */
