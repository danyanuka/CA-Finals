import { RootModalHeader } from "./RootModalHeader";
import { BackgroundPicker } from "../BackgroundPicker";
import { useSelector } from "react-redux";
import React from "react";

export function CreateBoardModal() {
  return (
    <div className="create-board-modal">
      <RootModalHeader label="Create Board"/>
      <div className="board-demo-container">
        <div className="bg-board-demo">
          <img
            className="board-demo-img"
            src="imgs/board-demo-img.svg"
            alt=""
          />
        </div>
      </div>
      <BackgroundPicker />
    </div>
  );
}
