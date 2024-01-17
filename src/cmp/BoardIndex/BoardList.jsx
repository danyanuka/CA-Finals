import { BoardPreview } from "./BoardPreview";
import { openModal } from "../../store/actions/app.actions";

import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

export function BoardList({ boards }) {
  const dispatch = useDispatch();

  function onCreateBoard(ev) {
    dispatch(openModal("createBoard", ev.target));
  }

  return (
    <div>
      <div className="boards-title-container">
        <h3 className="board-list-title user-icon">Your boards</h3>
      </div>
      <ul className="board-list">
        {boards.map((board) => (
          <li style={board.style} className="board-preview" key={board._id}>
            <BoardPreview board={board} />
          </li>
        ))}
        <li onClick={onCreateBoard} className="board-preview new-board">
          Create new board
        </li>
      </ul>
    </div>
  );
}
