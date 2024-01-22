import { useNavigate, useParams } from "react-router-dom";
import { utilService } from "../../services/util.service.js";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Draggable } from "react-beautiful-dnd";
import { UserAvatar } from "../UserAvatar.jsx"

export function TaskPreview({ task, index }) {
  const board = useSelector((storeState) => storeState.boardModule.curBoard);

  const labels = utilService.getLabels(task.labelIds, board);

  const { todos, isDone } = utilService.getStatusChecklist(task.checklists);
  const { isPass, isToday, isTomorrow, isYesterday } = utilService.checkDueDate(task.dueDate);
  // console.log(isPass, isToday, isTomorrow, isYesterday);

  const isTaskActions =
    task.checklists ||
      task.attachment ||
      task.dueDate ||
      task.memberIds ||
      task.description
      ? true
      : false;

  let date = new Date(task.dueDate).toString();
  date = date.split(" ");

  const { boardId } = useParams();
  const navigate = useNavigate();

  function handleGoToTask(taskId) {
    navigate(`/board/${boardId}/${taskId}`);
  }

  function getMemberFullName(memberId) {
    const memberIndex = board.members.findIndex((mem) => mem._id === memberId)
    return board.members[memberIndex]?.fullname
  }

  function getMemberImg(memberId) {
    const userIndx = board.members.findIndex((mem) => mem._id === memberId)
    if (userIndx >= 0 && board.members[userIndx]?.imgUrl)
      return board.members[userIndx]?.imgUrl
    return "/public/imgs/defaultUserImg.png"
  }

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          className={`task-preview is-dragging-${snapshot.isDragging}`}
          key={task.id}
          onClick={() => {
            handleGoToTask(task.id);
          }}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {task.style && (
            <div className="task-header" style={task.style}>
              <button className="edit-task-header-styled">
                <i className="icon-edit"></i>
              </button>
            </div>
          )}

          <div className="task-body">
            {task.labelIds && (
              <div className="labels">
                {labels.map((label) => {
                  return (
                    <div
                      key={label.id}
                      className="label"
                      title={`title: ${label.title}`}
                      style={{ backgroundColor: label.color }}
                    ></div>
                  );
                })}
              </div>
            )}
            {!task.style ? (
              <div className="edit-task">
                <p className="task-title">{task.title}</p>
                <button className="edit-task-header">
                  <li className="icon-edit"></li>
                </button>
              </div>
            ) : (
              <p className="task-title">{task.title}</p>
            )}
          </div>

          <div className={isTaskActions ? "task-actions" : null}>
            <div className="task-icons ">
              {task.description && (
                <i
                  className="icon-description"
                  title="This card has a description"
                ></i>
              )}

              {task.comments && (
                <div className="icon-with-counts">
                  <i className="icon-comments" title="Comments"></i>
                  <span>{task.comments.length + 1}</span>
                </div>
              )}

              {task.attachment && (
                <div className="icon-with-counts">
                  <i className="icon-task-attachments" title="Attachments"></i>
                  <span>{task.comments.length + 1}</span>
                </div>
              )}
              {task.checklists && isDone === todos && (
                <div className="icon-with-counts checklists-done">
                  <i className="icon-checklists-white" title="Checklists"></i>
                  <span>
                    {isDone}/{todos}
                  </span>
                </div>
              )}
              {task.checklists && isDone != todos && (
                <div className="icon-with-counts">
                  <i className="icon-checklists" title="Checklists"></i>
                  <span>
                    {isDone}/{todos}
                  </span>
                </div>
              )}

              {task.dueDate && isPass && (
                <div className="due-date pass">
                  <i className="icon-clock-alert-red"></i>
                  <span>
                    {date[1]} {date[2]}{" "}
                  </span>
                </div>
              )}

              {task.dueDate && isToday && (
                <div className="due-date today">
                  <i className="icon-clock-alert-white"></i>
                  <span>
                    {date[1]} {date[2]}{" "}
                  </span>
                </div>
              )}

              {task.dueDate && isTomorrow && (
                <div className="due-date tomorrow">
                  <i className="icon-clock-alert"></i>
                  <span>
                    {date[1]} {date[2]}{" "}
                  </span>
                </div>
              )}

              {task.dueDate && isYesterday && (
                <div className="due-date yesterday">
                  <i className="icon-clock-alert"></i>
                  <span>
                    {date[1]} {date[2]}{" "}
                  </span>
                </div>
              )}
              {task.dueDate && !isPass && !isToday && !isTomorrow && !isYesterday && (
                <div className="due-date">
                  <i className="icon-clock-alert" title="Checklists"></i>
                  <span>
                    {date[1]} {date[2]}{" "}
                  </span>
                </div>
              )}


            </div>
            <div>
              {task.memberIds && (
                <div className="members">
                  {task.memberIds.map((memberId, i) => {
                    return <div key={i}>
                      <UserAvatar userFullName={getMemberFullName(memberId)} userImg={getMemberImg(memberId)} />
                    </div>
                  })}

                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}
