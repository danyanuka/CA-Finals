import { groupService } from "../../../services/group.service";

export function LabelsList({ groupId, task, board }) {
  function handleChange(ev, labelId) {
    let taskUpdatedLabels;
    if (!task?.labelIds) {
      taskUpdatedLabels = [labelId];
    } else if (task.labelIds.includes(labelId)) {
      taskUpdatedLabels = task.labelIds.filter((id) => id !== labelId);
    } else {
      taskUpdatedLabels = [...task.labelIds, labelId];
    }
    const taskToSave = { ...task, labelIds: taskUpdatedLabels };
    groupService.updateTask(taskToSave, groupId, board);
  }

  return (
    <div>
      <ul className="labels-list">
        {board.labels.map((label, i) => (
          <li key={i}>
            <label className="label-li">
              <input
                onChange={(ev) => handleChange(ev, label.id)}
                className="check-labels"
                aria-checked="false"
                type="checkbox"
                checked={task?.labelIds && task.labelIds.includes(label.id)}
              />
              <div className={`label-color base-bg-color-${label.color}`}>
                <span className="label-title">{label.title}</span>
              </div>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
