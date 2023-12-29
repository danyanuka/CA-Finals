

export function TaskPreview({ task }) {
    return (
        <div className="task-preview">
            <div className="task-header">
                <button className="edit-task-header">edit</button>
            </div>
            <div className="task-body">
                <p>{task.title}</p>
            </div>
            <div className="task-actions">
            </div>
        </div>
    )
}
