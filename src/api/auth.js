import { post } from '../utils/superagent';
import { API_HOST } from '../config';

export function auth(payload) {
  return post(`${API_HOST}/auth`, payload);
}
