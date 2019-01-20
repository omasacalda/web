import * as ac from './actionCreators';
import * as bookingAPI from '../../../api/bookings';
import * as socketUtils from '../../../utils/socket'
import { addPendingBookings } from '../Calendar/actions'

export function get(bookingID) {
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
