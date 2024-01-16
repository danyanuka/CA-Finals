import React, { useState } from "react";
import { useSelector } from "react-redux";
import { boardActions } from "../../store/actions/board.actions";

import { RootModalHeader } from "./RootModalHeader";
import { BackgroundPicker } from "../BackgroundPicker";
import { boardService } from "../../services/board.service";
import { constService } from "../../services/const-service";

export function CreateBoardModal() {
  const [newBoard, setNewBoard] = useState({});

  function handleChange({ target }) {
    let { name: field, value } = target;
    setNewBoard((prevBoard) => ({ ...prevBoard, [field]: value }));
  }

  function onCreateBoard() {
    if (newBoard.style) boardActions.saveBoard(newBoard);
    else {
      boardActions.saveBoard({
        ...newBoard,
        style: {
          background: "linear-gradient(45deg, #ff8e36, #ff5f6d)",
        },
      });
    }
  }

  console.log("New Board", newBoard);
  return (
    <>
      <RootModalHeader title="Create Board" />
      <div className="create-board-modal">
        <div className="board-demo-container">
          <div
            style={
              newBoard.style || {
                background: "linear-gradient(45deg, #ff8e36, #ff5f6d)",
              }
            }
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
            !newBoard.title
              ? { backgroundColor: "#091E4208" }
              : { backgroundColor: "#0C66E4", color: "white" }
          }
          disabled={!newBoard.title}
          className="create-board-submit"
          onClick={onCreateBoard}
        >
          Create
        </button>
      </div>
    </>
  );
}
