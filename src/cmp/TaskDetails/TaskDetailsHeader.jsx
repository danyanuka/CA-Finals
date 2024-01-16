export function TaskDetailsHeader({ taskName, groupName }) {
    return <header className="td-section task-details-header">
        <div className="td-section-icon">
            <i className="icon-task-header"></i>
        </div>
        <textarea defaultValue={taskName} autocapitalize="off" autocorrect="off" spellcheck="false">
        </textarea>
        <span>
            in list&nbsp;
            <a>{groupName}</a>
            <i className="icon-watch-task"></i>
        </span>
    </header>
}
