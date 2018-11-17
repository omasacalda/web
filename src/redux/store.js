import { createStore, applyMiddleware } from 'redux';
import { createLogger } from "redux-logger";
import thunk from 'redux-thunk';
import promiseMiddleware from "./promiseMiddleware"
import rootReducer from "./rootReducer";
import { IS_DEVELOPMENT } from '../config';

const logger = createLogger({
  collapsed: true,
  logger: console
});

const store = createStore(
  rootReducer,
  IS_DEVELOPMENT ? applyMiddleware(promiseMiddleware, thunk, logger) : applyMiddleware(promiseMiddleware, thunk)
);

export default store;
