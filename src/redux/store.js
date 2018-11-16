import { createStore, applyMiddleware } from 'redux';
import { createLogger } from "redux-logger";
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk';
import promiseMiddleware from "./promiseMiddleware"
import rootReducer from "./rootReducer";
import createHistory from 'history/createBrowserHistory';
import { IS_DEVELOPMENT } from '../config';

export const history = createHistory();

const logger = createLogger({
  collapsed: true,
  logger: console
});

const store = createStore(
  rootReducer,
  IS_DEVELOPMENT ? applyMiddleware(promiseMiddleware, thunk, logger, routerMiddleware(history)) : applyMiddleware(promiseMiddleware, thunk)
);

export default store;
