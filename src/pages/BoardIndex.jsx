import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { boardActions } from "../store/actions/board.actions";

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

  console.log("Boards from index :", boards);
  if (!boards) return <div>Loading..</div>;
  return <div></div>;
}
