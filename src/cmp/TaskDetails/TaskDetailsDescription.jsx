import { useEffect, useState } from "react";

import { RichTextBox } from "/src/cmp/RichTextBox"


export function TaskDetailsDescription({ task, cbOnUpdateTask }) {

    const [isTextboxOpen, setIsTextboxOpen] = useState(false)

    function saveRawDataInTask(task, rawData) {
        task.description = rawData
        cbOnUpdateTask(task)
    }

    function onToggleOpen() {
        setIsTextboxOpen((prevIsOpen) => !prevIsOpen)
    }


    let textBox
    if (task.description || isTextboxOpen) {
        textBox = <RichTextBox
            rawData={task.description}
            isOpen={isTextboxOpen}
            onSaveData={(rawData) => saveRawDataInTask(task, rawData)} />
    } else {
        textBox = <div className="text-box-placeholder transparent-btn-neutral">
            Add a more detailed description...
        </div>
    }

    return <div className="td-section td-description">
        <div className="td-section-icon">
            <i className="icon-task-description"></i>
        </div>
        <div>
            <h2>Description</h2>
            <div onClick={onToggleOpen}>
                {textBox}
            </div>
        </div>
    </div>
}