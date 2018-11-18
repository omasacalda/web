import * as c from './constants';
import { actionCreator, asyncActionCreator } from '../../../utils/redux';

export const getBookings = asyncActionCreator(
  c.GET_BOOKINGS_PENDING,
  c.GET_BOOKINGS_SUCCESS,
  c.GET_BOOKINGS_ERROR
);

export const set = {
  date: actionCreator(c.SET_SELECTED_DATE),
};

export const addPendingBookings = actionCreator(c.ADD_PENDING_BOOKINGS);

export const clear = actionCreator(c.CLEAR);
