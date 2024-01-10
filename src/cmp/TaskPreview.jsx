import { useNavigate, useParams } from "react-router-dom";
import { utilService } from "../services/util.service";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Draggable } from 'react-beautiful-dnd';


export function TaskPreview({ task, index }) {
    const board = useSelector((storeState => storeState.boardModule.curBoard))

    const navigate = useNavigate()
    const { boardId } = useParams()
    let date = new Date(task.dueDate).toString();
    date = date.split(" ")

    // const labels = utilService.getLabels(task.labelIds, board)
    // console.log(labels);
    function handleGoToTask(taskId) {
        navigate(`/board/${boardId}/${taskId}`)
    }

    return (
        <Draggable draggableId={task.id} index={index} >
            {(provided, snapshot) => (
                <div className={`task-preview is-dragging-${snapshot.isDragging}`} onClick={() => { handleGoToTask(task.id) }}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                // isDragging={snapshot.isDragging}
                >
                    <div className="task-header">
                        <button className="edit-task-header"><li className="icon-edit"></li></button>
                    </div>

                    <div className="task-body">

                        {/* labels not working yet */}
                        {task.labelIds &&
                            <div className="labels">
                                {/* {task.labelIds.map((label) => label)} */}
                            </div>}

                        <p className="task-title">{task.title}</p>

                    </div>

                    <div className="task-actions">
                        <div className="task-icons">
                            {task.description &&
                                <i className="icon-description" title="This card has a description"></i>
                            }

                            {task.comments &&
                                <div className="icon-with-counts">
                                    <i className="icon-comments" title="Comments"></i>
                                    <span>{task.comments.length + 1}</span>
                                </div>
                            }

                            {task.attachment &&
                                <div className="icon-with-counts">
                                    <i className="icon-task-attachments" title="Attachments"></i>
                                    <span>{task.comments.length + 1}</span>
                                </div>
                            }
                            {task.checklists &&
                                <div className="icon-with-counts">
                                    <i className="icon-checklists" title="Checklists"></i>
                                    {/* <span>{task.checklists.todos?.length + 1}</span> */}
                                </div>
                            }

                            {task.dueDate < Date.now() &&
                                <div className="due-date">
                                    <i className="icon-clock-alert" title="Checklists"></i>
                                    <span>{date[1]} {date[2]} {date[3]}</span>
                                </div>
                            }
                        </div>
                        {task.memberIds &&
                            <div className="members">
                                <i className="icon-member-gray" title="User name"></i>
                            </div>}
                    </div>
                </div>
            )}
        </Draggable>

    )
}
