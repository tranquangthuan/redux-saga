import * as UIConstant from "../constants/ui";
var initialState = {
  showLoading: false,
  showSidebar: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UIConstant.GLOBAL_SHOW_LOADING:
      return {
        ...state,
        showLoading: true,
      };
    case UIConstant.GLOBAL_HIDE_LOADING:
      return {
        ...state,
        showLoading: false,
      };
    case UIConstant.SHOW_SIDEBAR:
      return {
        ...state,
        showSidebar: true,
      };
    case UIConstant.HIDE_SIDEBAR:
      return {
        ...state,
        showSidebar: false,
      };
    default:
      return state;
  }
};

export default reducer;
