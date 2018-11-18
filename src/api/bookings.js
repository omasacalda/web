import { get, post } from '../utils/superagent';
import { API_HOST } from '../config';

export function getBookings() {
  return get(`${API_HOST}/bookings`);
}

export function addBooking(booking) {
  return post(`${API_HOST}/bookings`, booking);
}
