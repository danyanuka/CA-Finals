import { boardService } from "../../services/Board/board.service.local";
import {
  ADD_BOARD,
  REMOVE_BOARD,
  SET_BOARD_FILTER_BY,
  SET_BOARDS,
  SET_BOARD,
  UNDO_CHANGES_BOARD,
  UPDATE_BOARD,
} from "../reducers/board.reducer";
import { store } from "../store";

export const boardActions = {
  loadBoards,
  loadBoard,
  removeBoard,
  saveBoard,
  setFilterBy,
};

async function loadBoards() {
  try {
    const filterBy = store.getState().boardModule.filterBy;
    const boards = await boardService.query();
    store.dispatch({ type: SET_BOARDS, boards });
  } catch (err) {
    console.log("Had issues loading boards", err);
    throw err;
  }
}

async function loadBoard(boardId) {
  try {
    const board = await boardService.getById(boardId);
    store.dispatch({ type: SET_BOARD, board });
  } catch (err) {
    console.log("Had issues loading board", err);
    throw err;
  }
}

async function removeBoard(boardId) {
  try {
    await boardService.remove(boardId);
    store.dispatch({ type: REMOVE_BOARD, boardId });
  } catch (err) {
    store.dispatch({ type: UNDO_CHANGES_BOARD });
    console.log("Had issues loading boards", err);
    throw err;
  }
}

async function saveBoard(board) {
  try {
    const type = board._id ? UPDATE_BOARD : ADD_BOARD;
    const savedBoard = await boardService.save(board);
    store.dispatch({ type, board: savedBoard });
    return savedBoard;
  } catch (err) {
    console.log("Had issues loading boards", err);
    throw err;
  }
}

function setFilterBy(filterBy) {
  store.dispatch({ type: SET_BOARD_FILTER_BY, filterBy });
}
