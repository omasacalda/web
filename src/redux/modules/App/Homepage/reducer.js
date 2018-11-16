import * as c from './constants';

const apiInitialState = {
  pending: false,
  error: false,
  success: false
};

const initialState = {
  data: {},
  api: apiInitialState
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case c.GET_DATA_PENDING:
      return {
        ...state,
        api: { pending: true, success: false, error: false }
      };
    case c.GET_DATA_ERROR:
      return {
        ...state,
        api: { pending: false, success: false, error: action.payload }
      };
    case c.GET_DATA_SUCCESS:
      return {
        ...state,
        // data: action.payload.data
        api: { pending: false, success: true, error: false }
      };

    case c.CLEAR:
      return initialState;

    default: {
      return state;
    }
  }
};
