import { TaskList } from "./TaskList"

export function GroupPreview({ group, onAddTask }) {

    return (
        <div className="group-preview">
            <TaskList group={group} onAddTask={onAddTask} />
        </div>
    )
}
