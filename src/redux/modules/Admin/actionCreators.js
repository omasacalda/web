import * as c from './constants';
import { actionCreator, asyncActionCreator } from '../../../utils/redux';

export const login = asyncActionCreator(
  c.LOGIN_PENDING,
  c.LOGIN_SUCCESS,
  c.LOGIN_ERROR
);

export const logout = asyncActionCreator(
  c.LOGOUT_PENDING,
  c.LOGOUT_SUCCESS,
  c.LOGOUT_ERROR
);

export const getProfile = asyncActionCreator(
  c.GET_PROFILE_PENDING,
  c.GET_PROFILE_SUCCESS,
  c.GET_PROFILE_ERROR
);

export const autoLogin = asyncActionCreator(
  c.AUTO_LOGIN_PENDING,
  c.AUTO_LOGIN_SUCCESS,
  c.AUTO_LOGIN_ERROR
);

export const set = {
  field: actionCreator(c.SET_FIELD)
};

export const clear = actionCreator(c.CLEAR);
export const clearFields = actionCreator(c.CLEAR_FIELDS);
