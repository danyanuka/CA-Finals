import { useSelector, useDispatch } from "react-redux";

import { closeModal } from "../../store/actions/app.actions";
import { CreateBoardModal } from "./CreateBoardModal";
import { useEffect, useLayoutEffect, useState, useRef } from "react";

export function RootModal() {
  const modalRef = useRef();
  const [styleProp, setStyleProp] = useState({});
  const dispatch = useDispatch();
  const {
    modal: { isOpen, modalType, ev, modalProps },
  } = useSelector((storeState) => storeState.appModule);

  useLayoutEffect(() => {
    if (modalRef.current) {
      setModalPos();
    }
  }, [ev]);

  function getButtonPosition() {
    const elementRect = ev.target.getBoundingClientRect();
    return {
      bottom: elementRect.bottom,
      left: elementRect.left,
      right: elementRect.right,
      top: elementRect.top,
    };
  }

  function getModalSize() {
    const elementRect = modalRef.current.getBoundingClientRect();
    return {
      height: elementRect.height,
      width: elementRect.width,
    };
  }

  function setModalPos() {
    const buttonPos = getButtonPosition();
    const modalSize = getModalSize();
    const windowSize = {
      height: window.innerHeight,
      width: window.innerWidth,
    };

    let modalPos = {};

    // Horizontal
    if (buttonPos.left + modalSize.width < windowSize.width) {
      modalPos.left = buttonPos.left;
    } else {
      modalPos.right = 0;
    }

    // Vertical
    if (buttonPos.bottom + 8 + modalSize.height < windowSize.height) {
      modalPos.top = buttonPos.bottom + 8;
    } else if (buttonPos.top - 8 - modalSize.height > 0) {
      modalPos.bottom = windowSize.height - (buttonPos.top - 8);
    } else {
      modalPos.bottom = 4.4;
    }

    setStyleProp((prevStyle) => ({ ...modalPos }));
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

    // More type cases below

    default:
      return <div>Sorry, something unexpected happened</div>;
  }
}
