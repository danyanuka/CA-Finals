import { useSelector, useDispatch } from "react-redux";

import { closeModal } from "../store/actions/app.actions";
import { CreateBoardModal } from "./CreateBoardModal";

export function RootModal() {
  const {
    modal: { isOpen, modalType, data },
  } = useSelector((storeState) => storeState.appModule);
  const dispatch = useDispatch();

  if (!isOpen) return <></>;
  return (
    <div>
      <div>
        <DynModalType modalType={modalType} data={data} />
      </div>
      <button onClick={() => dispatch(closeModal())}>Close</button>
    </div>
  );
}

function DynModalType({ modalType, date }) {
  switch (modalType) {
    case "createBoard":
      return <CreateBoardModal data={date} />;

    // More type cases below

    default:
      return <></>;
  }
}
