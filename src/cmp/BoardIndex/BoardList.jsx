import { BoardPreview } from "./BoardPreview";
import { CreateBoardModal } from "../CreateBoardModal";
import { useState } from "react";

export function BoardList({ boards, onSaveBoard }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(isModalOpen);
  return (
    <ul className="board-list">
      {boards.map((board) => (
        <li className="board-preview" key={board._id}>
          <BoardPreview board={board} />
        </li>
      ))}

      <button
        onClick={() => setIsModalOpen(true)}
        className="board-preview new-board"
      >
        Create new board
      </button>
      {isModalOpen && <CreateBoardModal />}
    </ul>
  );
}
