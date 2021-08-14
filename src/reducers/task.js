import { toastError } from "../common/helpers/toastHelper";
import * as taskConstant from "../constants/Task";
var initialState = {
  listTask: [],
  taskEditing: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case taskConstant.FETCH_TASKS:
      return {
        ...state,
        listTask: [],
      };
    case taskConstant.FETCH_TASKS_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        listTask: data,
      };
    case taskConstant.FETCH_TASKS_FAILED:
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        listTask: [],
      };
    case taskConstant.FILTER_TASK_SUCCESS:
      const dataFilter = action.payload.data;
      return {
        ...state,
        listTask: dataFilter,
      };
    case taskConstant.ADD_TASKS:
      return {
        ...state,
      };
    case taskConstant.ADD_TASKS_SUCCESS:
      return {
        ...state,
        listTask: [action.payload.data].concat(state.listTask),
      };
    case taskConstant.ADD_TASKS_FAILED:
      toastError(action.payload.error);
      return {
        ...state,
      };
    case taskConstant.SET_TASK_EDITING:
      const { task } = action.payload;
      return {
        ...state,
        taskEditing: task,
      };
    case taskConstant.UPDATE_TASKS:
      return {
        ...state,
      };
    case taskConstant.UPDATE_TASKS_SUCCESS:
      const dataUpdate = action.payload.data;
      const { listTask } = state;
      const index = findIndex(listTask, dataUpdate.id);
      if (index !== -1) {
        const newList = [
          ...listTask.slice(0, index),
          dataUpdate,
          ...listTask.slice(index + 1),
        ];
        return {
          ...state,
          listTask: newList,
        };
      }
      return {
        ...state,
        taskEditing: task,
      };
    case taskConstant.UPDATE_TASKS_FAILED:
      toastError(action.payload.error);
      return {
        ...state,
      };
    case taskConstant.DELETE_TASKS:
      return {
        ...state,
      };
    case taskConstant.DELETE_TASKS_SUCCESS:
      const idDelete = action.payload.id;
      return {
        ...state,
        listTask: state.listTask.filter((task) => task.id !== idDelete),
      };
    case taskConstant.DELETE_TASKS_FAILED:
      toastError(action.payload.error);
      return {
        ...state,
      };
    default:
      return state;
  }
};

function findIndex(listTask, id) {
  var result = -1;
  var task = null;
  for (let index = 0; index < listTask.length; index++) {
    task = listTask[index];
    if (task.id === id) {
      result = index;
    }
  }
  return result;
}

export default reducer;
