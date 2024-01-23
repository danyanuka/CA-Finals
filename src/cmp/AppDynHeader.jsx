import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { utilService } from "../services/util.service";
import { useLocation } from "react-router-dom";

export function AppDynHeader() {
  const board = useSelector((storeState) => storeState.boardModule.curBoard);
  const [headerStyleProps, setHeaderStyleProps] = useState();
  const [avgColorBg, setAvgColorBg] = useState("#FFFFFF");
  const location = useLocation();

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
    const pathname = location.pathname;
    if (pathname === "/board") return;
    let headerStyles = {};
    headerStyles.backgroundColor = avgColorBg;
    headerStyles.color = utilService.isDarkColor(avgColorBg)
      ? "#FFFFFF"
      : "#000000";
    setHeaderStyleProps(headerStyles);
  }

  return (
    <div style={headerStyleProps} className="app-header-container">
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
