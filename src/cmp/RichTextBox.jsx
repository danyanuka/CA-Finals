import { useEffect, useState } from "react";
import { Editor, EditorState, convertFromRaw, convertToRaw } from 'draft-js';


export function RichTextBox({ rawData, isOpen, onSaveData }) {

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
    const [isFocus, setIsFocus] = useState(true);

    // console.log("START - rich text box")
    // console.log(editorState.getCurrentContent())
    // console.log(convertToRaw(editorState.getCurrentContent()))
    // console.log(JSON.stringify(convertToRaw(editorState.getCurrentContent())))
    // console.log("END - rich text box")

    function dummy() {
        console.log("dummy")
    }

    return <div className="rich-text-box" onClick={() => setIsFocus(false)}>

        <div className={"editor-wrapper" + (isFocus ? " blue-wrapper" : "")} onClick={(ev) => ev.stopPropagation()}>
            <div className="editor-header">
                <button className="transparent-btn-black" onClick={dummy}>
                    <i className="icon-text-bold"></i>
                </button>
                <button className="transparent-btn-black" onClick={dummy}>
                    <i className="icon-text-italic"></i>
                </button>
            </div>
            <div className="editor-main" onClick={() => setIsFocus(true)}>
                <Editor editorState={editorState} onChange={setEditorState} />
            </div>
        </div>
        <button className="basic-btn-blue save-btn">Save</button>
        <button className="transparent-btn-black cancel-btn">Cancel</button>
    </div>
}