import { BoardPreview } from "./BoardPreview";
export function StarredBoardList({ boards }) {
  return (
    <div>
      <h3 className="board-list-title">Starred boards</h3>
      <ul className="board-list">
        {boards
          .filter((board) => board.isStarred)
          .map((board) => (
            <li style={board.style} className="board-preview" key={board._id}>
              <BoardPreview board={board} />
            </li>
          ))}
      </ul>
    </div>
  );
}
