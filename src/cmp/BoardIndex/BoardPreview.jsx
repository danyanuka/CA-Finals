import { Link } from "react-router-dom";

export function BoardPreview({ board }) {
  return (
    <Link to={`/board/${board._id}`}>
      <div className="board-preview-content">
        <h3>{board.title}</h3>
      </div>
    </Link>
  );
}
