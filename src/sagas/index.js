import {
  call,
  delay,
  fork,
  put,
  select,
  take,
  takeLatest,
} from "redux-saga/effects";
import { hideModal } from "../actions/modal";
import {
  addTaskFailed,
  addTaskSuccess,
  fetchAllTask,
  fetchAllTaskFailed,
  fetchAllTaskSuccess,
  updateTaskFailed,
  updateTaskSuccess,
  deleteTask,
  deleteTaskSuccess,
  deleteTaskFailed,
} from "../actions/task";
import { hideGloablLoading, showGloablLoading } from "../actions/ui";
import * as taskApi from "../apis/task";
import { STATUS_CODE } from "../constants/index";
import * as Types from "../constants/Task";

function* rootSaga() {
  yield fork(watchCreateTaskAction);
  yield fork(watchFetchListTaskAction);
  yield takeLatest(Types.FILTER_TASK, watchFilterTask);
  yield takeLatest(Types.ADD_TASKS, watchAddTask);
  yield takeLatest(Types.UPDATE_TASKS, watchUpdateTask);
  yield takeLatest(Types.DELETE_TASKS, watchDeleteTask);
}

function* watchFetchListTaskAction() {
  while (true) {
    const action = yield take(Types.FETCH_TASKS);
    yield put(showGloablLoading());
    const { params } = action.payload;
    const result = yield call(taskApi.getList, params);
    const { status, data } = result;
    if (STATUS_CODE.SUCCESS === status) {
      yield put(fetchAllTaskSuccess(data));
    } else {
      yield put(fetchAllTaskFailed(data));
    }
    yield delay(1000);
    yield put(hideGloablLoading());
  }
}

function* watchCreateTaskAction() {}

function* watchFilterTask({ payload }) {
  yield delay(500);
  const { keyword } = payload;
  yield put(fetchAllTask({ q: keyword }));
}

function* watchAddTask({ payload }) {
  yield put(showGloablLoading());
  const res = yield call(taskApi.addTask, {
    title: payload.title,
    description: payload.description,
    status: 0,
  });
  const { data, status } = res;
  if (STATUS_CODE.CREATED === status) {
    yield put(addTaskSuccess(data));
    yield put(hideModal());
  } else {
    yield put(addTaskFailed(data));
  }
  yield put(hideGloablLoading());
}

function* watchUpdateTask({ payload }) {
  const { title, description, status } = payload;
  const taskEditing = yield select((state) => state.task.taskEditing);
  yield put(showGloablLoading());

  const res = yield call(
    taskApi.updateTask,
    {
      title,
      description,
      status,
    },
    taskEditing.id
  );
  const { data } = res;
  const resStatus = res.status;
  if (STATUS_CODE.SUCCESS === resStatus) {
    yield put(updateTaskSuccess(data));
    yield put(hideModal());
  } else {
    yield put(updateTaskFailed(data));
  }
  yield delay(1000);
  yield put(hideGloablLoading());
}

function* watchDeleteTask({ payload }) {
  const { id } = payload;
  yield put(showGloablLoading());
  const res = yield call(taskApi.deleteTask, id);
  const { data, status } = res;
  if (STATUS_CODE.SUCCESS === status) {
    yield put(deleteTaskSuccess(id));
    yield put(hideModal());
  } else {
    yield put(deleteTaskFaileds(data));
  }
  yield delay(1000);
  yield put(hideGloablLoading());
}

export default rootSaga;
