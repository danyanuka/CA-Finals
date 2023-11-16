import { legacy_createStore as createStore } from "redux";
import { boardReducer } from "./reducers/board.reducer";

export const store = createStore(boardReducer);
