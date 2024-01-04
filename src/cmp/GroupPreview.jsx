import { TaskList } from "./TaskList"

export function GroupPreview({ group, onAddTask, onEditGroup }) {

    return (
        <div className="group-preview">
            <TaskList group={group} onAddTask={onAddTask} onEditGroup={onEditGroup} />
        </div>
    )
}
