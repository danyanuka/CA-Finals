import { useEffect, useState } from "react";

import { TaskDetailsBriefMembers } from "./TaskDetailsBriefMembers"
import { TaskDetailsBriefLabels } from "./TaskDetailsBriefLabels"
import { TaskDetailsBriefNotify } from "./TaskDetailsBriefNotify"
import { TaskDetailsBriefDates } from "./TaskDetailsBriefDates"


export function TaskDetailsBriefItems({ board, task, cbOnUpdateTask, cbOpenTaskModal }) {

    return <div className="td-section task-details-brief-items">
        {   // Members
            task?.memberIds?.length > 0 &&
            <TaskDetailsBriefMembers boardMembers={board.members} taskMembers={task.memberIds} cbOpenTaskModal={cbOpenTaskModal} />
        }
        {   // Labels
            task?.labelIds?.length > 0 &&
            <TaskDetailsBriefLabels boardLabels={board.labels} taskLabels={task.labelIds} cbOpenTaskModal={cbOpenTaskModal} />
        }

        <TaskDetailsBriefNotify />

        {   // Dates
            task?.dueDate &&
            <TaskDetailsBriefDates task={task} cbOnUpdateTask={cbOnUpdateTask} cbOpenTaskModal={cbOpenTaskModal} />
        }
    </div>
}