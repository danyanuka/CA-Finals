import { useNavigate, useParams } from "react-router-dom";
import { utilService } from "../services/util.service.js";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Draggable } from 'react-beautiful-dnd';


export function TaskPreview({ task, index }) {
    const board = useSelector((storeState => storeState.boardModule.curBoard))
    const labels = utilService.getLabels(task.labelIds, board)
    const { todos, isDone } = utilService.getStatusChecklist(task.checklists)
    const { isPass, isToday, isTomorrow } = utilService.checkDueDate(task.dueDate)
    const isTaskActions = task.checklists || task.attachment || task.dueDate || task.memberIds || task.description ? true : false

    let date = new Date(task.dueDate).toString();
    date = date.split(" ")

    const { boardId } = useParams()
    const navigate = useNavigate()


    function handleGoToTask(taskId) {
        navigate(`/board/${boardId}/${taskId}`)
    }
    return (

        <Draggable draggableId={task.id} index={index}>
            {(provided, snapshot) => (

                <div
                    className={`task-preview is-dragging-${snapshot.isDragging}`}
                    key={task.id}
                    onClick={() => { handleGoToTask(task.id) }}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {task.style &&
                        <div className="task-header" style={task.style} >
                            <button className="edit-task-header-styled"><i className="icon-edit"></i></button>
                        </div>
                    }

                    <div className="task-body">
                        {task.labelIds &&
                            <div className="labels">
                                {labels.map((label) => {
                                    <span className="label"
                                        title={`color: ${label.color}, title: ${label.title}`}
                                        style={{ backgroundColor: label.color }}>
                                    </span>
                                })}
                            </div>
                        }
                        {!task.style ? (
                            <div className="edit-task">
                                <p className="task-title">{task.title}</p>
                                <button className="edit-task-header" ><li className="icon-edit"></li></button>
                            </div>
                        ) : (
                            <p className="task-title">{task.title}</p>
                        )}

                    </div>

                    <div className={isTaskActions ? "task-actions" : null}>
                        <div className="task-icons ">
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
                                    <span>{isDone}/{todos}</span>
                                </div>
                            }

                            {task.dueDate && isPass &&
                                <div className="due-date pass">
                                    <i className="icon-clock-alert-red" ></i>
                                    <span>{date[1]} {date[2]} </span>
                                </div>
                            }

                            {task.dueDate && isToday &&
                                <div className="due-date today">
                                    <i className="icon-clock-alert-white" ></i>
                                    <span>{date[1]} {date[2]} </span>
                                </div>
                            }

                            {task.dueDate && isTomorrow &&
                                <div className="due-date tomorrow">
                                    <i className="icon-clock-alert" ></i>
                                    <span>{date[1]} {date[2]} </span>
                                </div>
                            }
                            {task.dueDate && !isPass && !isToday && !isTomorrow &&
                                <div className="due-date">
                                    <i className="icon-clock-alert" title="Checklists"></i>
                                    <span>{date[1]} {date[2]} </span>
                                </div>
                            }
                            {task.memberIds &&
                                <div className="members">
                                    <i className="icon-member-gray" title="User name"></i>
                                </div>}
                        </div>

                    </div>

                </div>
            )}
        </Draggable>

    )
}
