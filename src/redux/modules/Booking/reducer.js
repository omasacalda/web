import * as c from './constants';

const apiInitialState = {
  pending: false,
  error: false,
  success: false
};
const initialState = {
  current: {
    id: null,
    date: '',
    type: '',
    person_count: null,
    token: '',
    is_deleted: null,
    inserted_at: '',
    updated_at: '',
    city_id: null,
    user_id: null,
    city: {
      id: null,
      name: '',
      slug: '',
      is_deleted: null
    },
    user: {
      id: null,
      email: '',
      first_name: '',
      last_name: '',
      phone: '',
      type: '',
      is_deleted: null,
      inserted_at: '',
      updated_at: ''
    }
  },
  api: apiInitialState
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case c.REMOVE_PENDING:
    case c.GET_PENDING:
      return {
        ...state,
        api: { ...initialState.api, pending: true }
      };

    case c.REMOVE_ERROR:
    case c.GET_ERROR:
      return {
        ...state,
        api: { ...initialState.api, error: action.payload }
      };

    case c.GET_SUCCESS:
      return {
        ...state,
        current: action.payload,
        api: { ...initialState.api, success: true }
      };

    case c.REMOVE_SUCCESS:
      return {
        ...state,
        current: initialState.current,
        api: { ...initialState.api, success: true }
      };

    default: {
      return state
    }
  }
};
