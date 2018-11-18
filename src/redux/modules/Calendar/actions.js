import { NotificationManager } from 'react-notifications';

import * as ac from './actionCreators';
import * as bookingAPI from '../../../api/bookings';

export function getBookings() {
  return async (dispatch) => {
    dispatch(ac.getBookings.pending());
    try {
      const data = await bookingAPI.getBookings();
      dispatch(ac.getBookings.success(data));
    } catch (err) {
      dispatch(ac.getBookings.error(err));
    }
  };
}

export function addBooking(booking) {
  return async (dispatch) => {
    dispatch(ac.addBooking.pending());
    try {
      await bookingAPI.addBooking(booking);
      dispatch(ac.addBooking.success());
      NotificationManager.success(null, 'Programarea s-a adaugat cu succes', 5000);
      dispatch(getBookings());
    } catch (err) {
      NotificationManager.error(null, err.message, 5000);
      dispatch(ac.addBooking.error(err.message));
    }
  };
}

export function setSelectedDate(payload) {
  return dispatch => dispatch(ac.set.date(payload));
}

export function setField(path, payload) {
  return dispatch => dispatch(ac.set.field(payload, path));
}

export function clearFields() {
  return dispatch => dispatch(ac.clearFields());
}

export function clear() {
  return dispatch => dispatch(ac.clear());
}

export function addPendingBookings(bookings = []) {
  return dispatch => dispatch(ac.addPendingBookings(bookings));
}
