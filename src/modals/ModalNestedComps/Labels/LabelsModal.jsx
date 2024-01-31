import { useDispatch } from "react-redux";
import { RootModalHeader } from "../../RootModalHeader";
import { LabelsList } from "../../ModalNestedComps/Labels/LabelsList";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { groupService } from "../../../services/group.service";

export function LabelsModal({ labels, setIsCreateLabelOpen, groupId, task }) {
  const [checkedLabels, setCheckedLabels] = useState([]);
  const board = useSelector((storeState) => storeState.boardModule.curBoard);

  useEffect(() => {
    const taskToSave = { ...task, labelIds: checkedLabels };
    groupService.updateTask(taskToSave, groupId, board);
  }, [checkedLabels]);

  return (
    <div className="labels-modal-container ">
      <RootModalHeader title="Labels" />
      <div className="labels-modal-content">
        <input
          placeholder="Search labels..."
          className="search-labels-input"
          type="text"
        ></input>
        <p>Labels</p>
        <LabelsList
          setCheckedLabels={setCheckedLabels}
          checkedLabels={checkedLabels}
          labels={labels}
          groupId={groupId}
          task={task}
          board={board}
        />
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
