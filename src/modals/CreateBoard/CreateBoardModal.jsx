import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { boardActions } from "/src/store/actions/board.actions";
import { RootModalHeader } from "../RootModalHeader";
import { BackgroundPicker } from "/src/cmp/BackgroundPicker";
import { closeModal } from "../../store/actions/app.actions";

export function CreateBoardModal() {
  const [newBoard, setNewBoard] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange({ target }) {
    let { name: field, value } = target;
    setNewBoard((prevBoard) => ({ ...prevBoard, [field]: value }));
  }

  async function onCreateBoard() {
    // if (!newBoard.style) {
    //   setNewBoard((prev) => ({
    //     ...prev,
    //     style: { backgroundImage: "url(public/grad-bg-images/light-blue.svg)" },
    //   }));
    // }
    const board = await boardActions.saveBoard(newBoard);
    console.log(board);
    dispatch(closeModal());
    navigate(`/board/${board._id}`);
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
                backgroundImage: "url(public/grad-bg-images/light-blue.svg)",
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
