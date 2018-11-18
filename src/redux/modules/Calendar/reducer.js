import * as c from './constants';

const apiInitialState = {
  pending: false,
  error: false,
  success: false
};

const initialState = {
  bookings: [],
  selectedDate: null,
  api: apiInitialState
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case c.GET_BOOKINGS_PENDING:
      return {
        ...state,
        api: { pending: true, success: false, error: false }
      };
    case c.GET_BOOKINGS_ERROR:
      return {
        ...state,
        api: { pending: false, success: false, error: action.payload }
      };
    case c.GET_BOOKINGS_SUCCESS:
      return {
        ...state,
        bookings: action.payload.data,
        api: { pending: false, success: true, error: false }
      };

    case c.SET_SELECTED_DATE:
      return {
        ...state,
        selectedDate: action.payload
      };

    case c.CLEAR:
      return initialState;

    default: {
      return state;
    }
  }
};
