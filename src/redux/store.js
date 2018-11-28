import { createStore, applyMiddleware } from 'redux';
import { createLogger } from "redux-logger";
import thunk from 'redux-thunk';

import rootReducer from "./rootReducer";
import { IS_DEVELOPMENT } from '../config';

const logger = createLogger({
  collapsed: true,
  logger: console
});

const store = createStore(
  rootReducer,
  IS_DEVELOPMENT ? applyMiddleware(thunk, logger) : applyMiddleware(thunk)
);

export default store;
