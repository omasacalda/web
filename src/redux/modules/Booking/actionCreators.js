import * as c from './constants';
import { asyncActionCreator } from '../../../utils/redux';

export const get = asyncActionCreator(
  c.GET_PENDING,
  c.GET_SUCCESS,
  c.GET_ERROR
);

export const remove = asyncActionCreator(
  c.REMOVE_PENDING,
  c.REMOVE_SUCCESS,
  c.REMOVE_ERROR
);
