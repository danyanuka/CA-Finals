
import { timeService } from "/src/services/time.service";

export function TaskDetailsBriefDates({ task, cbOnUpdateTask, cbOpenTaskModal }) {

    function getDateString(task) {
        let dateString = ""
        if (task.startDate) {
            dateString += timeService.getDate(task.startDate)
            dateString += " - "
        }
        dateString += timeService.getDate(task.dueDate)
        dateString += " at "
        dateString += timeService.getTime(task.dueDate)
        return dateString
    }

    function getStatusString(task) {
        const timeDiff = (Date.now() - task.dueDate) / 1000
        if (task?.isDone === true) {
            return "Complete"
        } else if (timeDiff < 0) {
            return "Overdue"
        } else if (timeDiff < 24 * 60 * 60) {
            return "Due soon"
        }
        return ""
    }

    function getStatusClassName(status) {
        // TODO - meitar ////////////////////////////////////////////////
        switch (status) {
            case "Complete":
                return "status-complete"
            case "Due soon":
                return "status-duesoon"
            case "Overdue":
                return "status-overdue"
            default:
                return ""
        }
    }

    function toggleIsTaskDone(task) {
        let newIsDone
        if (task?.isDone === true) {
            newIsDone = false
        } else {
            newIsDone = true
        }
        const newTask = structuredClone(task)
        newTask.isDone = newIsDone
        cbOnUpdateTask(newTask)
    }

    const statusString = getStatusString(task)

    return <div className="td-date brief-item">
        <h3>{task?.startDate ? "Dates" : "Due Date"}</h3>
        <div className="brief-data">
            <div className="btn-done-wrapper">
                <button className={task?.isDone ? "is-done" : "not-done"} onClick={() => toggleIsTaskDone(task)}>
                    <div className="v-wrapper">
                        <i className="icon-task-check-mark-dyn"></i>
                    </div>
                </button>
            </div>
            <button className="transparent-btn-neutral main-btn" onClick={(ev) => cbOpenTaskModal(ev, "taskDates")}>
                {getDateString(task)}
                {
                    statusString &&
                    <div className={`status-default ${getStatusClassName(statusString)}`}>
                        {statusString}
                    </div>
                }
                <i className="icon-task-down"></i>
            </button>
        </div>
    </div>
}