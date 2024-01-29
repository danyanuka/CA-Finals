import { useDispatch } from "react-redux";
import { RootModalHeader } from "../../RootModalHeader";
import { LabelsList } from "../../ModalNestedComps/Labels/LabelsList";

export function LabelsModal({ labels, setIsCreateLabelOpen }) {
  return (
    <div className="labels-modal-container">
      <RootModalHeader title="Labels" />
      <div className="labels-modal-content">
        <input
          placeholder="Search labels..."
          className="search-labels-input"
          type="text"
        ></input>
        <p>Labels</p>
        <LabelsList labels={labels} />
        <button
          onClick={() => setIsCreateLabelOpen(true)}
          className="create-label-btn transparent-btn-neutral"
        >
          Create a new label
        </button>
      </div>
    </div>
  );
}
