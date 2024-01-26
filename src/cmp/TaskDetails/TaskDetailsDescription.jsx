import { useEffect, useState, useRef } from "react";

import { RichTextBox } from "/src/cmp/RichTextBox"
import { RichTextBoxViewer } from "/src/cmp/RichTextBoxViewer"


export function TaskDetailsDescription({ task, cbOnUpdateTask }) {

    const [isEdit, setIsEdit] = useState(false)

    function saveRawDataInTask(task, rawData) {
        task.description = rawData
        cbOnUpdateTask(task)
        setIsEdit(false)
    }


    let textBox
    if (isEdit) {
        textBox = <RichTextBox
            rawData={task?.description}
            onSaveData={(rawData) => saveRawDataInTask(task, rawData)}
            isEdit={isEdit} />
    } else if (task?.description) {
        textBox = <div onClick={() => setIsEdit(true)}>
            <RichTextBoxViewer rawData={task.description} />
        </div>
    } else {
        textBox = <div className="text-box-placeholder transparent-btn-neutral" onClick={() => setIsEdit(true)}>
            Add a more detailed description...
        </div>
    }

    return <div className="td-section td-description" >
        <div className="td-section-icon">
            <i className="icon-task-description"></i>
        </div>
        <div>
            <h2>Description</h2>
            {textBox}
        </div>
    </div>
}