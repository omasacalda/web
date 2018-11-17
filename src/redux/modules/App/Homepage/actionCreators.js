import * as c from './constants';
import { actionCreator, asyncActionCreator } from '../../../../utils/redux';

// example
export const getData = asyncActionCreator(
  c.GET_DATA_PENDING,
  c.GET_DATA_SUCCESS,
  c.GET_DATA_ERROR
);

export const set = {

};

export const clear = actionCreator(c.CLEAR);
