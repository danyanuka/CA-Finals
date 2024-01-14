export function TaskDetailsMain() {
    return <div className="task-details-main">
        <div className="task-details-brief-items">
            <div className="task-details-members">
                <h3>Members</h3>
                {/* <TaskMembersModal /> */}
            </div>
            <div className="task-details-labels">
                <h3>Labels</h3>
            </div>
            <div className="task-details-notifications">
                <h3>Notifications</h3>
            </div>
            <div className="task-details-date">
                <h3>Dates / Due Date</h3>
            </div>
        </div>
        <div className="task-details-description">
            <h2>Description</h2>
        </div>
        <div className="task-details-attachments">
            <h2>Trello attachments</h2>
        </div>
        <div className="task-details-checklists">
            <h2>Checklists</h2>
        </div>
        <div className="task-details-activities">
            <h2>Activity</h2>
        </div>
        <div className="task-details-comments">
            <h2>Comments</h2>
        </div>
    </div>
}
