
export function TaskDetailsAttachments({ task }) {
    console.log(task);
    return <div className="td-section td-attachments">
        <div className="td-section-icon">
            <i className="icon-task-trello-attach"></i>
        </div>
        <div>
            <h2>Attachments</h2>
            <div className="attachments-data">
                {task.attachment.map((attach) => {
                    <img src={attach.imgUrl} alt="" />
                    { console.log(attach) }
                })}
            </div>
        </div>
    </div>
}