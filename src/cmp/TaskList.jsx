import { TaskPreview } from "./TaskPreview"


export function TaskList({ group }) {
    const tasks = group?.tasks

    return (
        <ul className="task-list">
            {
                tasks?.map(task => <li key={task.id}>
                    <TaskPreview task={task} />

                </li>)
            }
        </ul>
    )
}
