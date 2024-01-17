import { BoardPreview } from "./BoardPreview";
export function StarredBoardList({ boards }) {
  return (
    <div>
      <div className="boards-title-container">
        <h3 className="board-list-title starred">Starred boards </h3>
      </div>
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
