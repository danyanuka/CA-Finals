import { storageService } from "./async-storage.service.js";
import { dbInitStorageService } from "./db-init-storage.service.js";

import { STORAGE_KEY_BOARDS } from "./db-utils.service.js";
import { utilService } from "./util.service.js";

export const boardService = {
  query,
  save,
  remove,
  getById,

  getDefaultFilter,
  getFilterFromParams,
};

const OVERWRITE_DATABASE = false;
dbInitStorageService.createDatabase(OVERWRITE_DATABASE);

async function query(filterBy) {
  let boards = await storageService.query(STORAGE_KEY_BOARDS);
  // if (filterBy) {
  //     let { minBatteryStatus, type = '', model = '' } = filterBy
  //     minBatteryStatus = minBatteryStatus || 0
  //     robots = robots.filter(robot => robot.type.toLowerCase().includes(type.toLowerCase())
  //         && robot.batteryStatus >= minBatteryStatus && robot.model.toLowerCase().includes(model.toLowerCase()))
  // }
  return boards;
}

function getById(boardId) {
  return storageService.get(STORAGE_KEY_BOARDS, boardId);
}

function remove(boardId) {
  return storageService.remove(STORAGE_KEY_BOARDS, boardId);
}

function save(boardToSave) {
  if (boardToSave._id) {
    return storageService.put(STORAGE_KEY_BOARDS, boardToSave);
  } else {
    const initBoard = _createBoard();
    const board = { ...initBoard, ...boardToSave };
    console.log(board);
    return storageService.post(STORAGE_KEY_BOARDS, board);
  }
}

function _createBoard(title = "") {
  const board = {
    _id: utilService.makeId(),
    title,
    isStarred: false,
    archivedAt: null,
    style: {},
    labels: [],
    members: [],
    groups: [],
    activities: [],
  };
  return board;
}

function getDefaultFilter() {
  console.log("dummy getDefaultFilter");
}

function getFilterFromParams() {
  console.log("dummy getFilterFromParams");
}
