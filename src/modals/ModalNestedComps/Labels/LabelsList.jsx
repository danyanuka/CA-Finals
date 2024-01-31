import { groupService } from "../../../services/group.service";

export function LabelsList({ labels, setCheckedLabels, checkedLabels }) {
  function handleChange(ev, labelId) {
    // remove from array
    if (checkedLabels.includes(labelId)) {
      setCheckedLabels((prev) => prev.filter((id) => id !== labelId));
    } else {
      // Add to array
      setCheckedLabels((prev) => [...prev, labelId]);
    }
  }

  return (
    <div>
      <ul className="labels-list">
        {labels.map((label) => (
          <li key={label.id}>
            <label className="label-li">
              <input
                onChange={(ev) => handleChange(ev, label.id)}
                className="check-labels"
                aria-checked="false"
                type="checkbox"
                checked={checkedLabels.includes(label.id)}
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
