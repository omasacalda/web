import request from 'superagent';
import { TIMEOUT } from '../config';

/**
 * @description Append token & other header fields to the default request header
 *
 * @param token: String
 * @param others: Object
 * @returns Object
 * @private
 */
function getRequestHeader(token = null, others = {}) {
  let header = {
    'Content-Type': 'application/json',
    ...others
  };
  if (token) {
    header = Object.assign({}, header, { Authorization: `Bearer ${token}` });
  }
  return header;
}

/**
 * @description GET request
 *
 * @param path: String
 * @param query: Object
 * @param token: String
 * @returns Promise
 */
export function get(path, query = {}, token = null) {
  return new Promise((resolve, reject) => {
    const header = getRequestHeader(token);
    request
      .get(path)
      .query(query)
      .set(header)
      .timeout({ response: TIMEOUT })
      .end((err, res) => {
        if (!res || !res.ok || err) {
          if (err.timeout) {
            return reject({ message: 'Something went wrong. Please try again or contact support.' });
          }

          return reject({ message: err });
        }

        return resolve(res.body || res.text);
      });
  });
}

/**
 * @description POST request
 *
 * @param path: String
 * @param payload: Object
 * @param token: String
 * @returns Promise
 */
export function post(path, payload, token = null) {
  return new Promise((resolve, reject) => {
    const header = getRequestHeader(token);
    request
      .post(path)
      .set(header)
      .send(payload)
      .timeout({ response: TIMEOUT })
      .end((err, res) => {
        if (!res || !res.ok || err) {
          if (err.timeout) {
            return reject({ message: 'Something went wrong. Please try again or contact support.' });
          }

          return reject({ message: res.body.data.message || err.toString() });
        }

        if (!res.body) {
          return reject({ message: 'Request failed' });
        }

        return resolve(res.body);
      });
  });
}

/**
 * @description PUT request
 *
 * @param path: String
 * @param payload: Object
 * @param token: String
 * @returns Promise
 */
export function put(path, payload, token = null) {
  return new Promise((resolve, reject) => {
    const header = getRequestHeader(token);
    request
      .post(path)
      .send(payload)
      .set(header)
      .timeout({ response: TIMEOUT })
      .end((err, res) => {
        if (err) {
          return reject({ message: err });
        }
        if (!res.body.success) {
          return reject(res.body.err);
        }
        return resolve(res.body);
      });
  });
}

/**
 * @description DELETE request
 *
 * @param path: String
 * @param query: Object
 * @param token: String
 * @returns Promise
 */
export function del(path, query = {}, token = null) {
  return new Promise((resolve, reject) => {
    const header = getRequestHeader(token);
    request
      .delete(path)
      .query(query)
      .set(header)
      .timeout({ response: TIMEOUT })
      .end((err, res) => {
        if (err) {
          return reject({ message: err });
        }

        if (!res.body) {
          return reject({ message: 'Request failed' });
        }

        return resolve(res.body);
      });
  });
}
