import { useEffect, useState } from "react";

import { TaskDetailsBriefMembers } from "./TaskDetailsBriefMembers"
import { TaskDetailsBriefLabels } from "./TaskDetailsBriefLabels"
import { TaskDetailsBriefNotify } from "./TaskDetailsBriefNotify"
import { TaskDetailsBriefDates } from "./TaskDetailsBriefDates"


export function TaskDetailsBriefItems({ board, task, cbOnUpdateTask, cbOpenTaskModal }) {

    console.log("mm: ", task)

    return <div className="td-section task-details-brief-items">
        {   // Members
            task?.memberIds?.length > 0 &&
            <TaskDetailsBriefMembers boardMembers={board.members} taskMembers={task.memberIds} cbOpenTaskModal={cbOpenTaskModal} />
        }
        {   // Labels
            task?.labelIds?.length > 0 &&
            <TaskDetailsBriefLabels boardLabels={board.labels} taskLabels={task.labelIds} cbOpenTaskModal={cbOpenTaskModal} />
        }

        <TaskDetailsBriefNotify boardId={board._id} taskId={task.id} />

        {   // Dates
            task?.memeberIds &&
            <TaskDetailsBriefDates />
        }
    </div>
}