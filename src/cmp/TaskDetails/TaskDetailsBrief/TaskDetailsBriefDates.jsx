

export function TaskDetailsBriefDates({ task, cbOnUpdateTask, cbOpenTaskModal }) {

    function getDateString(task) {

    }

    function getStatusString(task) {

    }

    function getStatusClassName(status) {
        switch (status) {
            case "Complete":
                return "class-1"
            case "":
                return "class-2"
            default:
                return "empty"
        }
    }

    const statusString = getStatusString(task)

    return <div className="td-date brief-item">
        <h3>{task.startDate ? "Dates" : "Due Date"}</h3>
        <div className="brief-data">
            <button className={task?.isDone ? "" : ""}></button>
            <button className="transparent-btn-neutral">
                {getDateString(task)}
                {
                    statusString &&
                    <div className={getStatusClassName(statusString)}>
                        {statusString}
                    </div>
                }
                <i className="icon-task-down"></i>
            </button>
        </div>
    </div>
}