
export function TaskDetailsCover({ taskStyle, cbOpenTaskModal }) {
    
    const styleProp = {}
    if (taskStyle?.backgroundColor) {
        styleProp.backgroundColor = taskStyle.backgroundColor
    } else {
        styleProp.backgroundImage = taskStyle.backgroundImage
    }

    return <div className="task-details-cover" style={styleProp}>
        <button className="transparent-btn-black task-details-cover-btn" onClick={(ev) => cbOpenTaskModal(ev, "taskCover")}>
            <i className="icon-task-header-cover"></i>
            &nbsp;Cover
        </button>
    </div>
}