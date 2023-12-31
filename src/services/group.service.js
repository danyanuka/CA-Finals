import { utilService } from "./util.service.js";
import { boardService } from "./board.service.js";

export const groupService = {
    addList,
    addTask,
    getDefaultList,
    getDefaultTask,
};

// const board = useSelector(storeState => storeState.boardModule.curBoard)

async function addList(listToSave, board) {
    const boardToSave = board.groups.push(listToSave)
    return boardService.save(boardToSave)
}

async function addTask(taskToSave, groupId, board) {
    const groupInx = board.groups.findIndex(group => group.id === groupId)
    const boardToSave = board.groups[groupInx].tasks.push(taskToSave)
    return boardService.save(boardToSave)
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
