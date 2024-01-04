import { useSelector, useDispatch } from "react-redux";

import { closeModal } from "../store/actions/app.actions";
import { CreateBoardModal } from "./CreateBoardModal";
import { useEffect, useState, useRef } from "react";

export function RootModal() {
  const modalRef = useRef();
  const [styleProp, setStyleProp] = useState({});
  const dispatch = useDispatch();
  const {
    modal: { isOpen, modalType, ev },
  } = useSelector((storeState) => storeState.appModule);

  useEffect(() => {
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
    }
  }

  function getModalSize() {
    const elementRect = modalRef.current.getBoundingClientRect();
    return {
      height: elementRect.height,
      width: elementRect.width
    }
  }

  function setModalPos() {
    const buttonPos = getButtonPosition();
    const modalSize = getModalSize();
    const windowSize = {
      height: window.innerHeight, 
      width: window.innerWidth
    }



    setStyleProp((prevStyle) => ({
      ...prevStyle,
      left: `${buttonPos.left}px`,
      top: `${buttonPos.bottom + 10}px`
    }))
  }

  console.log(styleProp)
  if (!isOpen) return <></>;
  return (
    <div ref={modalRef} className="root-modal" style={styleProp}>
      <header className="modal-header">
        <h2 className="modal-title">
          {modalType === "createBoard" ? "Create Board" : "Default Title"}
        </h2>
        <button className="close-modal" onClick={() => dispatch(closeModal())}>
          <i className="icon-close-regular"></i>
        </button>
      </header>
      <div className="modal-content">
        <DynModalType modalType={modalType} />
      </div>
    </div>
  );
}

function DynModalType({ modalType }) {
  switch (modalType) {
    case "createBoard":
      return <CreateBoardModal />;

    // More type cases below

    default:
      return <div>Sorry, something unexpected happened</div>;
  }
}
