import { useState } from "react";
import { NavLink } from "react-router-dom";

export function AppHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownName, setDropdownName] = useState("");

  function onToggle(dropdownName) {
    setIsOpen(!isOpen);
    setDropdownName(dropdownName);
  }

  return (
    <>
      <section className="app-navbar">
        <nav className="nav-links">
          <NavLink className="nav-link" to="/">
            <img
              height="20px"
              width="91px"
              className="icon-logo"
              src="../../public/logo.gif"
              alt="logo"
            />
          </NavLink>

          <div
            className="nav-link"
            to=""
            title="Workspace"
            onClick={(e) => {
              onToggle(e.target.title);
            }}
          >
            Workspace
            <i className="icon-show-more"></i>
            {isOpen && (
              <div className="dropdown">
                <p>{dropdownName}</p>
              </div>
            )}
          </div>

          <div className="nav-link" to="" title="Recent">
            Recent
            <i className="icon-show-more"></i>
          </div>

          <div className="nav-link" to="" title="Starred">
            Starred
            <i className="icon-show-more"></i>
          </div>

          <div className="nav-link" to="" title="More">
            More
            <i className="icon-show-more"></i>
          </div>

          <div className="nav-link create" to="" title="Create">
            Create
          </div>
        </nav>

        <div className="nav-buttons">
          <div className="search-section">
            <i className="icon-search"></i>
            <input type="text" className="search-input" placeholder="Search" />
          </div>
          <i
            className="icon-notifications notifications-btn"
            title="Notifications"
          ></i>

          <i className="icon-info info-btn" title="Information"></i>

          <i className="icon-account account-btn" title="Account"></i>
        </div>
      </section>
    </>
  );
}
