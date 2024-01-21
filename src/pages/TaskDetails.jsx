import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { useNavigate } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "/src/store/actions/app.actions";
import { boardActions } from "../store/actions/board.actions";

// cmp
import { TaskDetailsCover } from "../cmp/TaskDetails/TaskDetailsCover";
import { TaskDetailsHeader } from "../cmp/TaskDetails/TaskDetailsHeader";
import { TaskDetailsMain } from "../cmp/TaskDetails/TaskDetailsMain";
import { TaskDetailsSideBar } from "../cmp/TaskDetails/TaskDetailsSideBar";

// services
import { groupService } from "../services/group.service";


export function TaskDetails() {
    const params = useParams()
    const dispatch = useDispatch();
    const board = useSelector(storeState => storeState.boardModule.curBoard)
    const [group, setGroup] = useState()
    const [task, setTask] = useState()

    const navigate = useNavigate();

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

    async function saveBoard(newBoard) {
        try {
            await boardActions.saveBoard(newBoard)
        } catch (err) {
            console.log('Had issues updating board', err);
        }
    }

    function closeTaskDetails(ev) {
        // TODO - Keep the old query params from the BoardDetails
        // const newSearchParams = emailService.getRelevantSearchParam(filterBy)
        navigate({
            pathname: `/board/${params.boardId}`,
            // search: createSearchParams(newSearchParams).toString()
        })
    }

    function openTaskModal(ev, modalName) {
        dispatch(openModal(modalName, ev.target, { board: board, task: task }));
    }


    // Will be inside the modals
    async function onEditGroup(newGroup) {
        return groupService.updateGroup(newGroup, board);
    }
    async function onUpdateTask(newTask) {
        return groupService.updateTask(newTask, group.id, board);
    }
    async function onMoveTask(newTask, dstGroupId) {
        return groupService.moveTask(newTask, group.id, dstGroupId, board);
    }


    if (!task) return <div className="task-details-wrapper">
        <div className="task-details">
            <p><br />&nbsp;&nbsp;Loading...</p>
        </div>
    </div>

    return (
        <div onClick={closeTaskDetails} className="task-details-wrapper">
            <div onClick={(ev) => ev.stopPropagation()} className="task-details">
                <button onClick={closeTaskDetails} className="transparent-btn-black task-details-icon-close">
                    <i className="icon-close-grayblue"></i>
                </button>
                {
                    task.style &&
                    task.style.backgroundColor &&
                    <TaskDetailsCover bkgColor={task.style.backgroundColor} cbOpenTaskModal={openTaskModal} />
                }
                <div className="task-details-data">
                    <TaskDetailsHeader task={task} groupName={group.title} cbOnUpdateTask={onUpdateTask} cbOpenTaskModal={openTaskModal} />
                    <TaskDetailsMain board={board} task={task} cbSaveBoard={saveBoard} cbOpenTaskModal={openTaskModal} />
                    <TaskDetailsSideBar task={task} cbSaveBoard={saveBoard} cbOpenTaskModal={openTaskModal} />
                </div>
            </div>
        </div>
    )
}
