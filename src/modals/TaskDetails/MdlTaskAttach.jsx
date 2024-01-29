import { closeModal } from "../../store/actions/app.actions.js";
import { RootModalHeader } from "../RootModalHeader";
import { uploadService } from "../../services/upload.service.js"
import { useEffect, useState } from "react";
import { groupService } from "../../services/group.service.js";
import { useDispatch } from "react-redux";

export function MdlTaskAttach({ board, task, group }) {
    const [data, setData] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!data) return
        if (task.attachments) {
            task.attachments.push(data)
        } else {
            const attachments = [data]
            task.attachments = attachments
        }
        dispatch(closeModal());
        groupService.updateTask(task, group.id, board);
    }, [data?.imgUrl])

    async function uploadImg(ev) {
        const { name } = ev.target.files[0];
        const { secure_url } = await uploadService.uploadImg(ev)
        setData({ imgUrl: secure_url, addedAt: Date.now(), title: name })
    }

    function uploadLink(ev) {
        setData(prevData => ({ ...prevData, linkUrl: ev.target.value, addedAt: Date.now() }))
    }

    function uploadText(ev) {
        setData(prevData => ({ ...prevData, title: ev.target.value }))

    }

    async function handleInset(ev = null) {
        if (ev) ev.preventDefault()
        if (!data) return
        try {
            if (task.attachments) {
                task.attachments.push(data)
            } else {
                const attachments = [data]
                task.attachments = attachments
            }
            dispatch(closeModal());
            groupService.updateTask(task, group.id, board);

        } catch (err) {
            console.log("Had issues loading board", err);
        }

    }

    function handleCancel() {
        dispatch(closeModal());
        setData()
    }

    return (
        <div className="mdl-task-attach">
            <RootModalHeader title="Attach" />
            <form style={{ padding: "12px" }} onSubmit={handleInset}>
                <h4 className="attach-mdl-title">
                    Attach a file from your computer
                </h4>


                <label className='add-file transparent-btn-black'>
                    Choose a file
                    <input type="file" onChange={uploadImg} accept="img/*" id="imgUpload" />
                </label>

                <div className="attach-mdl-link">
                    <span className="attach-mdl-title">Search or paste a link</span>
                    <input className="attach-input" type="text" name="attach-link" placeholder="Find recent links or past a new link" onChange={uploadLink} />
                </div>

                <div className="attach-mdl-text">
                    <span className="attach-mdl-title">Display text (optional)</span>
                    <input className="attach-input" type="text" name="attach-text" placeholder="Text to display" onChange={uploadText} />
                </div>

                <div className="buttons">
                    <button className="cancel-btn transparent-btn-black" onClick={handleCancel}>Cancel</button>
                    <button className="insert-btn">Insert</button>
                </div>
            </form>
        </div>
    );
}
