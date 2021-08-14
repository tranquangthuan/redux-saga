import * as taskConstant from "../constants/Task";
import { STATUS } from "../constants/index";

export const fetchAllTask = (params = {}) => {
  return {
    type: taskConstant.FETCH_TASKS,
    payload: {
      params,
    },
  };
};

export const fetchAllTaskSuccess = (data) => {
  return {
    type: taskConstant.FETCH_TASKS_SUCCESS,
    payload: {
      data: data,
    },
  };
};

export const fetchAllTaskFailed = (error) => {
  return {
    type: taskConstant.FETCH_TASKS_FAILED,
    payload: {
      error: error,
    },
  };
};

export const filterTask = (keyword) => {
  return {
    type: taskConstant.FILTER_TASK,
    payload: {
      keyword: keyword,
    },
  };
};

export const filterTaskSuccess = (data) => {
  return {
    type: taskConstant.FILTER_TASK_SUCCESS,
    payload: {
      data: data,
    },
  };
};

export const addTask = (title, description) => {
  return {
    type: taskConstant.ADD_TASKS,
    payload: {
      title,
      description,
    },
  };
};

export const addTaskSuccess = (data) => {
  return {
    type: taskConstant.ADD_TASKS_SUCCESS,
    payload: {
      data: data,
    },
  };
};

export const addTaskFailed = (error) => {
  return {
    type: taskConstant.ADD_TASKS_FAILED,
    payload: {
      error: error,
    },
  };
};

export const setTaskEditing = (task) => {
  return {
    type: taskConstant.SET_TASK_EDITING,
    payload: {
      task,
    },
  };
};

export const updateTask = (title, description, status = STATUS[0].value) => {
  return {
    type: taskConstant.UPDATE_TASKS,
    payload: {
      title,
      description,
      status,
    },
  };
};

export const updateTaskSuccess = (data) => {
  return {
    type: taskConstant.UPDATE_TASKS_SUCCESS,
    payload: {
      data: data,
    },
  };
};

export const updateTaskFailed = (error) => {
  return {
    type: taskConstant.UPDATE_TASKS_FAILED,
    payload: {
      error: error,
    },
  };
};

export const deleteTask = (id) => {
  return {
    type: taskConstant.DELETE_TASKS,
    payload: {
      id,
    },
  };
};

export const deleteTaskSuccess = (id) => {
  return {
    type: taskConstant.DELETE_TASKS_SUCCESS,
    payload: {
      id: id,
    },
  };
};

export const deleteTaskFailed = (error) => {
  return {
    type: taskConstant.DELETE_TASKS_FAILED,
    payload: {
      error: error,
    },
  };
};
