import * as ac from './actionCreators';
import * as homepageAPI from '../../../api/home';

export function getCities() {
  return async (dispatch) => {
    dispatch(ac.getCities.pending());
    try {
      const data = await homepageAPI.getCities();
      dispatch(ac.getCities.success(data));
    } catch (err) {
      dispatch(ac.getCities.error(err));
    }
  };
}

export function setCity(payload) {
  return dispatch => dispatch(ac.set.city(payload));
}

export function clear() {
  return dispatch => dispatch(ac.clear());
}
