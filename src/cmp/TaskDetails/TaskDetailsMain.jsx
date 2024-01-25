import { useEffect, useState } from "react";

import { TaskDetailsBriefItems } from "./TaskDetailsBrief/TaskDetailsBriefItems";
import { TaskDetailsDescription } from "./TaskDetailsDescription";
import { TaskDetailsAttachments } from "./TaskDetailsAttachments";
import { TaskDetailsChecklists } from "./TaskDetailsChecklists";
import { TaskDetailsActivity } from "./TaskDetailsActivity";
import { TaskDetailsComments } from "./TaskDetailsComments";


export function TaskDetailsMain({ board, task, cbOnUpdateTask, cbOpenTaskModal }) {

    const [currDescription, setCurrDescription] = useState()

    return <div className="task-details-main">
        <TaskDetailsBriefItems board={board} task={task} cbOnUpdateTask={cbOnUpdateTask} cbOpenTaskModal={cbOpenTaskModal} />
        <TaskDetailsDescription />
        <TaskDetailsAttachments />
        <TaskDetailsChecklists />
        <TaskDetailsActivity />
        <TaskDetailsComments />
    </div>
}
