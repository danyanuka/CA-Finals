import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

//Redux
import { useSelector } from "react-redux";
import { boardActions } from "../../store/actions/board.actions";

//Cmp
import { UserAvatar } from "../UserAvatar";

//Services
import { utilService } from "../../services/util.service";

export function BoardHeader() {
  const board = useSelector((storeState) => storeState.boardModule.curBoard);
  const [avgColorBg, setAvgColorBg] = useState("#FFFFFF");
  const [isDarkColor, setIsDarkColor] = useState(
    utilService.isDarkColor(avgColorBg, 80)
  );
  const [headerStyleProps, setHeaderStyleProps] = useState();
  const [isStarr, setIsStarr] = useState(board?.isStarred);

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
    headerStyles.backgroundColor = avgColorBg + "c1";
    headerStyles.color = utilService.isDarkColor(avgColorBg, 80)
      ? "#FFFFFF"
      : "#172b4d";

    setHeaderStyleProps(headerStyles);
    setIsDarkColor(utilService.isDarkColor(avgColorBg, 80));
  }

  async function onStarBoard(ev) {
    try {
      ev.preventDefault();
      setIsStarr(!isStarr);
      // when working locally
      const updatedBoard = { ...board, isStarred: !board.isStarred };

      // when working with mongo
      // const updatedBoard = { _id: board._id, isStarred: !board.isStarred };

      await boardActions.saveBoard(updatedBoard);
    } catch (err) {
      console.log("Issues removing board", err);
    }
  }

  return (
    <div className="black-wrapper" style={{ backgroundColor: "black" }}>
      <div className="board-header" style={headerStyleProps}>
        <div className="board-header-section">
          <div className="board-name">{board?.title}</div>

          <div
            className="board-header-btn"
            title="Click to star or unstar this board. Starred boards show up at the top of your boards list"
            onClick={(ev) => onStarBoard(ev)}
          >
            {isStarr && <i className="icon icon-star-starred"></i>}
            {!isStarr && isDarkColor && <i className="icon icon-star"></i>}

            {!isStarr && !isDarkColor && (
              <i className="icon icon-star-black"></i>
            )}
          </div>
        </div>

        <div className="board-header-section">
          <div className="board-header-btn filter-btn" title="Filter cards">
            <i
              className={"icon icon-filter" + (isDarkColor ? "" : "-black")}
            ></i>
            Filters
          </div>

          {board?.members && (
            <div className="board-members" title="User-Name">
              {board.members?.map((member, i) => {
                return (
                  <div key={i} title={member?.fullname}>
                    <UserAvatar
                      userFullName={member?.fullname}
                      userImg={member?.imgUrl}
                    />
                  </div>
                );
              })}
            </div>
          )}

          <div className="board-header-btn share-btn" title="Share board">
            <i className="icon-account"></i>
            <span>Share</span>
          </div>
        </div>
      </div>
    </div>
  );
}
