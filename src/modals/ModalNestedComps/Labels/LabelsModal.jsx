import { useDispatch } from "react-redux";
import { RootModalHeader } from "../../RootModalHeader";
import { LabelsList } from "../../ModalNestedComps/Labels/LabelsList";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { groupService } from "../../../services/group.service";

export function LabelsModal({ setIsCreateLabelOpen, groupId, task, board }) {
  // const [filterLabelsTxt, setfilterLabelsTxt] = useState("");

  // useEffect(() => {
  //   searchLabel();
  // }, [filterLabelsTxt]);

  // function handleChange(ev) {
  //   setfilterLabelsTxt(ev.target.value);
  // }

  // function searchLabel() {
  //   const filteredLabels = labels.filter((label) =>
  //     label.title.toLowerCase().includes(filterLabelsTxt.toLowerCase())
  //   );
  //   setLabels(filteredLabels);
  // }

  return (
    <div className="labels-modal-container ">
      <RootModalHeader title="Labels" />
      <div className="labels-modal-content">
        <input
          placeholder="Search labels..."
          className="search-labels-input"
          type="text"
          // value={filterLabelsTxt}
          // onChange={handleChange}
        ></input>
        <p>Labels</p>
        <LabelsList task={task} groupId={groupId} board={board} />
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
