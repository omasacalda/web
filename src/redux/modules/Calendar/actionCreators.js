import * as c from './constants';
import { actionCreator, asyncActionCreator } from '../../../utils/redux';

export const getBookings = asyncActionCreator(
  c.GET_BOOKINGS_PENDING,
  c.GET_BOOKINGS_SUCCESS,
  c.GET_BOOKINGS_ERROR
);

export const addBooking = asyncActionCreator(
  c.ADD_BOOKING_PENDING,
  c.ADD_BOOKING_SUCCESS,
  c.ADD_BOOKING_ERROR
);

export const set = {
  date: actionCreator(c.SET_SELECTED_DATE),
  field: actionCreator(c.SET_FIELD)
};

export const addPendingBookings = actionCreator(c.ADD_PENDING_BOOKINGS);

export const clear = actionCreator(c.CLEAR);
export const clearFields = actionCreator(c.CLEAR_FIELDS);
