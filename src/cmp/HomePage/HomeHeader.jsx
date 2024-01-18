import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


export function HomeHeader() {
  const user = useSelector(storeState => storeState.userModule.user)

  return (
    <div className="home-header">
      <div className="header-content">
        <img className="logo" src="home-page/logo.svg"></img>

        {user ? (
          <div className="link-to-boards">
            <NavLink className="nav-link" to="/board">
              Go to your boards
            </NavLink>
          </div>
        ) : (
          <div className="login-signup-links">
            <Link to='login' className="nav-link login-link" >Log in</Link>
            <Link className="nav-link" to="/signup">
              Get Trello for free
            </Link>
          </div>
        )}
      </div>
    </div>

  );
}
