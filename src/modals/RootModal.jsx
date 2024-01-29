import { useSelector } from "react-redux";
import { useEffect, useLayoutEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "/src/store/actions/app.actions";

import { utilService } from "/src/services/util.service.js";

import { CreateBoardModal } from "./CreateBoard/CreateBoardModal";
import { ShowOptionsModal } from "./ShowOptionsModal";
import { AccountMenu } from "./AccountMenu";
import { MdlTaskMembers } from "./TaskDetails/MdlTaskMembers";
import { MdlTaskMemberInfo } from "./TaskDetails/MdlTaskMemberInfo";
import { MdlTaskLabels } from "./TaskDetails/MdlTaskLabels";
import { MdlTaskChecklist } from "./TaskDetails/MdlTaskChecklist";
import { MdlTaskDates } from "./TaskDetails/MdlTaskDates";
import { MdlTaskAttach } from "./TaskDetails/MdlTaskAttach";
import { MdlTaskCover } from "./TaskDetails/MdlTaskCover";
import { MdlTaskMove } from "./TaskDetails/MdlTaskMove";
import { MdlTaskCopy } from "./TaskDetails/MdlTaskCopy";
import { MdlTaskShare } from "./TaskDetails/MdlTaskShare";
import { useOnClickOutside } from "../Hooks/useOnClickOutisde";
import { BoardsDropdown } from "./HeaderDropdowns/BoardsDropdown";
import { DeleteModal } from "./DeleteModal";

export function RootModal() {
  const [styleProp, setStyleProp] = useState();
  const dispatch = useDispatch();
  const modalRef = useRef();

  const {
    modal: { isOpen, modalType, target, modalProps },
  } = useSelector((storeState) => storeState.appModule);

  useLayoutEffect(() => {
    if (modalRef.current) {
      setModalPos();
    }
  }, [target]);

  useOnClickOutside(modalRef, () => {
    dispatch(closeModal());
  });

  function getModalSize() {
    const elementRect = modalRef.current.getBoundingClientRect();
    return {
      height: elementRect.height,
      width: elementRect.width,
    };
  }

  function setModalPos() {
    const buttonPos = utilService.getTargetPosition(target);
    const modalSize = getModalSize();
    const modalPos = utilService.calcModalPosition(buttonPos, modalSize);
    setStyleProp({ ...modalPos });
  }

  if (!isOpen) return <></>;
  return (
    <div ref={modalRef} className="root-modal" style={styleProp}>
      <DynModalType modalType={modalType} modalProps={modalProps} />
    </div>
  );
}

function DynModalType({ modalType, modalProps }) {
  switch (modalType) {
    case "createBoard":
      return <CreateBoardModal />;
    case "accountMenu":
      return <AccountMenu />;
    case "moreOptions":
      return <ShowOptionsModal handleIsAddingFromModal={modalProps} />;
    case "taskMembers":
      return <MdlTaskMembers board={modalProps.board} group={modalProps.group} task={modalProps.task} />;
    case "taskMemberInfo":
      return <MdlTaskMemberInfo />;
    case "taskLabels":
      return <MdlTaskLabels board={modalProps.board} group={modalProps.group} task={modalProps.task} />;
    case "taskChecklist":
      return <MdlTaskChecklist />;
    case "taskDates":
      return <MdlTaskDates board={modalProps.board} />;
    case "taskAttach":
      return <MdlTaskAttach board={modalProps.board} group={modalProps.group} task={modalProps.task} />;
    case "taskCover":
      return <MdlTaskCover />;
    case "taskMove":
      return <MdlTaskMove />;
    case "taskCopy":
      return <MdlTaskCopy />;
    case "taskShare":
      return <MdlTaskShare />;
    case "BoardsDropdown":
      return <BoardsDropdown isStarred={modalProps} />;
    case "DeleteModal":
      return <DeleteModal index={modalProps.index} task={modalProps.task}
        groupId={modalProps.groupId} />;

    // More type cases below

    default:
      return <div>Sorry, something unexpected happened</div>;
  }
}
