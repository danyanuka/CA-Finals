import { TaskList } from "./TaskList"

export function GroupPreview({ index, group, onAddTask, onEditGroup }) {

    return (
        <div className="group-preview">
            <TaskList index={index} key={group.id} group={group} tasks={group.tasks} onAddTask={onAddTask} onEditGroup={onEditGroup} />

        </div>
    )
}
