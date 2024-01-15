export function TaskDetailsHeader({ taskName, groupName }) {
    return <header className="task-details-header">
        <i className="icon-task-details-header"></i>
        <textarea autocapitalize="off" autocorrect="off" spellcheck="false">
            {taskName}
        </textarea>
        <span>
            in list&nbsp;
            <a>{groupName}</a>
            <i className="icon-watch-task"></i>
        </span>
    </header>
}
