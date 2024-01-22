import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { boardActions } from "../store/actions/board.actions";

import { BoardList } from "../cmp/BoardIndex/BoardList";
import { StarredBoardList } from "../cmp/BoardIndex/StarredBoardList";
import { AppDynHeader } from "../cmp/AppDynHeader";

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

  if (!boards) return <div>Loading..</div>;
  return (
    <>
      <AppDynHeader />
      <div className="board-index-container">
        <div className="all-boards-container">
          <div className="all-boards">
            <StarredBoardList boards={boards} />
            <BoardList boards={boards} />
          </div>
        </div>
      </div>
    </>
  );
}
