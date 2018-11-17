import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Homepage from './modules/App/Homepage/reducer';

export default combineReducers({
  routing: routerReducer,
  Homepage
});
