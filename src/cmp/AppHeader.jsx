import { useState } from "react";
import { NavLink } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { openModal } from "../store/actions/app.actions";
import { useLocation } from "react-router-dom";
import { utilService } from "../services/util.service";
import { UserAvatar } from "./UserAvatar";



export function AppHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownName, setDropdownName] = useState("");

  const board = useSelector((storeState) => storeState.boardModule.curBoard);
  const user = useSelector(storeState => storeState.userModule.user)

  const dispatch = useDispatch();
  const location = useLocation();


  function onToggle(dropdownName) {
    setIsOpen(!isOpen);
    setDropdownName(dropdownName);
  }

  function onCreateBoard(ev) {
    dispatch(openModal("createBoard", ev.target));
  }

  function dynColors() {
    const pathname = location.pathname;
    if (pathname === "/board" || board?.style.backgroundImage === "") {
      return {
        backgroundColor: "white",
        color: "black",
      };
    }
  }

  function handleAccountClick(ev) {
    dispatch(openModal("accountMenu", ev.target));
  }

  return (
    <>
      <section className="app-navbar" style={dynColors()}>
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

          <div
            onClick={onCreateBoard}
            className="nav-link create"
            to=""
            title="Create"
          >
            Create
          </div>
        </nav>

        <div className="nav-buttons">
          <div className="search-section">
            <i className="icon-search"></i>
            <input
              style={board?.style}
              type="text"
              className="search-input"
              placeholder="Search"
            />
          </div>
          <i
            className="icon-notifications notifications-btn"
            title="Notifications"
          ></i>

          <i className="icon-info info-btn" title="Information"></i>

          {!user &&
            <i className="icon-account account-btn" title="Account"></i>
          }
          <div className="user-avatar" onClick={handleAccountClick}>
            <UserAvatar userFullName={user?.fullname} userImg={user.imgUrl} />
          </div>

        </div>
      </section>
    </>
  );
}
