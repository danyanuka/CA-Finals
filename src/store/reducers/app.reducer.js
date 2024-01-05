export const OPEN_MODAL = " OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

const initialState = {
  modal: {
    isOpen: false,
    modalType: null,
    ev: null,
    modalProps: null
  },
};

export function appReducer(state = initialState, action = {}) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modal: {
          isOpen: true,
          modalType: action.modalType,
          ev: action.ev || null,
          modalProps: action.modalProps || null  // optional data for later use
        },
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modal: {
          isOpen: false,
          modalType: null,
          ev: null,
          modalProps: null
        },
      };

    default:
      return state;
  }
}
