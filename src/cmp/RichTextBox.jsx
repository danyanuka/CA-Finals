import { useEffect, useState } from "react";
import { Editor, EditorState, convertFromRaw, convertToRaw } from 'draft-js';


export function RichTextBox({ rawData, isOpen, onSaveData }) {

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
    console.log("whyyyy")
    console.log(editorState.getCurrentContent())
    console.log(convertToRaw(editorState.getCurrentContent()))
    console.log(JSON.stringify(convertToRaw(editorState.getCurrentContent())))

    return <div>
        <Editor editorState={editorState} onChange={setEditorState} />
    </div>
}