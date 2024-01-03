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
  }

  console.log("data", data);

  if (!isOpen) return <></>;

  return (
    <div ref={modalRef} className="root-modal">
      <div>
        <DynModalType modalType={modalType} />
      </div>
      <button onClick={() => dispatch(closeModal())}>Close</button>
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
