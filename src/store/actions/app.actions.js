import { OPEN_MODAL, CLOSE_MODAL } from "../reducers/app.reducer";

export const openModal = (modalType, target, modalProps = null) => ({
  type: OPEN_MODAL,
  modalType,
  target,
  modalProps
});

export const closeModal = () => ({ type: CLOSE_MODAL });
