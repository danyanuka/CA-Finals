import { LabelsModal } from "../ModalNestedComps/Labels/LabelsModal";
import { CreateLabelModal } from "../ModalNestedComps/Labels/CreateLabelModal";
import { useEffect, useState } from "react";

export function MdlTaskLabels({ board, group, task }) {
  const [labels, setLabels] = useState(board.labels);
  const [isCreateLabelOpen, setIsCreateLabelOpen] = useState(false);

  return (
    <div className="mdl-task-labels-container scrollbar">
      <DynLabelsComp
        setLabels={setLabels}
        board={board}
        labels={labels}
        isCreateLabelOpen={isCreateLabelOpen}
        setIsCreateLabelOpen={setIsCreateLabelOpen}
        task={task}
        groupId={group.id}
      />
    </div>
  );
}

function DynLabelsComp({
  isCreateLabelOpen,
  setIsCreateLabelOpen,
  labels,
  board,
  setLabels,
  groupId,
  task,
}) {
  switch (isCreateLabelOpen) {
    case false:
      return (
        <LabelsModal
          setIsCreateLabelOpen={setIsCreateLabelOpen}
          labels={labels}
          groupId={groupId}
          task={task}
          board={board}
        />
      );

    case true:
      return (
        <CreateLabelModal
          board={board}
          setIsCreateLabelOpen={setIsCreateLabelOpen}
          setLabels={setLabels}
        />
      );

    default:
      return <div>Sorry, something unexpected happened</div>;
  }
}
