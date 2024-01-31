import { useNavigate, useParams } from "react-router-dom";
import { utilService } from "../../services/util.service.js";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Draggable } from "react-beautiful-dnd";
import { UserAvatar } from "../UserAvatar.jsx";
import { useState } from "react";

export function TaskPreview({ task, index, groupId, onUpdateTask }) {
  const board = useSelector((storeState) => storeState.boardModule.curBoard);
  const [isDone, setIsDone] = useState(task.isDone ? true : false);

  const labels = utilService.getLabels(task.labelIds, board);
  // console.log(labels);
  const { todos, isDoneAll } = utilService.getStatusChecklist(task.checklists);
  const [timeStatus, setTimStatus] = useState(
    utilService.getTimeStatus(task.dueDate)
  );

  const isTaskActions =
    task.checklists ||
    task.attachments ||
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
    const memberIndex = board.members.findIndex((mem) => mem._id === memberId);
    return board.members[memberIndex]?.fullname;
  }

  function getMemberImg(memberId) {
    const userIndx = board.members.findIndex((mem) => mem._id === memberId);
    if (userIndx >= 0 && board.members[userIndx]?.imgUrl)
      return board.members[userIndx]?.imgUrl;
    return null;
  }

  function handleIsDone(isTaskDone) {
    setIsDone(isTaskDone);
    if (isTaskDone) {
      const newTask = {
        ...task,
        isTaskDone: true,
      };

      onUpdateTask(newTask, groupId, board);
      setTimStatus("done");
    } else {
      const newTask = {
        ...task,
        isDone: false,
      };

      onUpdateTask(newTask, groupId, board);
      setTimStatus("");
    }
  }

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          className={`task-preview is-dragging-${snapshot.isDragging}`}
          key={task.id}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          onClick={() => handleGoToTask(task.id)}
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
                      className={`label base-bg-color-${label.color}`}
                      title={`title: ${label.title}`}
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
            <div className="task-icons">
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

              {task.attachments?.length > 0 && (
                <div className="icon-with-counts">
                  <i className="icon-task-attachments" title="Attachments"></i>
                  <span>{task.attachments.length}</span>
                </div>
              )}

              {task.checklists && isDoneAll === todos && (
                <div className="icon-with-counts checklists-done">
                  <i className="icon-checklists-white" title="Checklists"></i>
                  <span>
                    {isDoneAll}/{todos}
                  </span>
                </div>
              )}

              {task.checklists && isDoneAll != todos && (
                <div className="icon-with-counts">
                  <i className="icon-checklists" title="Checklists"></i>
                  <span>
                    {isDoneAll}/{todos}
                  </span>
                </div>
              )}

              {task.dueDate && !isDone && (
                <div className={`due-date ${timeStatus}`}>
                  <i className={`icon-clock-alert-${timeStatus}`}></i>
                  <p
                    className={`checkbox-due-date ${timeStatus}`}
                    onClick={() => handleIsDone(true)}
                  ></p>
                  <span>
                    {date[1]} {date[2]}{" "}
                  </span>
                </div>
              )}

              {isDone && (
                <div className="due-date done">
                  <i className="icon-clock-alert-today"></i>
                  <i
                    className="icon-checklists-white checkbox-due-date"
                    onClick={() => handleIsDone(false)}
                  ></i>

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
                    return (
                      <div key={i}>
                        <UserAvatar
                          userFullName={getMemberFullName(memberId)}
                          userImg={getMemberImg(memberId)}
                        />
                      </div>
                    );
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
