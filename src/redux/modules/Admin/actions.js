import { NotificationManager } from 'react-notifications';
import history from '../../../history';

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
      history.push('/calendar/cluj-napoca');
    } catch (err) {
      NotificationManager.error('', err.message, 5000);
      dispatch(ac.login.error(err.message));
    }
  };
}

export function getProfile(token) {
  return async (dispatch) => {
    dispatch(ac.getProfile.pending());
    try {
      const res = await authAPI.getProfile(token);

      if (!res.success || !res.data) {
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

export function autoLogin() {
  return async (dispatch) => {
    dispatch(ac.autoLogin.pending());
    try {
      const token = StorageService.get();

      if (!token) {
        return;
      }

      if (StorageService.isExpired(token)) {
        dispatch(ac.autoLogin.error('Auth token expired'));
      }

      const res = await authAPI.getProfile(token);

      if (!res.success || !res.data) {
        return dispatch(ac.autoLogin.error('No profile found'));
      }

      dispatch(ac.getProfile.success(res));
    } catch (err) {
      dispatch(ac.autoLogin.error(err.message));
    }
  };
}

export function logout() {
  return async (dispatch) => {
    dispatch(ac.logout.pending());
    try {
      const token = StorageService.get();

      if (!token) {
        return
      }

      await StorageService.remove(token);
      dispatch(ac.logout.success());
      window.location = "/";
      // history.replace('/'); // TODO: check this
    } catch (err) {
      NotificationManager.error('', 'Unable to logout', 5000);
      dispatch(ac.logout.error('Unable to logout'));
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
