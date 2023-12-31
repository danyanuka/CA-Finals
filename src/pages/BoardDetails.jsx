import { useEffect } from "react";
import { useParams } from "react-router"

//redux
import { useSelector } from "react-redux";
import { boardActions } from "../store/actions/board.actions"

//cmps
import { AppHeader } from "../cmp/AppHeader"
import { BoardHeader } from "../cmp/BoardHeader"
import { GroupList } from "../cmp/GroupList"

//services
import { groupService } from "../services/group.service";

export function BoardDetails() {
    const params = useParams()
    const board = useSelector(storeState => storeState.boardModule.curBoard)

    useEffect(() => {
        loadBoard()
    }, [params.boardId])

    async function loadBoard() {
        try {
            await boardActions.loadBoard(params.boardId)
        } catch (err) {
            console.log('Had issues loading board', err);
        }
    }

    async function onAddList(newList) {
        try {
            await groupService.addList(newList, board)
        } catch (err) {
            console.log('Had issues adding list', err);
        }
    }

    async function onAddTask(newTask, groupId) {
        try {
            await groupService.addTask(newTask, groupId, board)
        } catch (err) {
            console.log('Had issues adding task', err);
        }
    }
    if (!board) return <div>Loading..</div>;
    return (

        <div className="home">
            <AppHeader />
            <BoardHeader />
            <GroupList board={board} onAddList={onAddList} onAddTask={onAddTask} />
        </div>
    )
}
