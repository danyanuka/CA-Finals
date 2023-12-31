import { useEffect, useState } from "react";
import { useParams } from "react-router"

//redux
import { useSelector } from "react-redux";
import { boardActions } from "../store/actions/board.actions"

//cmps
import { AppHeader } from "../cmp/AppHeader"
import { BoardHeader } from "../cmp/BoardHeader"
import { GroupList } from "../cmp/GroupList"

//services
import { boardService } from "../services/board.service";
import { groupService } from "../services/group.service";


export function BoardDetails() {
    const params = useParams()
    const board = useSelector(storeState => storeState.boardModule.curBoard)
    console.log(board);
    // const [board, setBoard] = useState(null)

    useEffect(() => {
        // loadBoard()
        boardActions.loadBoard(params.boardId)
    }, [board])

    async function loadBoard() {
        try {
            await boardActions.loadBoard(params.boardId)
            // const board = await boardService.getById(params.boardId)
            // setBoard(board)
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
