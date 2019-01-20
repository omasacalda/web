import * as ac from './actionCreators';
import * as bookingAPI from '../../../api/bookings';
import StorageService from '../../../services/Storage';
import { NotificationManager } from 'react-notifications';
import history from '../../../history';

export function get(bookingToken) {
  return async (dispatch) => {
    dispatch(ac.get.pending());

    try {
      const bookingDecoded = StorageService.decode(bookingToken);

      if (!bookingDecoded.iss) {
        return dispatch(ac.get.error('Invalid token'));
      }

      const bookingID = bookingDecoded.iss.booking_id;
      const res = await bookingAPI.getByID(bookingID);

      dispatch(ac.get.success(res.data));
    } catch (err) {
      dispatch(ac.get.error(err));
    }
  };
}

export function getByID(bookingID) {
  return async (dispatch) => {
    dispatch(ac.get.pending());

    try {
      const res = await bookingAPI.getByID(bookingID);

      dispatch(ac.get.success(res.data));
    } catch (err) {
      dispatch(ac.get.error(err));
    }
  };
}

export function cancel(bookingToken) {
  return async (dispatch) => {
    dispatch(ac.remove.pending());

    try {
      const bookingDecoded = StorageService.decode(bookingToken);

      if (!bookingDecoded.iss) {
        return dispatch(ac.remove.error('Invalid token'));
      }

      const bookingID = bookingDecoded.iss.booking_id;
      const res = await bookingAPI.deleteBooking(bookingID, bookingToken);

      dispatch(ac.remove.success(res.data));
      NotificationManager.success('', 'Programarea a fost anulata cu succes', 5000);
      history.replace('/calendar/cluj-napoca');
    } catch (err) {
      dispatch(ac.remove.error(err));
    }
  };
}
