import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { useSelector } from "react-redux";

import { AppHeader } from "../cmp/AppHeader"
import { BoardHeader } from "../cmp/BoardHeader"
import { GroupList } from "../cmp/GroupList"

import { boardActions } from "../store/actions/board.actions"
import { boardService } from "../services/board.service";


export function BoardDetails() {
    const params = useParams()
    // const board = useSelector(storeState => storeState.boardModule.curBoard)
    const [board, setBoard] = useState(null)

    useEffect(() => {
        loadBoard()
    }, [params.boardId])

    async function loadBoard() {
        try {
            const board = await boardService.getById(params.boardId)
            setBoard(board)
        } catch (err) {
            console.log('Had issues loading board', err);
        }
    }
    return (
        <div className="home">
            <AppHeader />
            <BoardHeader />
            <GroupList board={board} />
        </div>
    )
}
