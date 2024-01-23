import { useEffect, useState } from "react";

import {TaskDetailsBriefMembers} from "./TaskDetailsBriefMembers"
import {TaskDetailsBriefLabels} from "./TaskDetailsBriefLabels"
import {TaskDetailsBriefNotify} from "./TaskDetailsBriefNotify"


export function TaskDetailsBriefItems({ board, task, cbOnUpdateTask, cbOpenTaskModal }) {

    return <div className="td-section task-details-brief-items">
        {   // Members
            task.memberIds?.length !== 0 &&
            <TaskDetailsBriefMembers boardMembers={board.members} taskMembers={task.memberIds} cbOpenTaskModal={cbOpenTaskModal} />
        }
        {   // Labels
            task.labelIds?.length !== 0 &&
            <TaskDetailsBriefLabels boardLabels={board.labels} taskLabels={task.labelIds} cbOpenTaskModal={cbOpenTaskModal} />
        }

        <TaskDetailsBriefNotify boardId={board._id} taskId={task.id} />

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