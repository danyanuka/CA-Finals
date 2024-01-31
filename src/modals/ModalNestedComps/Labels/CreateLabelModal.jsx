import { useState } from "react";
import { LabelColorPicker } from "./LabelColorPicker";
import { utilService } from "../../../services/util.service";
import { boardActions } from "../../../store/actions/board.actions";

export function CreateLabelModal({ setIsCreateLabelOpen, board, setLabels }) {
  const [newLabel, setNewLabel] = useState({});

  function handleChange({ target }) {
    let { name: field, value } = target;
    setNewLabel((prevLabel) => ({ ...prevLabel, [field]: value }));
  }

  async function onSaveLabelToBoard() {
    try {
      const labelToSave = { id: utilService.makeId(), ...newLabel };
      const updatedBoard = {
        _id: board._id,
        labels: [...board.labels, labelToSave],
      };

      await boardActions.saveBoard(updatedBoard);
      // setLabels((prev) => [...prev, labelToSave]);
      setIsCreateLabelOpen(false);
    } catch (err) {
      console.log("Issues updating board", err);
    }
  }

  console.log(newLabel);
  return (
    <div className="create-label-modal-container">
      <header className="root-modal-header create-label-header">
        <button
          onClick={() => setIsCreateLabelOpen(false)}
          className="go-back close-modal transparent-btn-black"
        >
          <i className="icon-left-for-modals"></i>
        </button>
        <h2 className="modal-title"> Create label</h2>
      </header>
      <div className="label-display-wrapper">
        <span
          style={{
            backgroundColor: !newLabel.color && "rgba(9, 30, 66, 0.06)",
          }}
          className={`label-display base-bg-color-${newLabel.color}`}
        >
          {newLabel.title || "Title"}
        </span>
      </div>
      <div className="create-label-modal-content">
        <p>Title</p>
        <input
          type="text"
          onChange={(ev) => handleChange(ev)}
          name="title"
          value={newLabel.title}
        />
        <LabelColorPicker newLabel={newLabel} setNewLabel={setNewLabel} />
        <button className="create-label-btn" onClick={onSaveLabelToBoard}>
          Create
        </button>
      </div>
    </div>
  );
}
