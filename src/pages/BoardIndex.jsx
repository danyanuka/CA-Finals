import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { boardActions } from "../store/actions/board.actions";

import { BoardList } from "../cmp/BoardIndex/BoardList";
import { AppHeader } from "../cmp/AppHeader";

export function BoardIndex() {
  const boards = useSelector((storeState) => storeState.boardModule.boards);

  useEffect(() => {
    loadBoards();
  }, []);

  async function loadBoards() {
    try {
      await boardActions.loadBoards();
    } catch (err) {
      console.log("Issues loading boards ,", err);
    }
  }

  async function onSaveBoard(board) {
    try {
      await boardActions.saveBoard();
    } catch (error) {
      console.log("Issues saving board ,", err);
    }
  }

  async function onRemoveBoard(boardId) {
    try {
      await boardActions.removeBoard(boardId);
    } catch (err) {
      console.log("Issues removing board", err);
    }
  }

  //   console.log("Boards from index :", boards);
  if (!boards) return <div>Loading..</div>;
  return (
    <div>
      <AppHeader></AppHeader>
      <div className="board-index-container">
        <h3>YOUR BOARDS</h3>
        <BoardList boards={boards} onSaveBoard={onSaveBoard} />
      </div>
    </div>
  );
}
