import * as UIConstant from "../constants/ui";

export const showGloablLoading = () => {
  return {
    type: UIConstant.GLOBAL_SHOW_LOADING,
  };
};

export const hideGloablLoading = () => {
  return {
    type: UIConstant.GLOBAL_HIDE_LOADING,
  };
};

export const showSidebar = () => {
  return {
    type: UIConstant.SHOW_SIDEBAR,
  };
};

export const hideSidebar = () => {
  return {
    type: UIConstant.HIDE_SIDEBAR,
  };
};
