import { LabelsModal } from "../ModalNestedComps/Labels/LabelsModal";
import { CreateLabelModal } from "../ModalNestedComps/Labels/CreateLabelModal";
import { useState } from "react";

export function MdlTaskLabels({ board, group, task }) {
  const [labels, setLabels] = useState(board.labels);
  const [isCreateLabelOpen, setIsCreateLabelOpen] = useState(false);

  return (
    <DynLabelsComp
      labels={labels}
      isCreateLabelOpen={isCreateLabelOpen}
      setIsCreateLabelOpen={setIsCreateLabelOpen}
    />
  );
}

function DynLabelsComp({ isCreateLabelOpen, setIsCreateLabelOpen, labels }) {
  switch (isCreateLabelOpen) {
    case false:
      return (
        <LabelsModal
          setIsCreateLabelOpen={setIsCreateLabelOpen}
          labels={labels}
        />
      );

    case true:
      return <CreateLabelModal setIsCreateLabelOpen={setIsCreateLabelOpen} />;

    default:
      return <div>Sorry, something unexpected happened</div>;
  }
}
