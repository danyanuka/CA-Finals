import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react";
import { useParams } from "react-router"

//redux
import { useSelector } from "react-redux";
import { boardActions } from "../store/actions/board.actions";

import { TaskDetailsCover } from "../cmp/TaskDetails/TaskDetailsCover";
import { TaskDetailsHeader } from "../cmp/TaskDetails/TaskDetailsHeader";
import { TaskDetailsMain } from "../cmp/TaskDetails/TaskDetailsMain";
import { TaskDetailsSideBar } from "../cmp/TaskDetails/TaskDetailsSideBar";


export function TaskDetails() {
    const params = useParams()
    const board = useSelector(storeState => storeState.boardModule.curBoard)
    const [group, setGroup] = useState()
    const [task, setTask] = useState()

    useEffect(() => {
        loadBoard()
    }, [params.boardId])

    useEffect(() => {
        parseBoard()
    }, [board])

    async function loadBoard() {
        try {
            await boardActions.loadBoard(params.boardId)
        } catch (err) {
            console.log('Had issues loading board', err);
        }
    }

    function parseBoard() {
        if (!board) return
        let groupId
        for (let gr of board.groups) {
            for (let ta of gr.tasks) {
                if (ta.id === params.taskId) {
                    groupId = gr.id
                    setGroup(gr)
                    setTask(ta)
                    break
                }
            }
            if (groupId) break
        }
    }

    function dummy(ev) {
        console.log("dummy: ", ev)
    }

    if (!task) return <div className="task-details-wrapper">
        <div className="task-details">
            <p><br />&nbsp;&nbsp;Loading...</p>
        </div>
    </div>

    return (
        <div className="task-details-wrapper">
            <div className="task-details">
                <button className="transparent-btn-black task-details-icon-close">
                    <i className="icon-close-grayblue"></i>
                </button>
                { 
                    task.style &&
                    task.style.backgroundColor &&
                    <TaskDetailsCover />
                }
                <div className="task-details-data">
                    <TaskDetailsHeader taskName={task.title} groupName={group.title} />
                    <TaskDetailsMain />
                    <TaskDetailsSideBar />
                </div>
            </div>
        </div>
    )
}
