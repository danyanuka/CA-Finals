
import { utilService } from "./util.service.js";

export const groupService = {
    addList,
    addTask,
    getDefaultList,
    getDefaultTask,
};


async function addList(listToSave, board) {
    board = structuredClone(board)
    board.groups.push(listToSave)
    return board
}

async function addTask(taskToSave, groupId, board) {
    board = structuredClone(board)
    const groupInx = board.groups.findIndex(group => group.id === groupId)
    board.groups[groupInx].tasks.push(taskToSave)
    return board
}

function getDefaultList(title = "") {
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
        style: {},
        description: "",
        byMember: {},
        checkLists: [],
        comments: [],
        dueDate: "",
        labelIds: [],
        memberIds: [],
    };
    return task;
}
