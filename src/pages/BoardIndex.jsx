import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { boardActions } from "../store/actions/board.actions";

import { BoardList } from "../cmp/BoardIndex/BoardList";

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

  async function onSaveBoard() {
    try {
      await boardActions.saveBoard();
    } catch (error) {
      console.log("Issues saving board ,", err);
    }
  }

  console.log("Boards from index :", boards);
  if (!boards) return <div>Loading..</div>;
  return (
    <div className="board-index-container">
      <h3>YOUR BOARDS</h3>
      <BoardList boards={boards} />
    </div>
  );
}
