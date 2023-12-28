import { TaskPreview } from "./TaskPreview"


export function TaskList({ group }) {
    const tasks = group?.tasks

    return (
        <ul className="task-list">
            <h4>{group.title}</h4>
            {
                tasks?.map(task => <li className="task-item" key={task.id}>
                    <TaskPreview task={task} />

                </li>)
            }
        </ul>
    )
}
