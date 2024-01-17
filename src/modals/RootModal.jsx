import { useSelector } from "react-redux";
import { useEffect, useLayoutEffect, useState, useRef } from "react";

import { utilService } from "/src/services/util.service.js";

import { CreateBoardModal } from "./CreateBoard/CreateBoardModal";
import { ShowOptionsModal } from "./ShowOptionsModal";
import { MdlTaskMembers } from "./TaskDetails/MdlTaskMembers";
import { MdlTaskLabels } from "./TaskDetails/MdlTaskLabels";
import { MdlTaskChecklist } from "./TaskDetails/MdlTaskChecklist";
import { MdlTaskDates } from "./TaskDetails/MdlTaskDates";
import { MdlTaskAttach } from "./TaskDetails/MdlTaskAttach";
import { MdlTaskCover } from "./TaskDetails/MdlTaskCover";
import { MdlTaskMove } from "./TaskDetails/MdlTaskMove";
import { MdlTaskCopy } from "./TaskDetails/MdlTaskCopy";
import { MdlTaskShare } from "./TaskDetails/MdlTaskShare";

export function RootModal() {
  const [styleProp, setStyleProp] = useState();

  const modalRef = useRef();

  const {
    modal: { isOpen, modalType, target, modalProps },
  } = useSelector((storeState) => storeState.appModule);

  useLayoutEffect(() => {
    if (modalRef.current) {
      setModalPos();
    }
  }, [target]);

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
    case "moreOptions":
      return <ShowOptionsModal handleIsAddingFromModal={modalProps} />;
    case "taskMembers":
      return <MdlTaskMembers />;
    case "taskLabels":
      return <MdlTaskLabels />;
    case "taskChecklist":
      return <MdlTaskChecklist />;
    case "taskDates":
      return <MdlTaskDates />;
    case "taskAttach":
      return <MdlTaskAttach />;
    case "taskCover":
      return <MdlTaskCover />;
    case "taskMove":
      return <MdlTaskMove />;
    case "taskCopy":
      return <MdlTaskCopy />;
    case "taskShare":
      return <MdlTaskShare />;

    // More type cases below

    default:
      return <div>Sorry, something unexpected happened</div>;
  }
}
