export function LabelsList({ labels }) {
  return (
    <div>
      <ul className="labels-list">
        {labels.map((label) => (
          <li key={label.id}>
            {console.log(label)}
            <label className="label-li">
              <input
                className="check-labels"
                aria-checked="false"
                type="checkbox"
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
