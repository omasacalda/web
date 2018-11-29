import { get, post } from '../utils/superagent';
import { API_HOST } from '../config';

export function auth(payload) {
  return post(`${API_HOST}/auth`, payload);
}

export function getProfile(token) {
  return get(`${API_HOST}/user/profile`, {}, token);
}
