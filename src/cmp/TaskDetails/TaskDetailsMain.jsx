import { useEffect, useState } from "react";

import { TaskDetailsBriefItems } from "./TaskDetailsBrief/TaskDetailsBriefItems";
import { TaskDetailsDescription } from "./TaskDetailsDescription";
import { TaskDetailsAttachments } from "./TaskDetailsAttachments";
import { TaskDetailsChecklist } from "./TaskDetailsChecklist";
import { TaskDetailsActivity } from "./TaskDetailsActivity";


export function TaskDetailsMain({ board, task, cbOnUpdateTask, cbOpenTaskModal, group }) {

    const [currDescription, setCurrDescription] = useState()

    return <div className="task-details-main">
        <TaskDetailsBriefItems board={board} task={task} cbOnUpdateTask={cbOnUpdateTask} cbOpenTaskModal={cbOpenTaskModal} />
        <TaskDetailsDescription task={task} cbOnUpdateTask={cbOnUpdateTask} />

        {
            task?.attachment &&
            <TaskDetailsAttachments task={task} group={group} />
        }
        {
            task?.checklists &&
            task.checklists.map((cl) => <TaskDetailsChecklist checklist={cl} task={task} cbOnUpdateTask={cbOnUpdateTask} />)
        }
        <TaskDetailsActivity />
    </div>
}
