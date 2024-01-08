import { NavLink } from "react-router-dom"

import { tempExampleBoard } from "./TaskDetailsTempBoard.js"


export function TaskDetails() {
    // const [isCover, setIsCover] = useState(true);  // dummy
    const board = tempExampleBoard
    const taskId = "c104"
    let groupId
    let task
    let group
    for (let gr of board.groups) {
        for (let ta of gr.tasks) {
            if (ta.id === taskId) {
                groupId = gr.id
                group = gr
                task = ta
                break
            }
        }
        if (groupId) break
    }
    console.log(task)

    function dummy(ev) {
        console.log("dummy: ", ev)
    }

    console.log("might: ", window.gStore);


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
                            <p>Add to card</p>
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
                            <p>Actions</p>
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
