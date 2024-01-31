import { useEffect } from "react"

import { utilService } from "/src/services/util.service";

export function TaskDetailsCover({ taskStyle, cbOpenTaskModal, cbSetIsDarkCover }) {


    useEffect(() => {
        async function isDark() {
            let isDarkCover
            if (taskStyle?.backgroundColor) {
                // utilService.isDarkImg
            } else {
                // await utilService.isDarkImg
            }
            if (isDarkCover) cbSetIsDarkCover(true)
        }
        isDark()
    }, [taskStyle])

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