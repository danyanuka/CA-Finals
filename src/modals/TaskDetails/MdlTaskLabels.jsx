import { LabelsModal } from "../ModalNestedComps/Labels/LabelsModal";
import { CreateLabelModal } from "../ModalNestedComps/Labels/CreateLabelModal";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export function MdlTaskLabels({ taskId }) {
  const board = useSelector((storeState) => storeState.boardModule.curBoard);
  const [group, setGroup] = useState()
  const [task, setTask] = useState()

  const [isCreateLabelOpen, setIsCreateLabelOpen] = useState(false);

  useEffect(() => {
    parseBoard();
  }, [board]);

  function parseBoard() {
    if (!board) return
    let groupId
    for (let gr of board.groups) {
      for (let ta of gr.tasks) {
        if (ta.id === taskId) {
          console.log("success")
          groupId = gr.id
          setGroup(gr)
          setTask(ta)
          break
        }
      }
      if (groupId) break
    }
  }


  function DynLabelsComp({
    isCreateLabelOpen,
    setIsCreateLabelOpen,
    board,
    groupId,
    task,
  }) {
    switch (isCreateLabelOpen) {
      case false:
        return (
          <LabelsModal
            setIsCreateLabelOpen={setIsCreateLabelOpen}
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
          />
        );

      default:
        return <div>Sorry, something unexpected happened</div>;
    }
  }


  console.log("group: ", group)
  return (
    group?.id &&
    <div className="mdl-task-labels-container scrollbar">
      <DynLabelsComp
        board={board}
        isCreateLabelOpen={isCreateLabelOpen}
        setIsCreateLabelOpen={setIsCreateLabelOpen}
        task={task}
        groupId={group?.id}
      />
    </div>
  );
}
