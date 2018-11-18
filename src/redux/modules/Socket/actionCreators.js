import * as c from './constants';
import { actionCreator, asyncActionCreator } from '../../../utils/redux';

export const connect = asyncActionCreator(
  c.CONNECT_PENDING,
  c.CONNECT_SUCCESS,
  c.CONNECT_ERROR
);

export const setBookingDate = actionCreator(c.SET_BOOKING_DATE)
export const removeBookingDate = actionCreator(c.REMOVE_BOOKING_DATE)
