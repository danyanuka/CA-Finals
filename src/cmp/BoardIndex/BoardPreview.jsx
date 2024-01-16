import { Link } from "react-router-dom";
import { boardActions } from "../../store/actions/board.actions";
import { useState } from "react";

export function BoardPreview({ board }) {
  const [starIsHovered, setStarIsHovered] = useState(false);
  //
  async function onRemoveBoard(ev) {
    ev.preventDefault();
    try {
      await boardActions.removeBoard(board._id);
    } catch (err) {
      console.log("Issues removing board", err);
    }
  }

  async function onStarBoard(ev) {
    try {
      ev.preventDefault();
      const updatedBoard = { ...board, isStarred: !board.isStarred };
      console.log(updatedBoard);
      await boardActions.saveBoard(updatedBoard);
    } catch (err) {
      console.log("Issues removing board", err);
    }
  }

  return (
    <Link className="link-to-board" to={`/board/${board._id}`}>
      <div className="board-preview-content">
        <h3 className="board-name">{board.title}</h3>
        <div
          style={board.isStarred ? { right: "1%", opacity: "100%" } : {}}
          className="board-tile-options"
        >
          {/* Temporary btn */}
          <button
            style={{ border: "none", marginRight: "5px" }}
            onClick={(ev) => onRemoveBoard(ev)}
          >
            x
          </button>

          {board.isStarred === false ? (
            <i onClick={(ev) => onStarBoard(ev)} className="icon-star" />
          ) : (
            <i
              onMouseEnter={() => setStarIsHovered(true)}
              onMouseLeave={() => setStarIsHovered(false)}
              onClick={(ev) => onStarBoard(ev)}
              className={
                starIsHovered
                  ? "icon-star-starred-hovered"
                  : "icon-star-starred"
              }
            />
          )}
        </div>
      </div>
    </Link>
  );
}
