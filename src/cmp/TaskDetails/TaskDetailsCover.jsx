
export function TaskDetailsCover({ bkgColor, cbOpenTaskModal }) {
    return <div className="task-details-cover" style={{ backgroundColor: bkgColor }}>
        <button className="transparent-btn-black task-details-cover-btn" onClick={(ev) => cbOpenTaskModal(ev, "taskCover")}>
            <i className="icon-task-header-cover"></i>
            &nbsp;Cover
        </button>
    </div>
}