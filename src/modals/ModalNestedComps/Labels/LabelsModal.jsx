import { useDispatch } from "react-redux";
import { RootModalHeader } from "../../RootModalHeader";
import { LabelsList } from "../../ModalNestedComps/Labels/LabelsList";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { groupService } from "../../../services/group.service";

export function LabelsModal({
  labels,
  setLabels,
  setIsCreateLabelOpen,
  groupId,
  task,
  board,
}) {
  const [checkedLabels, setCheckedLabels] = useState(task?.labelIds || []);
  const [filterLabelsTxt, setfilterLabelsTxt] = useState("");

  useEffect(() => {
    async function updateTask() {
      const taskToSave = { ...task, labelIds: checkedLabels };
      await groupService.updateTask(taskToSave, groupId, board);
    }
    updateTask();
  }, [checkedLabels]);

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
  console.log("this ", checkedLabels);
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
        <LabelsList
          setCheckedLabels={setCheckedLabels}
          checkedLabels={checkedLabels}
          labels={labels}
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
