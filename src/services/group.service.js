import { utilService } from "./util.service.js";
import { boardActions } from "../store/actions/board.actions.js";

export const groupService = {
  addTask,
  deleteTask,
  updateTask,
  moveTask,
  addGroup,
  updateGroup,
  getDefaultGroup,
  getDefaultTask,
};

async function addTask(taskToSave, groupId, board, addToStart) {
  board = structuredClone(board);
  const groupInx = board.groups.findIndex((group) => group.id === groupId);
  addToStart
    ? board.groups[groupInx].tasks.unshift(taskToSave)
    : board.groups[groupInx].tasks.push(taskToSave);
  return boardActions.saveBoard(board);
}

async function deleteTask(taskId, groupId, board) {
  board = structuredClone(board);
  const groupInx = board.groups.findIndex((group) => group.id === groupId);
  board.groups[groupInx].tasks.splice(taskId, 1);
  return boardActions.saveBoard(board);
}

async function updateTask(taskToSave, groupId, board) {
  board = structuredClone(board);
  const groupInx = board.groups.findIndex((group) => group.id === groupId);
  const taskInx = board.groups[groupInx].tasks.findIndex(
    (task) => task.id === taskToSave.id
  );
  board.groups[groupInx].tasks.splice(taskInx, 1, taskToSave);
  // console.log(board.groups);
  return boardActions.saveBoard(board);
}

async function moveTask(taskToMove, srcGroupId, dstGroupId, board) {
  board = structuredClone(board);
  const srcGroupInx = board.groups.findIndex(
    (group) => group.id === srcGroupId
  );
  const taskSrcIdx = board.groups[srcGroupInx].tasks.findIndex(
    (task) => task.id === taskToMove.id
  );
  board.groups[srcGroupInx].tasks.splice(taskSrcIdx, 1);
  const dstGroupInx = board.groups.findIndex(
    (group) => group.id === dstGroupId
  );
  board.groups[dstGroupInx].tasks.push(taskToMove);
  return boardActions.saveBoard(board);
}

async function addGroup(groupToSave, board) {
  board = structuredClone(board);
  board.groups.push(groupToSave);
  return boardActions.saveBoard(board);
}

async function updateGroup(groupToSave, board) {
  board = structuredClone(board);
  const groupInx = board.groups.findIndex(
    (group) => group.id === groupToSave.id
  );
  board.groups.splice(groupInx, 1, groupToSave);
  return boardActions.saveBoard(board);
}

function getDefaultGroup(title = "") {
  const list = {
    id: utilService.makeId(),
    title,
    tasks: [],
    style: {},
  };
  return list;
}

function getDefaultTask(title = "") {
  const task = {
    id: utilService.makeId(),
    title,
    // style: {},
    // description: "",
    // byMember: {},
    // checkLists: [],
    // comments: [],
    // dueDate: "",
    // labelIds: [],
    // memberIds: [],
  };
  return task;
}
