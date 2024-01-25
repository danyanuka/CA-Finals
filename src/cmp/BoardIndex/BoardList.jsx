import { useSelector } from "react-redux";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { BoardPreview } from "./BoardPreview";
import { openModal } from "../../store/actions/app.actions";
import { UserAvatar } from "../UserAvatar";

export function BoardList({ boards }) {
  const dispatch = useDispatch();
  const user = useSelector((storeState) => storeState.userModule.user);
  function onCreateBoard(ev) {
    dispatch(openModal("createBoard", ev.target));
  }

  return (
    <div>
      <div className="boards-title-container">
        {user ? (
          <div className="index-title-avatar">
            <UserAvatar userFullName={user?.fullname} userImg={user?.imgUrl} />
          </div>
        ) : (
          <i className="icon-account account-btn" title="Account"></i>
        )}
        <h3 className="board-list-title">{`${user.fullname}'s Boards`}</h3>
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
