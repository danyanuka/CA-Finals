import { useDispatch } from "react-redux";
import { openModal } from "../../store/actions/app.actions.js";
import { Link } from "react-router-dom";
import { utilService } from "../../services/util.service.js";
import { useSelector } from "react-redux";

export function TaskDetailsAttachments({ task, group }) {
    const board = useSelector((storeState) => storeState.boardModule.curBoard);

    const dispatch = useDispatch();

    function handleDelete(ev, index) {
        const modalProps = {
            index, task, groupId: group.id,

        }
        dispatch(openModal("DeleteModal", ev.target, modalProps));
    }

    function handleAddTaskModal(ev) {
        const modalProps = {
            board, task, group,
        }
        dispatch(openModal("taskAttach", ev.target, modalProps));
    }

    return <div className="td-section td-attachments">
        <div className="header">

            <div className="td-section-icon">
                <i className="icon-task-trello-attach"></i>
            </div>

            <h2>Attachments</h2>

            <div>
                <button className="add-attach  transparent-btn-black" onClick={(ev) => handleAddTaskModal(ev)}>Add</button>
            </div>
        </div>
        <div className="attachments-data">

            {task.attachment.map((attach, i) => {
                return (
                    <div className="attach" key={i}>
                        {/* {console.log(i)} */}
                        <div className="attach-img" >
                            {attach !== null && attach.imgUrl && <img width='100px' height="80px" src={attach.imgUrl} />}
                        </div>
                        <p>Added a few {utilService.checkTime(attach.addedAt)} ago | <Link className="btn-delete" onClick={(ev) => handleDelete(ev, i)}>Delete</Link></p>
                    </div>
                )
            })}
        </div>
    </div>
}