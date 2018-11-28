import { NotificationManager } from 'react-notifications';
import StorageService from '../../../services/Storage';

import * as ac from './actionCreators';
import * as authAPI from '../../../api/auth';

export function login(payload) {
  return async (dispatch) => {
    dispatch(ac.login.pending());
    try {
      const res = await authAPI.auth(payload);

      if (!res.success || !res.data.token) {
        NotificationManager.error('', 'Error', 5000);
        return dispatch(ac.login.error('No token found'));
      }

      StorageService.store(res.data.token);
      dispatch(ac.login.success(res));
      dispatch(getProfile(res.data.token));
    } catch (err) {
      NotificationManager.error('', err.message, 5000);
      dispatch(ac.login.error(err.message));
    }
  };
}

export function getProfile(token) {

  // console.log('token', token);

  return async (dispatch) => {
    dispatch(ac.getProfile.pending());
    try {
      const res = await authAPI.getProfile(token);

      return console.log('res:', res);

      if (!res.success || !res.data.token) {
        NotificationManager.error('', 'Error', 5000);
        return dispatch(ac.getProfile.error('No profile found'));
      }

      dispatch(ac.getProfile.success(res));
    } catch (err) {
      NotificationManager.error('', err.message, 5000);
      dispatch(ac.login.error(err.message));
    }
  };
}

export function setField(path, payload) {
  return dispatch => dispatch(ac.set.field(payload, path));
}

export function clearFields() {
  return dispatch => dispatch(ac.clearFields());
}

export function clear() {
  return dispatch => dispatch(ac.clear());
}
