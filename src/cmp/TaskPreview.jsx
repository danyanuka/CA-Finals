

export function TaskPreview({ task }) {
    let date = new Date(task.dueDate).toString();
    date = date.split(" ")

    return (
        <div className="task-preview">
            <div className="task-header">
                <button className="edit-task-header"><li className="icon-edit"></li></button>
            </div>
            <div className="task-body">
                <p>{task.title}</p>
            </div>
            <div className="task-actions">
                <div className="task-icons">
                    {task.description &&
                        <i className="icon-description" title="This card has a description"></i>
                    }

                    {task.comments &&
                        <div className="icon-with-counts">
                            <i className="icon-comments" title="Comments"></i>
                            <span>{task.comments.length + 1}</span>
                        </div>
                    }

                    {task.attachment &&
                        <div className="icon-with-counts">
                            <i className="icon-task-attachments" title="Attachments"></i>
                            <span>{task.comments.length + 1}</span>
                        </div>
                    }
                    {task.checklists &&
                        <div className="icon-with-counts">
                            <i className="icon-checklists" title="Checklists"></i>
                            {/* <span>{task.checklists.todos?.length + 1}</span> */}
                        </div>
                    }

                    {task.dueDate < Date.now() &&
                        <div className="due-date">
                            <i className="icon-clock-alert" title="Checklists"></i>
                            <span>{date[1]} {date[2]} {date[3]}</span>
                        </div>
                    }
                </div>
                {task.memberIds &&
                    <div className="members">
                        <i className="icon-member-gray" title="User name"></i>
                    </div>}
            </div>
        </div>
    )
}
