import { TaskList } from "./TaskList"

export function GroupPreview({ group }) {

    return (
        <div className="group-preview">
            <TaskList group={group} />
        </div>
    )
}
