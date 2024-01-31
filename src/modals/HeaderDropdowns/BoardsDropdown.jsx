import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { closeModal } from "../../store/actions/app.actions";
import { boardActions } from "../../store/actions/board.actions";

export function BoardsDropdown({ isStarred }) {
  const dispatch = useDispatch();
  const boards = useSelector((storeState) => storeState.boardModule.boards);
  const [hoveredStar, setHoveredStar] = useState(null);
  const dynBoardsList =
    isStarred === "starred"
      ? boards?.filter((board) => board.isStarred)
      : boards;

  async function onStarBoard(ev, board) {
    try {
      ev.stopPropagation();
      ev.preventDefault();
      const updatedBoard = { _id: board?._id, isStarred: !board?.isStarred };
      await boardActions.saveBoard(updatedBoard);
    } catch (err) {
      console.log("Issues Updating board", err);
    }
  }

  return (
    <div className="header-dropdown-container scrollbar">
      <ul className="dropdown-board-list">
        {dynBoardsList?.map((board, index) => (
          <Link
            key={board._id}
            className="dropdown-li-link"
            onClick={() => dispatch(closeModal())}
            to={`/board/${board._id}`}
          >
            <li className="dropdown-li">
              <div style={board.style} className="dropdown-li-bg-thumb"></div>
              <div className="dropdown-li-text">
                <h3>{board.title}</h3>
                <p>{`${board?.createdBy?.fullname}'s Board`}</p>
              </div>
              {/* Stars */}

              <div
                style={board.isStarred ? { opacity: "100%" } : {}}
                className="board-tile-options"
              >
                {board.isStarred === false ? (
                  <i
                    onClick={(ev) => onStarBoard(ev, board)}
                    className="icon-star-dark"
                  />
                ) : (
                  <i
                    onMouseEnter={() => setHoveredStar(index)}
                    onMouseLeave={() => setHoveredStar(null)}
                    onClick={(ev) => onStarBoard(ev, board)}
                    className={
                      hoveredStar === index
                        ? "icon-star-starred-hovered"
                        : "icon-star-starred"
                    }
                  />
                )}
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
