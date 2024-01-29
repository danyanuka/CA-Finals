import { useSelector } from "react-redux";
import { RootModalHeader } from "../RootModalHeader"
import { groupService } from "../../services/group.service";
import { closeModal } from "../../store/actions/app.actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

export function EditModal({ index, task, groupId }) {
    const [attach, setAttach] = useState(task.attachments[index])
    const board = useSelector((storeState) => storeState.boardModule.curBoard);
    const dispatch = useDispatch()

    function onUpdate() {
        task.attachments.splice(index, 1, attach)
        groupService.updateTask(task, groupId, board);
        dispatch(closeModal());
    }

    function handleChange(ev) {
        const field = ev.target.name
        const value = ev.target.value
        setAttach({ ...attach, [field]: value })
    }


    return (
        <>
            <RootModalHeader title="Edit attachment" />
            <div style={{ padding: "12px" }}>
                {attach.linkUrl &&
                    <div className="edit-attach-input">
                        <p>Link</p>
                        <input type="text" name="linkUrl" value={attach.linkUrl} onChange={handleChange} />
                    </div>
                }
                <div className="edit-attach-input">
                    <p>Link name</p>
                    <input type="text" name="title" value={attach.title} onChange={handleChange} />
                </div>
                <button className="btn-update-attach" onClick={onUpdate}>Update</button>
            </div>
        </>
    )
}