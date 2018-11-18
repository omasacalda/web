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

export function setSelectedDate(payload) {
  return dispatch => dispatch(ac.set.date(payload));
}

export function clear() {
  return dispatch => dispatch(ac.clear());
}

export function addPendingBookings(bookings = []) {
  return dispatch => dispatch(ac.addPendingBookings(bookings));
}
