import * as ac from './actionCreators';
import * as bookingAPI from '../../../api/bookings';
import * as socketUtils from '../../../utils/socket'
import { addPendingBookings } from '../Calendar/actions'

export function connect() {
  return dispatch => {
    dispatch(ac.connect.pending());

    socketUtils.connectSocket((socket) => {
      socket.on("connect", function(){
        console.log("socket connected");
      });
      socket.on("disconnect", function(){
        console.log("socket disconnected");
      });
      socket.on('bookings_in_progress', (data) => {
        console.log('data', data);
        dispatch(addPendingBookings(data))
      });
      dispatch(ac.connect.success(socket));
    });
  }
}

export const setBookingDate = () => {
  return (dispatch, getState) => {
    const bookingDate = getState().Calendar.selectedDate;
    socketUtils.emitEvent('set_booking_date', { date: bookingDate });
    dispatch(ac.setBookingDate());
  }
}

export const removeBookingDate = (bookingDate = '') => {
  return (dispatch, getState) => {
    const bookingDate = getState().Calendar.selectedDate;
    socketUtils.emitEvent('remove_booking_date', { date: bookingDate });
    dispatch(ac.removeBookingDate());
  }
}
