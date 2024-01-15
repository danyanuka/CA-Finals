export function TaskDetailsSideBar() {
    return <aside className="task-details-sidebar">
        <div className="task-details-sidebar-prop">
            <h3 className="sidebar-header">Add to card</h3>
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
            <button className="task-details-btn task-details-sidebar-cover">
                <i className="icon-task-cover"></i>
                Cover
            </button>
        </div>
        <div className="task-details-sidebar-actions">
            <h3 className="sidebar-header">Actions</h3>
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
}
