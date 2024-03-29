import { useDispatch } from "react-redux";

import { closeModal } from "/src/store/actions/app.actions";

export function RootModalHeader({ title }) {
  const dispatch = useDispatch();

  return (
    <header className="root-modal-header">
      <h2 className="modal-title">{title}</h2>
      <button
        className="close-modal transparent-btn-black"
        onClick={() => dispatch(closeModal())}
      >
        <i className="icon-close-regular"></i>
      </button>
    </header>
  );
}
