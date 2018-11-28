import * as c from './constants';
import _set from 'lodash.set';

const apiInitialState = {
  pending: false,
  error: false,
  success: false
};

const fieldsInitialState = {
  email: '',
  password: '',
};

const initialState = {
  currentUser: {
    id: null,
    email: '',
    first_name: '',
    is_deleted: false,
    last_name: '',
    phone: '',
    type: ''
  },
  fields: fieldsInitialState,
  api: apiInitialState
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case c.LOGIN_PENDING:
      return {
        ...state,
        api: { pending: true, success: false, error: false }
      };
    case c.LOGIN_ERROR:
      return {
        ...state,
        api: { pending: false, success: false, error: action.payload }
      };
    case c.LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          token: action.payload.data
        },
        api: { pending: false, success: true, error: false }
      };

    case c.GET_PROFILE_PENDING:
      return {
        ...state,
        api: { pending: true, success: false, error: false }
      };
    case c.GET_PROFILE_ERROR:
      return {
        ...state,
        api: { pending: false, success: false, error: action.payload }
      };
    case c.GET_PROFILE_SUCCESS:
      return {
        ...state,
        currentUser: action.payload.data,
        api: { pending: false, success: true, error: false }
      };

    case c.AUTO_LOGIN_PENDING:
      return {
        ...state,
        api: { pending: true, success: false, error: false }
      };
    case c.AUTO_LOGIN_ERROR:
      return {
        ...state,
        currentUser: initialState.currentUser,
        api: { pending: false, success: false, error: action.payload }
      };
    case c.AUTO_LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload.data,
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
