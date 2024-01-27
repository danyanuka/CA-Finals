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
        const currentContent = edState.getCurrentContent()
        if (!currentContent.getPlainText()) return null
        return JSON.stringify(convertToRaw(edState.getCurrentContent()))
    }

    const toolbarProps = {
        options: ['blockType', 'inline', 'list', 'link', 'image'],
        blockType: {
            options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
            inDropdown: true,
            className: "rtb-tools-blocktypes",
            dropdownClassName: "blocktypes-dropdown",
        },
        inline: {
            options: ['bold', 'italic'],
            className: "rtb-tools-inline",
            bold: { icon: "/public/icons/text-bold.svg", className: "i-bold" },
            italic: { icon: "/public/icons/text-italic.svg", className: "i-italic" },
        },
        list: {
            options: ['unordered', 'ordered'],
            inDropdown: true,
            className: "rtb-tools-list",
            dropdownClassName: "list-dropdown",
            unordered: { icon: "/public/icons/textbox-uolist.svg", className: "i-uolist" },
            ordered: { className: "i-olist" },
        },
        link: {
            options: ['link'],
            className: "rtb-tools-link",
            showOpenOptionOnHover: false,
            link: { icon: "/public/icons/textbox-link.svg", className: "i-link" },
        },
        image: {
            icon: "/public/icons/textbox-image.svg",
            className: "rtb-tools-image",
            uploadEnabled: false,
            inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
            alt: { present: false, mandatory: false },
            defaultSize: {
                height: 'auto',
                width: 'auto',
            },
        },
    }

    return <div ref={RichTextBoxRef} className="rich-text-box" onClick={() => setIsFocus(false)}>
        <div className={"editor-wrapper" + (isFocus ? " blue-wrapper" : "")} onClick={(ev) => ev.stopPropagation()}>
            <div className="editor-main" onClick={() => setIsFocus(true)}>
                <Editor
                    editorState={editorState}
                    onEditorStateChange={setEditorState}
                    wrapperClassName="rtb-class-wrapper"
                    toolbarClassName="rtb-class-toolbar"
                    editorClassName="rtb-class-editor"
                    toolbar={toolbarProps}
                />
            </div>
        </div>
        <button className="basic-btn-blue save-btn" onClick={() => onSaveData(getRawData(editorState))} >Save</button>
        <button className="transparent-btn-black cancel-btn" onClick={() => onSaveData(origRawData.current)} >Cancel</button>
    </div>
}