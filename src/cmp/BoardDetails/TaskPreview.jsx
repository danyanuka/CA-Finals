import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Draggable } from "react-beautiful-dnd";

import { utilService } from "../../services/util.service.js";
import { timeService } from "../../services/time.service.js"
import { UserAvatar } from "../UserAvatar.jsx";


export function TaskPreview({ task, index, groupId, onUpdateTask }) {
  const board = useSelector((storeState) => storeState.boardModule.curBoard);
  const [isDone, setIsDone] = useState();

  const dClass = task?.style?.backgroundImage ? 'img' : 'color'
  const labels = utilService.getLabels(task.labelIds, board);
  const { todos, isDoneAll } = utilService.getStatusChecklist(task.checklists);
  const timeStatus =
    utilService.getTimeStatus(task.dueDate)


  const isTaskActions =
    task.checklists ||
      task.attachments ||
      task.dueDate ||
      task.memberIds ||
      task.description
      ? true
      : false;

  const { boardId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setIsDone(task.isDone ? true : false);
  }, [task]);

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

  function handleIsDone(ev, isTaskDone) {
    ev.stopPropagation();
    setIsDone(isTaskDone);
    if (isTaskDone) {
      const newTask = {
        ...task,
        isDone: true,
      };

      onUpdateTask(newTask, groupId, board);
    } else {
      const newTask = {
        ...task,
        isDone: false,
      };

      onUpdateTask(newTask, groupId, board);

    }
  }

  function getDateString(task) {
    let dateString = ""
    if (task.startDate) {
      dateString += timeService.getDate(task.startDate)
      dateString += " - "
    }
    dateString += timeService.getDate(task.dueDate)
    return dateString
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
          <button className="edit-task-header">
            <i className="icon-edit"></i>
          </button>
          {
            task.style &&
            <div className={`task-header ${dClass}`} style={task.style}></div>
          }


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
                    onClick={(ev) => handleIsDone(ev, true)}
                  ></p>
                  <span>
                    {getDateString(task)}
                  </span>
                </div>
              )}

              {isDone && (
                <div className="due-date done">
                  <i className="icon-clock-alert-today"></i>
                  <i
                    className="icon-checklists-white checkbox-due-date"
                    onClick={(ev) => handleIsDone(ev, false)}
                  ></i>
                  <span>
                    {getDateString(task)}
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
