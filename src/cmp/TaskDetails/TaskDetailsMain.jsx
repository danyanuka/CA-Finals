import { useEffect, useState } from "react";

import { TaskDetailsBriefItems} from "./TaskDetailsBrief/TaskDetailsBriefItems";


export function TaskDetailsMain({ board, task, cbOnUpdateTask, cbOpenTaskModal }) {

    const [currDescription, setCurrDescription] = useState()

    return <div className="task-details-main">
        <TaskDetailsBriefItems board={board} task={task} cbOnUpdateTask={cbOnUpdateTask} cbOpenTaskModal={cbOpenTaskModal} />
        <div className="td-section td-description">
            <div className="td-section-icon">
                <i className=""></i>
            </div>
            <div>
                <h2>Description</h2>
                { }
            </div>
        </div>
        <div className="td-section td-attachments">
            <div className="td-section-icon">
                <i className=""></i>
            </div>
            <div>
                <h2>Trello attachments</h2>
            </div>
        </div>
        <div className="td-section td-checklist">
            <div className="td-section-icon">
                <i className=""></i>
            </div>
            <div>
                <h2>Checklists</h2>
            </div>
        </div>
        <div className="td-section td-activity">
            <div className="td-section-icon">
                <i className=""></i>
            </div>
            <div>
                <h2>Activity</h2>
            </div>
        </div>
        <div className="td-section td-comments">
            <div className="td-section-icon">
                <i className=""></i>
            </div>
            <div>
                <h2>Comments</h2>
            </div>
        </div>
    </div>
}
