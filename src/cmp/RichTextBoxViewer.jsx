import { useEffect, useState } from "react";
import { Editor, EditorState, convertFromRaw, convertToRaw } from 'draft-js';


export function RichTextBoxViewer({ rawData }) {

    let lastStateContent
    try {
        lastStateContent = convertFromRaw(JSON.parse(rawData))
    } catch {
        console.log("Not a valid rawData: ", rawData)
        lastStateContent = EditorState.createEmpty().getCurrentContent()
    }
    const editorState = EditorState.createWithContent(lastStateContent)

    return <div className="rich-text-box-viewer" >
        <Editor editorState={editorState} onChange={() => ""} />
    </div>

}