import { useSelector } from "react-redux";
import { RootModalHeader } from "../RootModalHeader"
import { groupService } from "../../services/group.service";
import { closeModal } from "../../store/actions/app.actions";
import { useDispatch } from "react-redux";

export function DeleteModal({ index, task, groupId }) {
    const board = useSelector((storeState) => storeState.boardModule.curBoard);
    const dispatch = useDispatch()

    function onDelete() {
        task.attachments.splice(index, 1)
        groupService.updateTask(task, groupId, board);
        dispatch(closeModal());
    }
    return (
        <>
            <RootModalHeader title="Delete attachment?" />
            <div style={{ padding: "12px" }}>
                <p className="worn-delete">Deleting an attachment is permanent. There is no undo.</p>
                <button className="btn-delete-attach" onClick={onDelete}>Delete</button>
            </div>
        </>
    )
}