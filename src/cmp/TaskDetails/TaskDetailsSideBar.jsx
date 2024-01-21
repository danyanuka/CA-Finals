
export function TaskDetailsSideBar({ task, cbSaveBoard, cbOpenTaskModal }) {

    function dummy(ev) {
        console.log("dummy: ", ev)
    }

    return <aside className="task-details-sidebar">
        <div className="task-details-sidebar-prop">
            <h3 className="sidebar-header">Add to card</h3>
            <button onClick={(ev) => cbOpenTaskModal(ev, "taskMembers")} className="td-btn task-details-sidebar-members">
                <i className="icon-task-members"></i>
                Member
            </button>
            <button onClick={(ev) => cbOpenTaskModal(ev, "taskLabels")} className="td-btn task-details-sidebar-labels">
                <i className="icon-task-labels"></i>
                Labels
            </button>
            <button onClick={(ev) => cbOpenTaskModal(ev, "taskChecklist")} className="td-btn task-details-sidebar-checklists">
                <i className="icon-task-checklist"></i>
                Checklists
            </button>
            <button onClick={(ev) => cbOpenTaskModal(ev, "taskDates")} className="td-btn task-details-sidebar-dates">
                <i className="icon-task-dates"></i>
                Dates
            </button>
            <button onClick={(ev) => cbOpenTaskModal(ev, "taskAttach")} className="td-btn task-details-sidebar-attachments">
                <i className="icon-task-attachments"></i>
                Attachments
            </button>
            {(!task.style || !task.style.backgroundColor) &&
                <button onClick={(ev) => cbOpenTaskModal(ev, "taskCover")} className="td-btn task-details-sidebar-cover">
                    <i className="icon-task-cover"></i>
                    Cover
                </button>}
        </div>
        <div className="task-details-sidebar-actions">
            <h3 className="sidebar-header">Actions</h3>
            <button onClick={(ev) => cbOpenTaskModal(ev, "taskMove")} className="td-btn task-details-sidebar-move">
                <i className="icon-task-move"></i>
                Move
            </button>
            <button onClick={(ev) => cbOpenTaskModal(ev, "taskCopy")} className="td-btn task-details-sidebar-copy">
                <i className="icon-task-copy"></i>
                Copy
            </button>
            <button onClick={dummy} className="td-btn task-details-sidebar-template">
                <i className="icon-task-make-template"></i>
                Make template
            </button>
            <button onClick={dummy} className="td-btn task-details-sidebar-archive">
                <i className="icon-task-archive"></i>
                Archive
            </button>
            <button onClick={(ev) => cbOpenTaskModal(ev, "taskShare")} className="td-btn task-details-sidebar-share">
                <i className="icon-task-share"></i>
                Share
            </button>
        </div>
    </aside>
}
