import { useSelector } from "react-redux";
import { useEffect, useLayoutEffect, useState, useRef } from "react";

import { closeModal } from "../../store/actions/app.actions";
import { CreateBoardModal } from "./CreateBoardModal";
import { ShowOptionsModal } from "./ShowOptionsModal";
import { utilService } from "/src/services/util.service.js";

export function RootModal() {
  const [styleProp, setStyleProp] = useState({});

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
    // More type cases below

    default:
      return <div>Sorry, something unexpected happened</div>;
  }
}
