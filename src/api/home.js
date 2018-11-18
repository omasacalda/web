import { get } from '../utils/superagent';
import { API_HOST } from '../config';

export function getCities() {
  return get(`${API_HOST}/cities`);
}
