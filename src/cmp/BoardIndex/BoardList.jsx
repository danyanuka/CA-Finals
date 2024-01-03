import { BoardPreview } from "./BoardPreview";
import { utilService } from "../../services/util.service";
import { openModal } from "../../store/actions/app.actions";

import { useState } from "react";
import { useDispatch } from "react-redux";

export function BoardList({ boards }) {
  const dispatch = useDispatch();

  function onCreateBoard(ev) {
    const data = utilService.getEventPositionData(ev);
    dispatch(openModal("createBoard", data));
  }

  return (
    <ul className="board-list">
      {boards.map((board) => (
        <li className="board-preview" key={board._id}>
          <BoardPreview board={board} />
        </li>
      ))}
      <button onClick={onCreateBoard} className="board-preview new-board">
        Create new board
      </button>
    </ul>
  );
}
