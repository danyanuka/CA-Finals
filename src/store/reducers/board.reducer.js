export const SET_BOARDS = "SET_BOARDS";
export const SET_BOARD = "SET_BOARD";
export const ADD_BOARD = "ADD_BOARD";
export const REMOVE_BOARD = "REMOVE_BOARD";
export const UPDATE_BOARD = "UPDATE_BOARD";
export const UNDO_CHANGES_BOARD = "UNDO_CHANGES_BOARD";
export const SET_BOARD_FILTER_BY = "SET_BOARD_FILTER_BY";

const initialState = {
  boards: null,
  curBoard: null,
  filterBy: null,
  lastBoards: [],
};

// action = {type, board}

export function boardReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_BOARDS:
      return {
        ...state,
        boards: action.boards,
      };
    case SET_BOARD:
      return {
        ...state,
        curBoard: action.board,
      };
    case ADD_BOARD:
      return {
        ...state,
        boards: [...state.boards, action.board],
      };
    case REMOVE_BOARD:
      const lastBoards = [...state.boards];
      return {
        ...state,
        boards: state.boards.filter((board) => board.id !== action.boardId),
        lastBoards,
      };
    case UPDATE_BOARD:
      return {
        ...state,
        boards: state.boards.map((board) =>
          board.id === action.board.id ? action.board : board
        ),
      };
    case SET_BOARD_FILTER_BY:
      return {
        ...state,
        filterBy: { ...action.filterBy },
      };
    case UNDO_CHANGES_BOARD:
      return {
        ...state,
        boards: [...state.lastBoards],
      };
    default:
      return state;
  }
}
