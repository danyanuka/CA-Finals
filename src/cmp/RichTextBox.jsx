import { useEffect, useState, useRef } from "react";
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
// import { Editor } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import { useOnClickOutside } from "/src/Hooks/useOnClickOutisde";


export function RichTextBox({ rawData, onSaveData }) {

    const origRawData = useRef(rawData)
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
    const [isFocus, setIsFocus] = useState(true);
    const RichTextBoxRef = useRef()

    useEffect(() => {
        try {
            const lastStateContent = convertFromRaw(JSON.parse(rawData))
            setEditorState(EditorState.createWithContent(lastStateContent))
        } catch {
            console.log("Not a valid rawData: ", rawData)
        }
    }, [rawData])

    // OnClickOutside - Handler will need the current 'editorState' so we can't use the standAlone component.
    useEffect(() => {
        function handleClickOutside(ev) {
            if (RichTextBoxRef.current && !RichTextBoxRef.current.contains(ev.target)) {
                onSaveData(getRawData(editorState))
            }
        }
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [editorState])


    function getRawData(edState) {
        return JSON.stringify(convertToRaw(edState.getCurrentContent()))
    }

    function dummy() {
        console.log("dummy")
    }

    return <div ref={RichTextBoxRef} className="rich-text-box" onClick={() => setIsFocus(false)}>
        <div className={"editor-wrapper" + (isFocus ? " blue-wrapper" : "")} onClick={(ev) => ev.stopPropagation()}>
            {/* <div className="editor-header">
                <button className="transparent-btn-black" onClick={dummy}>
                    <i className="icon-text-bold"></i>
                </button>
                <button className="transparent-btn-black" onClick={dummy}>
                    <i className="icon-text-italic"></i>
                </button>
            </div> */}
            <div className="editor-main" onClick={() => setIsFocus(true)}>
                <Editor
                    editorState={editorState}
                    onEditorStateChange={setEditorState}
                    wrapperClassName="rtb-class-wrapper"
                    toolbarClassName="rtb-class-toolbar"
                    editorClassName="rtb-class-editor"
                />
            </div>
        </div>
        <button className="basic-btn-blue save-btn" onClick={() => onSaveData(getRawData(editorState))} >Save</button>
        <button className="transparent-btn-black cancel-btn" onClick={() => onSaveData(origRawData.current)} >Cancel</button>
    </div>
}