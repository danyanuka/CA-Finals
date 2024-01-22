import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useColorThief from "use-color-thief";
import { useDispatch, useSelector } from "react-redux";
import { utilService } from "../services/util.service";

export function AppDynHeader() {
  const board = useSelector((storeState) => storeState.boardModule.curBoard);
  const [headerStyleProps, setHeaderStyleProps] = useState();

  const { color } = useColorThief(utilService.getCleanURL(board), {
    format: "hex",
    colorCount: 10,
    quality: 10,
  });

  useEffect(() => {
    setHeaderStyles();
  }, [board]);

  function setHeaderStyles() {
    let headerStyles = {};
    headerStyles.backgroundColor = color;
    // console.log(headerStyles);
    setHeaderStyleProps(headerStyles);
  }

  console.log(board);
  return (
    <div style={headerStyleProps} className="app-header-container">
      <div className="app-header-content ">
        <p>hey</p>
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
