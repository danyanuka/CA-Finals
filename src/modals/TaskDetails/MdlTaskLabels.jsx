import { LabelsModal } from "../ModalNestedComps/Labels/LabelsModal";
import { CreateLabelModal } from "../ModalNestedComps/Labels/CreateLabelModal";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export function MdlTaskLabels({ group, task }) {
  const board = useSelector((storeState) => storeState.boardModule.curBoard);
  const [labels, setLabels] = useState(board.labels);
  const [isCreateLabelOpen, setIsCreateLabelOpen] = useState(false);

  useEffect(() => {
    setLabels(board.labels);
  }, [board]);

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
          setLabels={setLabels}
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
