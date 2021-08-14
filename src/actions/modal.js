import * as ModalTitle from "../constants/modal";

export const showModal = () => {
  return {
    type: ModalTitle.SHOW_MODAL,
  };
};

export const hideModal = () => {
  return {
    type: ModalTitle.HIDE_MODAL,
  };
};

export const changeModalTitle = (title) => {
  return {
    type: ModalTitle.CHANGE_MODAL_TTITLE,
    payload: {
      title,
    },
  };
};

export const changeModalContent = (component) => {
  return {
    type: ModalTitle.CHANGE_MODAL_CONTENT,
    payload: {
      component,
    },
  };
};
