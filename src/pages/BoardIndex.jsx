import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { boardActions } from "../store/actions/board.actions";

import { BoardList } from "../cmp/BoardIndex/BoardList";
import { StarredBoardList } from "../cmp/BoardIndex/StarredBoardList";
import { AppDynHeader } from "../cmp/AppDynHeader";

export function BoardIndex() {
  const boards = useSelector((storeState) => storeState.boardModule.boards);
  // const user = useSelector((storeState) => storeState.userModule.user);

  // const [userBoards, setUserBoards] = useState()

  useEffect(() => {
    loadBoards();
    // loadUserBoards()
  }, []);

  async function loadBoards() {
    try {
      await boardActions.loadBoards();
    } catch (err) {
      console.log("Issues loading boards ,", err);
    }
  }

  // async function loadUserBoards() {
  //   try {
  //     setUserBoards(await boardActions.loadUserBoards(user._id))
  //   } catch (err) {
  //     console.log("Issues loading boards ,", err);
  //   }
  // }

  if (!boards) return <div>Loading..</div>;
  return (
    <>
      <AppDynHeader />
      <div className="board-index-container">
        <div className="all-boards-container">
          <div className="all-boards">
            {boards.some((board) => board.isStarred) && (
              <StarredBoardList boards={boards} />
            )}
            <BoardList boards={boards} />
            {/* <BoardList boards={boards} userBoards={userBoards} /> */}
          </div>
        </div>
      </div>
    </>
  );
}
