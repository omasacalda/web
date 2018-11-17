import * as ac from './actionCreators';
// import * as homepageAPI from '../../../../api/homepage';

export function getData(meta) {
  return async (dispatch) => {
    dispatch(ac.getData.pending());
    try {
      // const data = await homepageAPI.getData(meta);
      dispatch(ac.getData.success());
    } catch (err) {
      dispatch(ac.getData.error(err));
    }
  };
}

export function clear() {
  return dispatch => dispatch(ac.clear());
}
