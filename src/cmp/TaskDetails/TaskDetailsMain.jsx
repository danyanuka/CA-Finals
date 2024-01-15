export function TaskDetailsMain() {
    return <div className="task-details-main">
        <div className="td-section td-brief-items">
            <div className="td-members">
                <h3>Members</h3>
                {/* <TaskMembersModal /> */}
            </div>
            <div className="td-labels">
                <h3>Labels</h3>
            </div>
            <div className="td-notifications">
                <h3>Notifications</h3>
            </div>
            <div className="td-date">
                <h3>Dates / Due Date</h3>
            </div>
        </div>
        <div className="td-section td-description">
            <i clasName="td-section-icon"></i>
            <div>
                <h2>Description</h2>
            </div>
        </div>
        <div className="td-section td-attachments">
            <i clasName="td-section-icon"></i>
            <div>
                <h2>Trello attachments</h2>
            </div>
        </div>
        <div className="td-section td-checklist">
            <i clasName="td-section-icon"></i>
            <div>
                <h2>Checklists</h2>
            </div>
        </div>
        <div className="td-section td-activity">
            <i clasName="td-section-icon"></i>
            <div>
                <h2>Activity</h2>
            </div>
        </div>
        <div className="td-section td-comments">
            <i clasName="td-section-icon"></i>
            <div>
                <h2>Comments</h2>
            </div>
        </div>
    </div>
}
