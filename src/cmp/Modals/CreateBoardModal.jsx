import React, { useState } from "react";
import { useSelector } from "react-redux";
import { boardActions } from "../../store/actions/board.actions";

import { RootModalHeader } from "./RootModalHeader";
import { BackgroundPicker } from "../BackgroundPicker";
import { boardService } from "../../services/board.service";

export function CreateBoardModal() {
  const [newBoard, setNewBoard] = useState({});

  function handleChange({ target }) {
    let { name: field, value } = target;
    setNewBoard((prevBoard) => ({ ...prevBoard, [field]: value }));
  }

  function onCreateBoard() {
    boardActions.saveBoard(newBoard);
  }

  // function setBgDemo () {
  //   if()
  // }

  console.log("New Board", newBoard);
  return (
    <>
      <RootModalHeader title="Create Board" />
      <div className="create-board-modal">
        <div className="board-demo-container">
          <div style={newBoard.style} className="bg-board-demo">
            <img
              className="board-demo-img"
              src="imgs/board-demo-img.svg"
              alt=""
            />
          </div>
        </div>
        <BackgroundPicker setNewBoard={setNewBoard} />
        <button onClick={onCreateBoard}>Create</button>
        <input
          onChange={handleChange}
          value={newBoard.title}
          name="title"
          type="text"
        ></input>
      </div>
    </>
  );
}
