
import { useRef } from "react";

export function TaskDetailsHeader({ task, groupName, cbOnUpdateTask, cbOpenTaskModal }) {

    const headerRef = useRef(task.title);

    function headerOnBlur(ev) {
        task.title = ev.target.value
        cbOnUpdateTask(task)
    }

    function headerOnChange(ev) {
        headerRef.current = ev.target.value
    }

    function handleKeyDown(ev) {
        if (ev.key === 'Enter') {
            ev.target.blur()
        }
    }

    return <header className="td-section task-details-header">
        <div className="td-section-icon">
            <i className="icon-task-header"></i>
        </div>
        <textarea defaultValue={headerRef.current}
            onBlur={headerOnBlur}
            onChange={headerOnChange}
            onKeyDown={handleKeyDown}
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck="false">
        </textarea>
        <span>
            in list&nbsp;
            <a onClick={(ev) => cbOpenTaskModal(ev, "taskMove")}>{groupName}</a>
            <i className="icon-watch-task"></i>
        </span>
    </header>
}
