
import { utilService } from "./util.service.js";

export const groupService = {
    addGroup,
    addTask,
    updateGroup,
    getDefaultGroup,
    getDefaultTask,
};


async function addGroup(groupToSave, board) {
    board = structuredClone(board)
    board.groups.push(groupToSave)
    return board
}

async function addTask(taskToSave, groupId, board) {
    board = structuredClone(board)
    const groupInx = board.groups.findIndex(group => group.id === groupId)
    board.groups[groupInx].tasks.push(taskToSave)
    return board
}

async function updateGroup(groupToSave, board) {
    board = structuredClone(board)
    const groupInx = board.groups.findIndex(group => group.id === groupToSave.id)
    board = board.groups.splice(groupInx, 1, groupToSave)

    // const group = board.groups.map((group) => {
    //     if (group.id === groupToSave.id) {
    //         group = groupToSave
    //     }
    //     return group;
    // });

    console.log(board);
    // return board

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
