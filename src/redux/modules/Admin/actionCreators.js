import * as c from './constants';
import { actionCreator, asyncActionCreator } from '../../../utils/redux';

export const login = asyncActionCreator(
  c.LOGIN_PENDING,
  c.LOGIN_SUCCESS,
  c.LOGIN_ERROR
);

export const set = {
  field: actionCreator(c.SET_FIELD)
};

export const clear = actionCreator(c.CLEAR);
export const clearFields = actionCreator(c.CLEAR_FIELDS);
