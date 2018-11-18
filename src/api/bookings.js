import { get } from '../utils/superagent';
import { API_HOST } from '../config';

export function getBookings() {
  return get(`${API_HOST}/bookings`);
}
