import { useEffect, useState, useRef } from "react";

import { RichTextBox } from "/src/cmp/RichTextBox"


export function TaskDetailsDescription({ task, cbOnUpdateTask }) {

    const [isTextboxOpen, setIsTextboxOpen] = useState(false)
    
    // const textboxRef = useRef()

    // useEffect(() => {
    //     if (textboxRef.current) {
    //         console.log("mmm")
    //         console.log(textboxRef.current.focus)
    //         textboxRef.current.focus()
    //       }
    // }, [textboxRef.current])

    function saveRawDataInTask(task, rawData) {
        task.description = rawData
        cbOnUpdateTask(task)
    }

    function onToggleOpen() {
        setIsTextboxOpen((prevIsOpen) => !prevIsOpen)
    }

    // function onLoadRichTextBox(ev) {
    //     console.log("mmm")
    //     console.log(ev.focus())
    //     console.log(ev.target)
    //     onLoadedData={onLoadRichTextBox} 
    // }


    let textBox
    if (task.description || isTextboxOpen) {
        textBox = <div onBlur={onToggleOpen} >
            <RichTextBox
                rawData={task.description}
                isOpen={isTextboxOpen}
                onSaveData={(rawData) => saveRawDataInTask(task, rawData)} />
        </div>
    } else {
        textBox = <div className="text-box-placeholder transparent-btn-neutral" onClick={onToggleOpen}>
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