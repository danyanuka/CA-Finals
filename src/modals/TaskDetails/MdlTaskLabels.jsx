import { useDispatch } from "react-redux";
import { closeModal } from "/src/store/actions/app.actions";
import { RootModalHeader } from "../RootModalHeader";
import { useState } from "react";
import { LabelsList } from "../ModalNestedComps/LabelsList";

export function MdlTaskLabels({ board, group, task }) {
  const [labels, setLabels] = useState(board.labels);

  function createLabel() {}

  return (
    <div className="mdl-task-labels-container">
      <RootModalHeader title="Labels" />
      <div className="mdl-task-labels-content">
        <input
          placeholder="Search labels..."
          className="search-labels-input"
          type="text"
        ></input>
        <LabelsList labels={labels} />
        <button
          onClick={createLabel}
          className="create-label-btn transparent-btn-neutral"
        >
          Create a new label
        </button>
      </div>
    </div>
  );
}
