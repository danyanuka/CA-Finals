import { useDispatch } from "react-redux";
import { openModal } from "../../store/actions/app.actions.js";
import { Link } from "react-router-dom";
import { utilService } from "../../services/util.service.js";
import { useSelector } from "react-redux";
import { useState } from "react";
import { ShowImage } from "../../modals/TaskDetails/ShowImage.jsx";

export function TaskDetailsAttachments({ task, group }) {
    const [isImg, setIsImg] = useState(null)
    const board = useSelector((storeState) => storeState.boardModule.curBoard);
    const dispatch = useDispatch();

    function handleDelete(ev, index) {
        const modalProps = {
            index, task, groupId: group.id,
        }
        dispatch(openModal("DeleteModal", ev.target, modalProps));
    }

    function handleEdit(ev, index) {
        const modalProps = {
            index, task, groupId: group.id,
        }
        dispatch(openModal("EditModal", ev.target, modalProps));
    }

    function handleClickImg(url) {
        setIsImg(url)
    }

    function handleAddTaskModal(ev) {
        const modalProps = {
            board, task, group,
        }
        dispatch(openModal("taskAttach", ev.target, modalProps));
    }

    return <div className="td-section td-attachments">
        {isImg && <ShowImage src={isImg} />}
        <div className="td-section-icon">
            <i className="icon-task-trello-attach"></i>
        </div>
        <div className="header">
            <h2>Attachments</h2>
            <div>
                <button className="add-attach transparent-btn-neutral" onClick={(ev) => handleAddTaskModal(ev)}>Add</button>
            </div>
        </div>
        <div className="attachments-data">

            {task.attachments.map((attach, i) => {
                return (
                    <div className="attach" key={i}>
                        {
                            attach?.imgUrl &&
                            <div onClick={() => handleClickImg(attach.imgUrl)} className="attach-img" >
                                <img width='112px' height="80px" src={attach.imgUrl} />
                            </div>
                        }
                        {
                            attach?.linkUrl &&
                            <Link to={attach.linkUrl} target="_blank">
                                <div className="attach-link" >
                                    <i className="icon-task-attachments-big"></i>
                                </div>
                            </Link>
                        }
                        <div className="attach-info">
                            <h5 className="img-title">
                                {(attach !== null && attach.title) ? attach.title : attach.linkUrl}
                                <i className="icon-task-diagonal-arrow"></i>
                            </h5>
                            <p className="attach-details">
                                Added a few {utilService.checkTime(attach.addedAt)} ago •&nbsp;
                                <Link className="btn-delete" onClick={(ev) => handleDelete(ev, i)}>Delete</Link> •&nbsp;
                                <Link className="btn-edit" onClick={(ev) => handleEdit(ev, i)}>Edit</Link>
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div >
}