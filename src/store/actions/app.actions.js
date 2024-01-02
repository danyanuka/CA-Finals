import { OPEN_MODAL, CLOSE_MODAL } from "../reducers/app.reducer";

export const openModal = (modalType, data) => ({
  type: OPEN_MODAL,
  modalType,
  data,
});

export const closeModal = () => ({ type: CLOSE_MODAL });
