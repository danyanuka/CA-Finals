import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import { AppHeader } from "../cmp/AppHeader"
import { BoardHeader } from "../cmp/BoardHeader"
import { boardActions } from "../store/actions/board.actions"


export function BoardDetails() {

    console.log("done")
    
    const boards = useSelector(storeState => storeState.boardModule.boards)
    // const filterBy = useSelector(storeState => storeState.boardModule.filterBy)
    console.log(boards)

    useEffect(() => {
        boardActions.loadBoards()
    }, [])

    return (
        <div className="home">
            <AppHeader />
            <BoardHeader />
        </div>
    )
}
