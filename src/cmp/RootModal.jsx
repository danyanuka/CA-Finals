import { useSelector, useDispatch } from "react-redux";

import { closeModal } from "../store/actions/app.actions";
import { CreateBoardModal } from "./CreateBoardModal";
import { useEffect, useRef } from "react";

export function RootModal() {
  const {
    modal: { isOpen, modalType, data },
  } = useSelector((storeState) => storeState.appModule);

  const modalRef = useRef();

  useEffect(() => {
    if (modalRef.current) {
      setModalPos();
    }
  }, [data]);

  const dispatch = useDispatch();

  function setModalPos() {
    const { mousePos, elementRect } = data;
    modalRef.current.style.left = `${elementRect.left}px`;
    modalRef.current.style.top = `${elementRect.bottom + 10}px`;
  }

  console.log("data", data);
  if (!isOpen) return <></>;
  return (
    <div ref={modalRef} className="root-modal">
      <header className="modal-header">
        <p className="modal-title">
          {modalType === "createBoard" ? "Create Board" : "Default Title"}
        </p>
        <button className="close-modal" onClick={() => dispatch(closeModal())}>
          <i className="icon-close"></i>
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
