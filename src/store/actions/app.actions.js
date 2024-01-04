import { OPEN_MODAL, CLOSE_MODAL } from "../reducers/app.reducer";

export const openModal = (modalType, ev) => ({
  type: OPEN_MODAL,
  modalType,
  ev,
});

export const closeModal = () => ({ type: CLOSE_MODAL });
