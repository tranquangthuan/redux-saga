import { applyMiddleware, createStore } from "redux";
import rootReducers from "../reducers/index";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const sagaMiddleware = createSagaMiddleware();

const configStore = () => {
  const middleWares = [thunk, sagaMiddleware];
  const enhancers = [applyMiddleware(...middleWares)];
  const store = createStore(rootReducers, composeEnhancers(...enhancers));
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configStore;
