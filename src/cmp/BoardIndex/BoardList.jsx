import { BoardPreview } from "./BoardPreview";
// import { RootModal } from "../RootModal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/actions/app.actions";

export function BoardList({ boards, onSaveBoard }) {
  const dispatch = useDispatch();
  return (
    <ul className="board-list">
      {boards.map((board) => (
        <li className="board-preview" key={board._id}>
          <BoardPreview board={board} />
        </li>
      ))}
      <button
        onClick={() => dispatch(openModal("createBoard"))}
        className="board-preview new-board"
      >
        Create new board
      </button>
    </ul>
  );
}
