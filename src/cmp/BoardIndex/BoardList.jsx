import { BoardPreview } from "./BoardPreview";
// import { RootModal } from "../RootModal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/actions/app.actions";

export function BoardList({ boards }) {
  const dispatch = useDispatch();

  function onCreateBoard(ev) {
    const elementRect = ev.target.getBoundingClientRect();
    const { clientY, clientX } = ev;
    const mousePos = { clientX, clientY };
    const data = {
      elementRect: {
        bottom: elementRect.bottom,
        height: elementRect.height,
        left: elementRect.left,
        right: elementRect.right,
        top: elementRect.top,
        width: elementRect.width,
        x: elementRect.x,
        y: elementRect.y,
      },
      mousePos,
    };
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
