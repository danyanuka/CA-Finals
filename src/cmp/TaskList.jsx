import { TaskPreview } from "./TaskPreview"


export function TaskList({ group }) {
    const tasks = group?.tasks

    return (
        <ul className="task-list">
            <div className="group-header">
                <h4>{group.title}</h4>
                <i className="icon-show-options"></i>
            </div>
            {
                tasks?.map(task => <li className="task-item" key={task.id}>
                    <TaskPreview task={task} />

                </li>)
            }

            <div className="group-footer">
                <button>Add a cart</button>
                <button title="create from template">icon</button>
            </div>
        </ul>
    )
}
