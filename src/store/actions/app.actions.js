import { OPEN_MODAL, CLOSE_MODAL } from "../reducers/app.reducer";

export const openModal = (modalType, ev, modalProps=null) => ({
  type: OPEN_MODAL,
  modalType,
  ev,
  modalProps
});

export const closeModal = () => ({ type: CLOSE_MODAL });
