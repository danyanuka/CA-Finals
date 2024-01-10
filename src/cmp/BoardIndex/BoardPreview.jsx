import { Link } from "react-router-dom";
import { boardActions } from "../../store/actions/board.actions";

export function BoardPreview({ board }) {
  async function onRemoveBoard(boardId) {
    try {
      await boardActions.removeBoard(boardId);
    } catch (err) {
      console.log("Issues removing board", err);
    }
  }

  return (
    <Link className="link-to-board" to={`/board/${board._id}`}>
      <div className="board-preview-content">
        <h3 className="board-name">{board.title}</h3>
        {/* TEMPORARY BUTTON */}
        <button onClick={() => onRemoveBoard(board._id)}>x</button>
        <i className="icon-star">
          <button className="star-board"></button>
        </i>
      </div>
    </Link>
  );
}
