
import { utilService } from "./util.service.js";
import { boardActions } from "../store/actions/board.actions.js";

export const groupService = {
    addList,
    addTask,
    getDefaultList,
    getDefaultTask,
};


async function addList(listToSave, board) {
    board.groups.push(listToSave)
    return boardActions.saveBoard(board)
}

async function addTask(taskToSave, groupId, board) {
    const groupInx = board.groups.findIndex(group => group.id === groupId)
    board.groups[groupInx].tasks.push(taskToSave)
    return boardActions.saveBoard(board)
}

function getDefaultList(title = "", tasks = [], style = {}) {
    const list = {
        id: utilService.makeId(),
        title,
        tasks,
        style,
    };
    return list;
}

function getDefaultTask(
    title = "",
    status = "",
    description = "",
    byMember = {},
    checkLists = [],
    comments = [],
    dueDate = null,
    labelIds = [],
    memberIds = [],
    style = {}
) {
    const task = {
        id: utilService.makeId(),
        title,
        status,
        style,
        description,
        byMember,
        checkLists,
        comments,
        dueDate,
        labelIds,
        memberIds,
    };
    return task;
}
