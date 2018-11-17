import * as c from './constants';
import { actionCreator, asyncActionCreator } from '../../../utils/redux';

export const getCities = asyncActionCreator(
  c.GET_CITIES_PENDING,
  c.GET_CITIES_SUCCESS,
  c.GET_CITIES_ERROR
);

export const set = {
  city: actionCreator(c.SET_CITY),
};

export const clear = actionCreator(c.CLEAR);
