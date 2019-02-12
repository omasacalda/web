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

const getErrorMessage = (err, res) => {
  try {
    return res.body.data.message
  } catch (err) {
    return `${err}`
  }
}

const handleResponse = (resolve, reject) => (err, res) => {
  if (err) {
    return reject({ message: getErrorMessage(err, res)});
  }
  if (!res.ok) {
    return reject({ message: getErrorMessage(err, res)});
  }
  return resolve(res.body);
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
      .end(handleResponse(resolve, reject));
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
      .end(handleResponse(resolve, reject));
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
      .end(handleResponse(resolve, reject));
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
      .end(handleResponse(resolve, reject));
  });
}
