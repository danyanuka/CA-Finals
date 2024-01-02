export const OPEN_MODAL = " OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

const initialState = {
  modal: {
    isOpen: false,
    modalType: null,
  },
};

export function appReducer(state = initialState, action = {}) {
  switch (action.type) {
    case OPEN_MODAL:
      console.log(action);
      return {
        ...state,
        modal: {
          isOpen: true,
          modalType: action.modalType,
          data: action.data || null, // optional data for later use
        },
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modal: {
          isOpen: false,
          modalType: null,
          data: null,
        },
      };

    default:
      return state;
  }
}
