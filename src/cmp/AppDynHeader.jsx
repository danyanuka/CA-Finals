import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { utilService } from "../services/util.service";
import { openModal } from "../store/actions/app.actions";
import { UserAvatar } from "./UserAvatar";
import { useLocation } from "react-router-dom";

export function AppDynHeader() {
  const board = useSelector((storeState) => storeState.boardModule.curBoard);
  const user = useSelector((storeState) => storeState.userModule.user);
  const [headerStyleProps, setHeaderStyleProps] = useState();
  const [avgColorBg, setAvgColorBg] = useState("#FFFFFF");
  const dispatch = useDispatch();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    async function setColorAsync() {
      const avgColor = await getBoardAvgColor(board);
      setAvgColorBg(avgColor);
    }
    setColorAsync();
  }, [board]);

  useEffect(() => {
    setHeaderStyles();
  }, [avgColorBg]);

  async function getBoardAvgColor(board) {
    if (board?.style?.backgroundImage) {
      const imgPath = board.style.backgroundImage;
      const cleanImgUrl = utilService.getCleanURL(imgPath);
      return utilService.getImgAvgColor(cleanImgUrl);
    } else if (board?.style?.backgroundColor) {
      const bgColor = board.style.backgroundColor;
      return new Promise((resolve, reject) => resolve(bgColor));
    } else {
      return new Promise((resolve, reject) => resolve("#FFFFFF"));
    }
  }

  function setHeaderStyles() {
    if (pathname === "/board") return;
    let headerStyles = {};
    headerStyles.backgroundColor = avgColorBg;
    headerStyles.color = utilService.isDarkColor(avgColorBg, 80)
      ? "#FFFFFF"
      : "#172b4d";

    setHeaderStyleProps(headerStyles);
  }

  function setLogoColor() {
    if (pathname === "/board") return "app-header-logo-container";
    else {
      return utilService.isDarkColor(avgColorBg, 80)
        ? "app-header-logo-container-white"
        : "app-header-logo-container";
    }
  }
  function dynIconClass() {
    if (pathname === "/board") return "icon-show-more-dark";
    else {
      return utilService.isDarkColor(avgColorBg, 80)
        ? "icon-show-more"
        : "icon-show-more-dark";
    }
  }

  function handleAccountClick(ev) {
    dispatch(openModal("accountMenu", ev.target));
  }

  function openModalDropdown(ev, isStarred) {
    dispatch(openModal("BoardsDropdown", ev.target, isStarred));
  }

  return (
    <div style={headerStyleProps} className="app-header-container">
      <div className="app-header-content ">
        <Link className="app-header-logo-link transparent-btn-black" to="/">
          <div className={setLogoColor()}></div>
        </Link>
        {/* All Boards */}
        <div
          onClick={openModalDropdown}
          className="header-dropdown transparent-btn-black"
          title="All Boards"
        >
          All boards
          <i className={dynIconClass()}></i>
        </div>
        {/* Starred Boards */}
        <div
          onClick={(ev) => openModalDropdown(ev, "starred")}
          className="header-dropdown transparent-btn-black"
          title="Starred Boards"
        >
          Starred boards
          <i className={dynIconClass()}></i>
        </div>

        {/* Create */}
        <div className="create-button-container">
          <div
            onClick={(ev) => dispatch(openModal("createBoard", ev.target))}
            className="header-create-button transparent-btn-black "
            to=""
            title="Create"
          >
            Create
          </div>
        </div>
        {/* User Avatar */}
        {user ? (
          <div className="app-header-avatar" onClick={handleAccountClick}>
            <UserAvatar userFullName={user?.fullname} userImg={user?.imgUrl} />
          </div>
        ) : (
          <i className="icon-account account-btn" title="Account"></i>
        )}
      </div>
    </div>
  );
}
