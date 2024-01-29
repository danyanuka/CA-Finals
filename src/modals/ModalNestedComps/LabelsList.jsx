export function LabelsList({ labels }) {
  return (
    <div>
      <ul className="labels-list">
        {labels.map((label) => (
          <li key={label.id}>
            <label className="label-li">
              <div className={`base-bg-color-${label.color}`}>
                {label.title}
              </div>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
