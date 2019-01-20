import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import Homepage from './modules/Homepage/reducer';
import Calendar from './modules/Calendar/reducer';
import Socket from './modules/Socket/reducer';
import Admin from './modules/Admin/reducer';
import Booking from './modules/Booking/reducer';

export default combineReducers({
  routing: routerReducer,
  Homepage,
  Calendar,
  Socket,
  Admin,
  Booking
});
