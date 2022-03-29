import * as types from "../actionType/filter";

const INITIAL_STATE = {
  category: null,
  stateSelected: null,
};

const filter = (state = INITIAL_STATE, action) => {
  if (action.type === types.SET_CATEGORY) {
    return {
      ...state,
      category: action.payload,
    };
  } else if (action.type === types.SET_STATE) {
    return {
      ...state,
      stateSelected: action.payload,
    };
  } else {
    return state;
  }
};

export default filter;
