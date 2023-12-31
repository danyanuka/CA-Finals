import { NavLink } from "react-router-dom";

export function BoardPreview({ board }) {
  return (
    <a>
      <div className="board-preview">
        <h3>{board.title}</h3>
      </div>
    </a>
  );
}
