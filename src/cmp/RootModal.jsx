import { useSelector, useDispatch } from "react-redux";

import { closeModal } from "../store/actions/app.actions";
import { CreateBoardModal } from "./CreateBoardModal";
import { useEffect, useLayoutEffect, useRef } from "react";

export function RootModal() {
  const modalRef = useRef();
  const dispatch = useDispatch();
  const {
    modal: { isOpen, modalType, data },
  } = useSelector((storeState) => storeState.appModule);

  useEffect(() => {
    if (modalRef.current) {
      setModalPos();
    }
  }, [data]);

  function getEventPositionData() {
    const elementRect = data.target.getBoundingClientRect();
    const { clientY, clientX } = data;
    const mousePos = { clientX, clientY };
    const posData = {
      elementRect: {
        bottom: elementRect.bottom,
        height: elementRect.height,
        left: elementRect.left,
        right: elementRect.right,
        top: elementRect.top,
        width: elementRect.width,
        x: elementRect.x,
        y: elementRect.y,
      },
      mousePos,
    };
    return posData;
  }

  function setModalPos() {
    const posData = getEventPositionData();
    const { elementRect } = posData;
    modalRef.current.style.left = `${elementRect.left}px`;
    modalRef.current.style.top = `${elementRect.bottom + 10}px`;
  }

  if (!isOpen) return <></>;
  return (
    <div ref={modalRef} className="root-modal">
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
