import { get, post, del } from '../utils/superagent';
import { API_HOST } from '../config';

export function getBookings() {
  return get(`${API_HOST}/bookings`);
}

export function getByID(bookingID = '', token) {
  return get(`${API_HOST}/bookings/${bookingID}`, {}, token);
}

export function addBooking(booking) {
  return post(`${API_HOST}/bookings`, booking);
}

export function deleteBooking(ID, token) {
  return del(`${API_HOST}/bookings/${ID}`, {}, token);
}
