import { useEffect, useState } from "react";
import { Editor, EditorState } from 'draft-js';


export function TaskDetailsDescription({ }) {

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
    console.log(editorState)

    return <div className="td-section td-description">
        <div className="td-section-icon">
            <i className="icon-task-description"></i>
        </div>
        <div>
            <h2>Description</h2>
            <Editor editorState={editorState} onChange={setEditorState} />
        </div>
    </div>
}