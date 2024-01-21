import { useEffect, useState } from "react";

import {TaskDetailsBriefMembers} from "./TaskDetailsBriefMembers"


export function TaskDetailsBriefItems({ board, task, cbOnUpdateTask, cbOpenTaskModal }) {

    return <div className="td-section task-details-brief-items">
        {   // Members
            task.memberIds?.length !== 0 &&
            <TaskDetailsBriefMembers boardMembers={board.members} taskMembers={task.memberIds} cbOpenTaskModal={cbOpenTaskModal} />
        }
        {   // Labels
            // task.memeberIds.length !== 0 &&
            <div className="td-labels brief-item">
                <h3>Labels</h3>
                <div className="brief-data">

                </div>
            </div>
        }
        {   // Notifications
            // task.memeberIds.length !== 0 &&
            <div className="td-notifications brief-item">
                <h3>Notifications</h3>
                <div className="brief-data">

                </div>
            </div>
        }
        {   // Dates
            // task.memeberIds.length !== 0 &&
            <div className="td-date brief-item">
                <h3>Dates / Due Date</h3>
                <div className="brief-data">

                </div>
            </div>
        }
    </div>
}