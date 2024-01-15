import React, { useState } from "react";
import { useSelector } from "react-redux";
import { boardActions } from "/src/store/actions/board.actions";

import { RootModalHeader } from "./RootModalHeader";
import { BackgroundPicker } from "/src/cmp/BackgroundPicker";
import { boardService } from "/src/services/board.service";

export function CreateBoardModal() {
  const [newBoard, setNewBoard] = useState({});

  function handleChange({ target }) {
    let { name: field, value } = target;
    setNewBoard((prevBoard) => ({ ...prevBoard, [field]: value }));
  }

  function onCreateBoard() {
    boardActions.saveBoard(newBoard);
  }

  console.log("New Board", newBoard);
  return (
    <>
      <RootModalHeader title="Create Board" />
      <div className="create-board-modal">
        <div className="board-demo-container">
          <div
            style={newBoard.style || { backgroundColor: "rgb(0, 121, 191)" }}
            className="bg-board-demo"
          >
            <img
              className="board-demo-img"
              src="imgs/board-demo-img.svg"
              alt=""
            />
          </div>
        </div>
        <BackgroundPicker setNewBoard={setNewBoard} />
        <label htmlFor="title">
          Board title<span> *</span>
        </label>
        <input
          className="board-title-input"
          onChange={handleChange}
          value={newBoard.title}
          name="title"
          type="text"
        ></input>
        <p className="title-require">👋 Board title is required</p>
        <button
          style={
            newBoard.title === false || { backgroundColor: "rgb(0, 121, 191)" }
          }
          className="create-board-submit"
          onClick={onCreateBoard}
        >
          Create
        </button>
      </div>
    </>
  );
}
