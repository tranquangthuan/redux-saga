import * as ModalConstant from "../constants/modal";
var initialState = {
  showModal: false,
  component: null,
  title: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ModalConstant.SHOW_MODAL:
      return {
        ...state,
        showModal: true,
      };
    case ModalConstant.HIDE_MODAL:
      return {
        ...state,
        showModal: false,
      };
    case ModalConstant.CHANGE_MODAL_TTITLE:
      return {
        ...state,
        title: action.payload.title,
      };
    case ModalConstant.CHANGE_MODAL_CONTENT:
      return {
        ...state,
        component: action.payload.component,
      };
    default:
      return state;
  }
};

export default reducer;
