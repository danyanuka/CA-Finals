
import { useRef, useEffect } from "react";

export function TaskDetailsHeader({ task, groupName, cbOnUpdateTask, cbOpenTaskModal }) {

    const textAreaRef = useRef()

    useEffect(() => {
        textAreaRef.current.value = task.title
    }, [task])

    function headerOnBlur(ev) {
        task.title = ev.target.value
        cbOnUpdateTask(task.title)
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
        <textarea ref={textAreaRef}
            defaultValue={task.title}
            onBlur={headerOnBlur}
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
