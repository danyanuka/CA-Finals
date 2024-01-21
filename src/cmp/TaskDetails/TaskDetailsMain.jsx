import { useEffect, useState } from "react";


export function TaskDetailsMain() {

    const [currDescription, setCurrDescription] = useState()

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
            <div clasName="td-section-icon">
                <i clasName=""></i>
            </div>
            <div>
                <h2>Description</h2>
                {}
            </div>
        </div>
        <div className="td-section td-attachments">
            <div clasName="td-section-icon">
                <i clasName=""></i>
            </div>
            <div>
                <h2>Trello attachments</h2>
            </div>
        </div>
        <div className="td-section td-checklist">
            <div clasName="td-section-icon">
                <i clasName=""></i>
            </div>
            <div>
                <h2>Checklists</h2>
            </div>
        </div>
        <div className="td-section td-activity">
            <div clasName="td-section-icon">
                <i clasName=""></i>
            </div>
            <div>
                <h2>Activity</h2>
            </div>
        </div>
        <div className="td-section td-comments">
            <div clasName="td-section-icon">
                <i clasName=""></i>
            </div>
            <div>
                <h2>Comments</h2>
            </div>
        </div>
    </div>
}
