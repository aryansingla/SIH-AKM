import * as types from "../actionType/scheme";

const INITIAL_STATE = {
  schemes: [],
};

const scheme = (state = INITIAL_STATE, action) => {
  if (action.type === types.SET_SCHEME) {
    return {
      ...state,
      schemes: action.payload.schemes,
    };
  } else {
    return state;
  }
};

export default scheme;
