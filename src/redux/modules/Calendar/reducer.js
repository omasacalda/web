import * as c from './constants';
import _set from 'lodash.set';

const apiInitialState = {
  pending: false,
  error: false,
  success: false
};

const fieldsInitialState = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  person_count: '4',
  type: 'companie',
  date: null,
  city_id: 1
};

const initialState = {
  bookings: [],
  pendingBookings: [],
  selectedDate: null,
  fields: fieldsInitialState,
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

    case c.ADD_PENDING_BOOKINGS: {
      return {
        ...state,
        pendingBookings: action.payload
      }
    }

    case c.ADD_BOOKING_PENDING:
      return {
        ...state,
        api: { pending: true, success: false, error: false }
      };
    case c.ADD_BOOKING_ERROR:
      return {
        ...state,
        api: { pending: false, success: false, error: action.payload }
      };
    case c.ADD_BOOKING_SUCCESS:
      return {
        ...state,
        api: { pending: false, success: true, error: false }
      };

    case c.SET_FIELD: {
      const fieldsCopy = Object.assign({}, state.fields);
      _set(fieldsCopy, action.path, action.payload);

      return {
        ...state,
        fields: fieldsCopy
      };
    }

    case c.SET_SELECTED_DATE:
      return {
        ...state,
        selectedDate: action.payload
      };

    case c.CLEAR_FIELDS:
      return {
        ...state,
        fields: fieldsInitialState
      };

    case c.CLEAR:
      return initialState;

    default: {
      return state;
    }
  }
};
