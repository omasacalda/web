import * as c from './constants';

const initialState = {
  socket: null
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case c.CONNECT_SUCCESS:
      return {
        ...state,
        socket: action.payload
      };

    default: {
      return state;
    }
  }
};
