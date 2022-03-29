import * as types from "../actionType/auth";

const INITIAL_STATE = {
  user: null,
};

const auth = (state = INITIAL_STATE, action) => {
  if (action.type === types.LOGIN) {
    return {
      ...state,
      user: action.payload,
    };
  } else if (action.type === types.LOGOUT) {
    return {
      ...state,
      user: action.payload,
    };
  } else {
    return state;
  }
};

export default auth;
