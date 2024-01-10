import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react";
import { useParams } from "react-router"

//redux
import { useSelector } from "react-redux";
import { boardActions } from "../store/actions/board.actions";


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
                    task.style.backgroundColor &&
                    <div className="task-details-cover">
                        <button className="transparent-btn-black task-details-cover-btn">
                            <i className="icon-task-details-cover"></i>
                            &nbsp;Cover
                        </button>
                    </div>
                }
                <div className="task-details-data">
                    <header className="task-details-header">
                        <i className="icon-task-details-header"></i>
                        <h1>{task.title}</h1>
                        <h2>
                            in list
                            <button>{group.title}</button>
                        </h2>
                        <i className="icon-watch-task"></i>
                    </header>
                    <div className="task-details-main">
                        <div className="task-details-brief-items">
                            <div className="task-details-members">Members
                                {/* <TaskMembersModal /> */}
                            </div>
                            <div className="task-details-labels">Labels</div>
                            <div className="task-details-notifications">Notifications</div>
                            <div className="task-details-date">Dates / Due Date</div>
                        </div>
                        <div className="task-details-description">Description</div>
                        <div className="task-details-attachments">Trello attachments</div>
                        <div className="task-details-checklists">Checklists</div>
                        <div className="task-details-activities">Activity</div>
                        <div className="task-details-comments">Comments</div>
                    </div>
                    <aside className="task-details-sidebar">
                        <div className="task-details-sidebar-prop">
                            <h3>Add to card</h3>
                            <button className="task-details-btn task-details-sidebar-members">
                                <i className="icon-task-members"></i>
                                Member
                            </button>
                            <button className="task-details-btn task-details-sidebar-labels">
                                <i className="icon-task-labels"></i>
                                Labels
                            </button>
                            <button className="task-details-btn task-details-sidebar-checklists">
                                <i className="icon-task-checklist"></i>
                                Checklists
                            </button>
                            <button className="task-details-btn task-details-sidebar-dates">
                                <i className="icon-task-dates"></i>
                                Dates
                            </button>
                            <button className="task-details-btn task-details-sidebar-attachments">
                                <i className="icon-task-attachments"></i>
                                Attachments
                            </button>
                        </div>
                        <div className="task-details-sidebar-actions">
                            <h3>Actions</h3>
                            <button className="task-details-btn task-details-sidebar-move">
                                <i className=""></i>
                                Move
                            </button>
                            <button className="task-details-btn task-details-sidebar-copy">
                                <i className="icon-task-copy"></i>
                                Copy
                            </button>
                            <button className="task-details-btn task-details-sidebar-template">
                                <i className="icon-task-make-template"></i>
                                Make template
                            </button>
                            <button className="task-details-btn task-details-sidebar-archive">
                                <i className="icon-task-archive"></i>
                                Archive
                            </button>
                            <button className="task-details-btn task-details-sidebar-share">
                                <i className="icon-task-share"></i>
                                Share
                            </button>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    )
}
