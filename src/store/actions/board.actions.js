import { boardService } from "../../services/board.service";
import { ADD_BOARD, REMOVE_BOARD, SET_BOARD_FILTER_BY, SET_BOARDS, SET_BOARD, UNDO_CHANGES_BOARD, UPDATE_BOARD } from "../reducers/board.reducer";
import { store } from "../store";

export const boardActions = {
    loadBoards,
    loadBoard,
    removeBoard,
    saveBoard,
    setFilterBy
}


async function loadBoards() {
    try {
        const filterBy = store.getState().boardModule.filterBy
        const boards = await boardService.query(filterBy)
        store.dispatch({ type: SET_BOARDS, boards })
    } catch (err) {
        console.log('Had issues loading boards', err);
        throw err
    }
}

async function loadBoard(boardId) {
    try {
        const board = await boardService.getById(boardId)
        store.dispatch({ type: SET_BOARD, board })
    } catch (err) {
        console.log('Had issues loading board', err);
        throw err
    }
}

async function removeBoard(boardId) {
    try {
        store.dispatch({ type: REMOVE_BOARD, boardId })
        await boardService.remove(boardId)
    } catch (err) {
        store.dispatch({ type: UNDO_CHANGES_BOARD })
        console.log('Had issues loading boards', err);
        throw err
    }
}

async function saveBoard(board) {
    try {
        const type = board.id ? UPDATE_BOARD : ADD_BOARD
        const boardToSave = await boardService.save(board)
        store.dispatch({ type, board: boardToSave })
    } catch (err) {
        console.log('Had issues loading boards', err);
        throw err
    }
}

function setFilterBy(filterBy) {
    store.dispatch({ type: SET_BOARD_FILTER_BY, filterBy })
}