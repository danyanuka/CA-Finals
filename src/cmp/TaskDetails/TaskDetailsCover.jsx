import { useEffect } from "react"

import { utilService } from "/src/services/util.service";

export function TaskDetailsCover({ taskStyle, cbOpenTaskModal, isDarkCover, cbSetIsDarkCover }) {


    useEffect(() => {
        async function checkIsDark() {
            let isDark
            if (taskStyle?.backgroundColor) {
                isDark = await utilService.isDarkColor(taskStyle.backgroundColor)
            } else {
                isDark = await utilService.isDarkImg(taskStyle.backgroundImage)
            }
            cbSetIsDarkCover(isDark)
        }
        checkIsDark()
    }, [taskStyle])

    const styleProp = {}
    if (taskStyle?.backgroundColor) {
        styleProp.backgroundColor = taskStyle.backgroundColor
    } else {
        styleProp.backgroundImage = taskStyle.backgroundImage
    }

    return <div className={"task-details-cover" + (isDarkCover ? " dark-theme" : "")} style={styleProp}>
        <button className="transparent-btn-black task-details-cover-btn" onClick={(ev) => cbOpenTaskModal(ev, "taskCover")}>
            <i className="icon-task-header-cover"></i>
            &nbsp;Cover
        </button>
    </div>
}