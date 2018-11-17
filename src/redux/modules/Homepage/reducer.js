import * as c from './constants';

const apiInitialState = {
  pending: false,
  error: false,
  success: false
};

const initialState = {
  cities: [],
  selectedCity: null,
  api: apiInitialState
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case c.GET_CITIES_PENDING:
      return {
        ...state,
        api: { pending: true, success: false, error: false }
      };
    case c.GET_CITIES_ERROR:
      return {
        ...state,
        api: { pending: false, success: false, error: action.payload }
      };
    case c.GET_CITIES_SUCCESS:
      return {
        ...state,
        cities: action.payload.data,
        api: { pending: false, success: true, error: false }
      };

    case c.SET_CITY:
      return {
        ...state,
        selectedCity: state.cities.find(item => {
          return item.id === parseInt(action.payload)
        })
      };

    case c.CLEAR:
      return initialState;

    default: {
      return state;
    }
  }
};
