import { constService } from "../../../services/const.service";

export function LabelColorPicker({ setNewLabel, newLabel }) {
  return (
    <div className="label-color-picker-container">
      <p htmlFor="labels-color-list">Select a color</p>
      <div className="labels-color-list-container">
        <ul className="labels-color-list">
          {constService.labelColors.map((color, idx) => (
            <li
              className={`label-color-li ${
                newLabel.color === color && "selected"
              }`}
              key={idx}
            >
              <button
                className={`base-bg-color-${color}`}
                onClick={() =>
                  setNewLabel((prev) => ({
                    ...prev,
                    color,
                  }))
                }
              ></button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
